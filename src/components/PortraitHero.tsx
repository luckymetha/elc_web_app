import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface PortraitHeroProps {
  onOpenRegister: (programName?: string) => void;
  onExplorePrograms: () => void;
}

export const PortraitHero: React.FC<PortraitHeroProps> = ({
  onOpenRegister,
  onExplorePrograms,
}) => {
  return (
    <section className="bg-white border-b border-slate-200/80 pt-10 pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#C81E1E]" />
              <span>LKP &amp; LPK Resmi • Ciparay &amp; Pacet, Kab. Bandung</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1F3A] tracking-tight leading-[1.1]">
              Kuasai Bahasa Inggris &amp; Keahlian Kerja{' '}
              <span className="font-serif-editorial italic font-normal text-[#C81E1E]">
                Tanpa Beban.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Pusat kursus Bahasa Inggris komunikatif, Lab Komputer perkantoran mandiri, dan Lembaga Pelatihan Kerja (LPK) bersertifikat BNSP sejak 1992. Dibina langsung oleh{' '}
              <strong className="font-semibold text-slate-900">Mr. Entis Sutisna</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B1F3A]" />
                Izin Disnaker (1994) &amp; Disdik (2004)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B1F3A]" />
                Praktik 1 Siswa 1 Komputer
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B1F3A]" />
                Uji Kompetensi BNSP Resmi
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenRegister()}
                className="px-6 py-3.5 rounded-lg bg-[#0B1F3A] hover:bg-[#14335c] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Konsultasi &amp; Daftar Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExplorePrograms}
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-colors flex items-center justify-center cursor-pointer"
              >
                <span>Lihat Kurikulum &amp; Biaya</span>
              </button>
            </div>
          </div>

          {/* Right Framed Editorial Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] lg:aspect-[4/4]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Suasana kelas interaktif di English Lovers Club Ciparay"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-xl p-4 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#C81E1E]">
                  Active Learning Environment
                </p>
                <p className="text-sm font-bold text-[#0B1F3A] mt-0.5">
                  &ldquo;Bukan sekadar teori — langsung praktik berbicara &amp; kerja kantor.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Institutional Metrics Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">1992</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Tahun Berdiri di Ciparay</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">5.000+</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Alumni Lulus &amp; Bekerja</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">BNSP</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Terakreditasi Disnaker &amp; Disdik</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">Juara 2</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Jambore PTK PNF Jawa Barat</p>
          </div>
        </div>
      </div>
    </section>
  );
};
