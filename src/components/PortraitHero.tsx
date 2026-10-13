import { ArrowRight, Award, Sparkles } from 'lucide-react';

interface PortraitHeroProps {
  onOpenRegister: (programName?: string) => void;
  onExplorePrograms: () => void;
}

export const PortraitHero: React.FC<PortraitHeroProps> = ({
  onOpenRegister,
  onExplorePrograms
}) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/60 via-[#fbfbf9] to-amber-50/30 font-nunito">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        
        {/* Top Text Content */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          {/* Established Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-200/90 text-amber-900 text-xs font-bold shadow-2xs">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Berdiri Sejak 1992 • Izin Disnaker 1994 & Disdik 2004</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Kuasai Bahasa Inggris & Komputer{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
              Tanpa Beban Bersama ELC
            </span>
          </h1>

          {/* Subtitle Narrative */}
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-semibold">
            Pusat kursus Bahasa Inggris komunikatif, Lab Komputer perkantoran mandiri, dan Lembaga Pelatihan Kerja (LPK) resmi BNSP di Ciparay & Pacet, Kabupaten Bandung. Dibina langsung oleh <strong>Mr. Entis Sutisna</strong> (Juara 2 Jambore PTK PNF Jawa Barat).
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenRegister()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:brightness-105 text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Daftar Siswa Baru</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExplorePrograms}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-amber-50/70 border border-amber-200 text-slate-800 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Lihat Paket Kelas & Biaya</span>
            </button>
          </div>
        </div>

        {/* Visual Banner Siswa Belajar (Aesthetic Learning Atmosphere) */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-200/80 shadow-xl bg-white p-2 sm:p-3">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
              alt="Suasana Belajar Siswa di ELC" 
              className="w-full h-full object-cover object-center filter saturate-110"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-amber-500 text-white text-xs font-black rounded-full flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Metode Belajar Tanpa Beban</span>
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full">
                  Suasana Hangat, Interaktif & Percaya Diri
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black max-w-2xl leading-tight">
                "Bukan Hanya Pintar Teori, Tapi Mahir Berbicara & Mengoperasikan Komputer Terapan"
              </h2>
            </div>
          </div>
        </div>

        {/* Quick Trust Highlights Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="p-4 bg-white rounded-2xl border border-amber-200/80 shadow-2xs">
            <p className="text-xl font-black text-amber-600">1992</p>
            <p className="text-xs text-slate-500 font-bold">Tahun Berdiri ELC</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-amber-200/80 shadow-2xs">
            <p className="text-xl font-black text-emerald-600">5.000+</p>
            <p className="text-xs text-slate-500 font-bold">Alumni Berhasil</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-amber-200/80 shadow-2xs">
            <p className="text-xl font-black text-orange-600">BNSP & Disdik</p>
            <p className="text-xs text-slate-500 font-bold">Legalitas Resmi</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-amber-200/80 shadow-2xs">
            <p className="text-xl font-black text-rose-600">Juara 2</p>
            <p className="text-xs text-slate-500 font-bold">Jambore PTK Jawa Barat</p>
          </div>
        </div>

      </div>
    </section>
  );
};

