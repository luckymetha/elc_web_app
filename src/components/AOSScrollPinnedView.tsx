import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import type { Program } from '../data/programs';
import {
  Award,
  Sparkles,
  MessageSquare,
  Monitor,
  Laptop,
  Users,
  ShieldCheck,
  Briefcase,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Compass,
  Layers,
  ChevronDown
} from 'lucide-react';

interface AOSScrollPinnedViewProps {
  programs: Program[];
  activeProgramId: string;
  onProgramChange: (id: string) => void;
  onRegisterClick: (programTitle: string) => void;
}

export const AOSScrollPinnedView: React.FC<AOSScrollPinnedViewProps> = ({
  programs,
  activeProgramId,
  onProgramChange,
  onRegisterClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track overall scroll progress inside the 320vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Sync scroll progress with program change
  scrollYProgress.on('change', (latest) => {
    let targetIndex = 0;
    if (latest < 0.38) {
      targetIndex = 0;
    } else if (latest < 0.72) {
      targetIndex = 1;
    } else {
      targetIndex = 2;
    }
    const targetProgram = programs[targetIndex];
    if (targetProgram && targetProgram.id !== activeProgramId) {
      onProgramChange(targetProgram.id);
    }
  });

  const currentProgram = programs.find((p) => p.id === activeProgramId) || programs[0];
  const activeIdx = programs.findIndex((p) => p.id === currentProgram.id);

  // Helper for program icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-blue-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-600" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-emerald-600" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-teal-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-cyan-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-orange-600" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-rose-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  // Click step to smoothly scroll
  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = containerTop + (containerHeight * (index / 2));
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    onProgramChange(programs[index].id);
  };

  return (
    <div ref={containerRef} className="relative h-[320vh] bg-slate-50">
      {/* =========================================================================
          STICKY PINNED CONTAINER (Layar terkunci saat di-scroll)
          ========================================================================= */}
      <div className="sticky top-20 h-[calc(100vh-5rem)] w-full flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-100 via-indigo-50 to-amber-50 blur-[120px] pointer-events-none rounded-full" />

        <div className="w-full max-w-6xl mx-auto flex flex-col items-center flex-1 justify-between">
          {/* Header Title */}
          <div className="text-center max-w-2xl mx-auto mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs mb-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span>AOS Pinned Showcase: Scroll ke bawah, kartu berubah otomatis di layar</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Tiga Pilar Keunggulan ELC Ciparay
            </h1>
          </div>

          {/* Vertical/Horizontal Indicator Step (Bukan Tab Rumit, Hanya Step Indicator 1-2-3) */}
          <div className="flex items-center gap-3 mb-3">
            {programs.map((prog, idx) => {
              const isCurrent = idx === activeIdx;
              return (
                <button
                  key={prog.id}
                  onClick={() => scrollToStep(idx)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    isCurrent ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{prog.id === 'english' ? 'Bahasa Inggris' : prog.id === 'computer' ? 'Komputer & IT' : 'LPK BNSP'}</span>
                </button>
              );
            })}
          </div>

          {/* =========================================================================
              THE HERO CARD OBJECT (Bermutasi otomatis saat user scroll)
              ========================================================================= */}
          <div className="w-full max-w-5xl flex-1 flex flex-col justify-center">
            <motion.div
              key={currentProgram.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left Side: Summary & Curricula */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full border border-blue-200 bg-blue-50 text-blue-700">
                      {currentProgram.badge}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {currentProgram.duration}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5" />
                      {currentProgram.level}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {currentProgram.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 italic mt-0.5">
                      "{currentProgram.tagline}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentProgram.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Materi Utama:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentProgram.highlights.slice(0, 4).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200/80">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 font-medium leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400">Target Karir:</span>
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] bg-slate-100 text-slate-700 font-medium">
                        {currentProgram.careerOpportunities[0]}
                      </span>
                    </div>

                    <button
                      onClick={() => onRegisterClick(currentProgram.title)}
                      className={`px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer bg-gradient-to-r ${currentProgram.color.gradient} hover:opacity-90`}
                    >
                      <span>Daftar Kelas</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Specialized Feature Pillars */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/90 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Keunggulan Fasilitas</span>
                  </h3>

                  {currentProgram.features.map((feat, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 rounded-lg bg-blue-50">
                          {getIcon(feat.iconName)}
                        </div>
                        <h4 className="text-xs font-bold text-slate-900">{feat.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-600 pl-8 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}

                  <div className="pt-2 border-t border-slate-200 grid grid-cols-3 gap-2 text-center">
                    {currentProgram.stats.map((st, i) => (
                      <div key={i} className="bg-white p-2 rounded-xl border border-slate-200">
                        <p className="text-sm font-black text-blue-600">{st.value}</p>
                        <p className="text-[9px] text-slate-500 mt-0.5 font-medium">{st.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Hint */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ChevronDown className="w-4 h-4 animate-bounce text-blue-600" />
            <span>Gulir mouse ke bawah untuk melihat pilar berikutnya & alur fitur portrait</span>
          </div>
        </div>
      </div>
    </div>
  );
};
