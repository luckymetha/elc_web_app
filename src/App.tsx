import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PortraitHero } from './components/PortraitHero';
import { ProgramDetailPortraitStream } from './components/ProgramDetailPortraitStream';
import { AOSPinnedMethodologyStream } from './components/AOSPinnedMethodologyStream';
import { AOSPinnedStoriesStream } from './components/AOSPinnedStoriesStream';
import { DailyLearningLab } from './components/DailyLearningLab';
import { InteractiveCurriculumFinder } from './components/InteractiveCurriculumFinder';
import { EnhancedCompanyProfileSection } from './components/EnhancedCompanyProfileSection';
import { PortraitGrammarAndStories } from './components/PortraitGrammarAndStories';
import { CertificateVerificationWidget } from './components/CertificateVerificationWidget';
import { RegisterModal } from './components/RegisterModal';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';
import { INSTITUTION_INFO } from './data/programs';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('english');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState('English Lovers Club (ELC)');

  const handleOpenRegister = (title?: string) => {
    if (title) {
      setSelectedProgramTitle(title);
    }
    setIsRegisterOpen(true);
  };

  const handleScrollToPrograms = () => {
    const elem = document.getElementById('katalog-program');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 1. TOP NAVBAR (Sticky Ringan) */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          const elem = document.getElementById(`program-${tab}`);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onOpenRegisterModal={() => handleOpenRegister()}
      />

      <main className="flex-1 pt-20">
        {/* 2. NATURAL PORTRAIT HERO (Tanpa Glitch, Mengalir Elegan) */}
        <PortraitHero
          onOpenRegister={() => handleOpenRegister()}
          onExplorePrograms={handleScrollToPrograms}
        />

        {/* 3. ALUR FITUR PORTRAIT PANJANG KE BAWAH */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
          
          {/* FITUR 1: KATALOG PAKET KELAS (PORTRAIT STREAM) */}
          <div id="katalog-program">
            <ProgramDetailPortraitStream onRegisterClick={(title) => handleOpenRegister(title)} />
          </div>
        </div>

        {/* FITUR 2: FULL-PAGE EDGE-TO-EDGE AOS PINNED METHODOLOGY & SUASANA BELAJAR */}
        <div className="w-full my-12">
          <AOSPinnedMethodologyStream />
        </div>

        {/* LANJUTAN ALUR FITUR PORTRAIT PANJANG KE BAWAH */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
          {/* FITUR 3: AOS PINNED TESTIMONI (SELURUH TESTIMONI DARI BLOG BERGANTI DENGAN AOS SAAT SCROLL & BISA KLIK) */}
          <div className="space-y-4">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
                AOS Interactive Testimonial Stream
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Kisah & Pengalaman Nyata Alumni ELC
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Layar terkunci (pinned) saat Anda menggulir. Seluruh cerita alumni asli dari blogspot ELC bertransformasi halus di depan Anda.
              </p>
            </div>

            <AOSPinnedStoriesStream />
          </div>

          {/* FITUR 3: MINI AUDIO LAB INTERAKTIF (BERSUARA) */}
          <DailyLearningLab />

          {/* FITUR 4: INTERACTIVE COURSE MATCHER (KUIS 30 DETIK) */}
          <InteractiveCurriculumFinder
            onSelectProgram={(programId) => setActiveTab(programId)}
            onOpenRegister={(programName) => handleOpenRegister(programName)}
          />

          {/* FITUR 5: CATATAN MATERI GRAMMAR KHAS MR. ENTIS */}
          <PortraitGrammarAndStories />

          {/* FITUR 6: PORTAL VERIFIKASI SERTIFIKAT ALUMNI */}
          <CertificateVerificationWidget />

          {/* FITUR 7: COMPANY PROFILE LENGKAP & SEJARAH SEJAK 1992 */}
          <EnhancedCompanyProfileSection />

          {/* CALL TO ACTION BANNER */}
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-600 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-700/20">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 bg-white/15 border border-white/20 text-white text-xs font-semibold rounded-full inline-block mb-1">
                Pendaftaran Siswa Baru ELC Ciparay
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Mulai Masa Depan Anda Bersama ELC Sekarang!
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
                Belajar Bahasa Inggris tanpa beban mental, kuasai komputer terapan perkantoran, dan raih sertifikat profesi BNSP resmi.
              </p>
            </div>
            <button
              onClick={() => handleOpenRegister()}
              className="px-8 py-4 bg-white hover:bg-slate-100 text-blue-800 font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* 4. FOOTER RESMI DI PALING BAWAH HALAMAN */}
      <footer className="border-t border-slate-200 bg-white py-14 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center">
                ELC
              </div>
              <span className="font-extrabold text-base text-slate-900">
                LKP & LPK ENGLISH LOVERS CLUB
              </span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Lembaga Kursus dan Pelatihan resmi sejak 1992 di Ciparay & Pacet, Kabupaten Bandung. Berdedikasi mencetak lulusan cakap berbahasa Inggris, mahir teknologi komputer, dan memiliki sertifikasi kerja BNSP.
            </p>
            <p className="text-slate-400 text-[11px]">
              Pimpinan Lembaga: <strong>Mr. Entis Sutisna</strong> (Juara 2 Jambore PTK PNF Jawa Barat)
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-3 text-sm flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Alamat Lengkap</span>
            </h4>
            <div className="space-y-2 text-slate-600 text-xs leading-relaxed">
              <p>
                <strong>Kampus Pusat:</strong><br />
                {INSTITUTION_INFO.mainOffice}
              </p>
              <p className="pt-1">
                <strong>Kampus Cabang:</strong><br />
                {INSTITUTION_INFO.branchOffice}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-3 text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Legalitas & Kontak</span>
            </h4>
            <div className="space-y-1.5 text-slate-600 text-xs">
              <p>✓ {INSTITUTION_INFO.operationalPermitDisnaker}</p>
              <p>✓ {INSTITUTION_INFO.operationalPermitDisdik}</p>
              <p>✓ Sertifikasi BNSP Terakreditasi</p>
              <p className="pt-1 font-semibold text-slate-800">Telepon: {INSTITUTION_INFO.phone}</p>
              <p className="text-blue-600 hover:underline">
                <a href={`https://${INSTITUTION_INFO.blog}`} target="_blank" rel="noopener noreferrer">
                  {INSTITUTION_INFO.blog}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} English Lovers Club (ELC). Seluruh Hak Cipta Dilindungi.</p>
          <p>Terdaftar resmi di Disnaker & Disdik Kabupaten Bandung, Jawa Barat.</p>
        </div>
      </footer>

      {/* MODAL PENDAFTARAN */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultProgram={selectedProgramTitle}
      />

      {/* FLOATING WHATSAPP KONSULTASI CEPAT (100% GRATIS) */}
      <FloatingWhatsAppWidget />
    </div>
  );
}

export default App;
