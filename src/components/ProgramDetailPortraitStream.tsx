import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROGRAMS } from '../data/programs';

interface ProgramDetailPortraitStreamProps {
  onRegisterClick: (programTitle: string) => void;
}

export const ProgramDetailPortraitStream: React.FC<ProgramDetailPortraitStreamProps> = ({
  onRegisterClick
}) => {
  return (
    <section className="w-full space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
          Katalog Lengkap & Silabus Kelas
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Pilihan Paket Kelas & Jenjang Pelatihan
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Semua program disajikan secara terurai ke bawah (portrait) agar mudah dibandingkan tanpa perlu berpindah-pindah tab.
        </p>
      </div>

      <div className="space-y-8">
        {PROGRAMS.map((prog, idx) => (
          <div
            key={prog.id}
            id={`program-${prog.id}`}
            className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Top Bar Program */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${prog.color.gradient} text-white flex items-center justify-center font-black text-xl shadow-md`}>
                  0{idx + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {prog.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">{prog.title}</h3>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="text-xs text-slate-500 font-medium px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
                  Durasi: {prog.duration}
                </span>
                <span className="text-xs text-slate-500 font-medium px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
                  {prog.level}
                </span>
              </div>
            </div>

            {/* Description & Tagline */}
            <div className="py-4 space-y-1">
              <p className="text-sm font-medium text-slate-700 italic">"{prog.tagline}"</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{prog.description}</p>
            </div>

            {/* Sub-courses / Paket Kelas (Portrait Grid) */}
            <div className="pt-2 pb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Paket Pilihan Kelas di Program Ini:</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {prog.subCourses?.map((course, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-blue-300 hover:bg-white transition-all shadow-2xs"
                  >
                    <div>
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                        Level: {course.level}
                      </span>
                      <h5 className="text-sm font-bold text-slate-900 mb-1">{course.name}</h5>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">{course.description}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-[10px] text-slate-400">Target: {course.target}</span>
                      <button
                        onClick={() => onRegisterClick(`${prog.title} - ${course.name}`)}
                        className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Daftar</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Highlights & Registration CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold">Keunggulan:</span>
                {prog.highlights.slice(0, 2).map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 text-slate-700 font-medium flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>

              <button
                onClick={() => onRegisterClick(prog.title)}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r ${prog.color.gradient} text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95`}
              >
                <span>Daftar {prog.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
