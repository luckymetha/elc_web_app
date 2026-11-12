import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { PortraitHero } from './components/PortraitHero';
import { AOSPinnedMethodologyStream } from './components/AOSPinnedMethodologyStream';
import { AOSPinnedStoriesStream } from './components/AOSPinnedStoriesStream';
import { InteractiveCurriculumFinder } from './components/InteractiveCurriculumFinder';
import { EnhancedCompanyProfileSection } from './components/EnhancedCompanyProfileSection';
import { CertificateVerificationWidget } from './components/CertificateVerificationWidget';
import { RegisterModal } from './components/RegisterModal';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';
import { EnglishPage } from './pages/EnglishPage';
import { ComputerPage } from './pages/ComputerPage';
import { LPKPage } from './pages/LPKPage';
import { StudentMobileApp } from './components/StudentMobileApp';
import { BackofficeDashboard } from './components/BackofficeDashboard';
import { INSTITUTION_INFO } from './data/programs';
import {
  ArrowRight,
  Briefcase,
  Check,
  GraduationCap,
  Languages,
  Lock,
  MapPin,
  Monitor,
  ShieldCheck
} from 'lucide-react';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState('English Lovers Club (ELC)');

  const getActiveTabFromPath = (path: string) => {
    if (path.startsWith('/siswa') || path === '/login-siswa') return 'mobile-app';
    if (path.startsWith('/admin') || path.startsWith('/backoffice') || path === '/login-admin') return 'backoffice';
    if (path.startsWith('/program/english') || path === '/english') return 'english';
    if (path.startsWith('/program/computer') || path === '/computer') return 'computer';
    if (path.startsWith('/program/lpk') || path === '/lpk') return 'lpk';
    if (path.startsWith('/verifikasi') || path === '/cek-sertifikat') return 'verification';
    return 'home';
  };

  const activeTab = getActiveTabFromPath(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleSelectTab = (tabId: string) => {
    switch (tabId) {
      case 'home':
        navigate('/');
        break;
      case 'english':
        navigate('/program/english');
        break;
      case 'computer':
        navigate('/program/computer');
        break;
      case 'lpk':
        navigate('/program/lpk');
        break;
      case 'verification':
        navigate('/verifikasi');
        break;
      case 'mobile-app':
        navigate('/siswa');
        break;
      case 'backoffice':
        navigate('/admin');
        break;
      default:
        navigate('/');
    }
  };

  const handleOpenRegister = (title?: string) => {
    if (title) {
      setSelectedProgramTitle(title);
    }
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#0B1F3A] selection:text-white">
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenRegisterModal={() => handleOpenRegister()}
      />

      <main className="flex-1 pt-18">
        {/* ======================================================== */}
        {/* PAGE 1: LANDING PAGE UTAMA */}
        {/* ======================================================== */}
        {activeTab === 'home' && (
          <div>
            {/* Editorial Split Hero */}
            <PortraitHero
              onOpenRegister={() => handleOpenRegister()}
              onExplorePrograms={() => {
                const elem = document.getElementById('ringkasan-pilar');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 3 Pilar Program Pendidikan */}
            <section id="ringkasan-pilar" className="bg-slate-50/70 border-b border-slate-200/80 py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto space-y-10">
                <div className="max-w-2xl space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C81E1E]">
                    Program Pendidikan Resmi
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                    Tiga Pilar Keahlian di ELC Ciparay
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pilih program sesuai kebutuhan akademis atau target karir Anda. Setiap kelas dibimbing langsung oleh instruktur berpengalaman.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Pilar 1: Bahasa Inggris */}
                  <div
                    onClick={() => handleSelectTab('english')}
                    className="p-7 bg-white rounded-2xl border border-slate-200 hover:border-[#0B1F3A] transition-colors cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#0B1F3A] flex items-center justify-center">
                          <Languages className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          01 · Bahasa
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0B1F3A] group-hover:text-[#C81E1E] transition-colors">
                          English Lovers Club (ELC)
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mt-2">
                          Metode active speaking &ldquo;Belajar Tanpa Beban&rdquo;, persiapan TOEFL, dan kelas terstruktur dari tingkat Kids hingga Mahasiswa.
                        </p>
                      </div>
                    </div>
                    <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B1F3A]">
                      <span>Pelajari Kurikulum</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Pilar 2: Komputer */}
                  <div
                    onClick={() => handleSelectTab('computer')}
                    className="p-7 bg-white rounded-2xl border border-slate-200 hover:border-[#0B1F3A] transition-colors cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#0B1F3A] flex items-center justify-center">
                          <Monitor className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          02 · Teknologi
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0B1F3A] group-hover:text-[#C81E1E] transition-colors">
                          ELC Computer Academy
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mt-2">
                          Lab 1 Siswa 1 PC ber-AC. Menguasai rumus Excel terapan kerja kantor, administrasi Word, dan desain grafis Corel/Photoshop.
                        </p>
                      </div>
                    </div>
                    <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B1F3A]">
                      <span>Pelajari Kurikulum</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Pilar 3: LPK BNSP */}
                  <div
                    onClick={() => handleSelectTab('lpk')}
                    className="p-7 bg-white rounded-2xl border border-slate-200 hover:border-[#0B1F3A] transition-colors cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#0B1F3A] flex items-center justify-center">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          03 · Vokasi
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0B1F3A] group-hover:text-[#C81E1E] transition-colors">
                          Pelatihan Kerja &amp; BNSP
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mt-2">
                          Berizin Disnaker sejak 1994. Sertifikasi kompetensi resmi berstandar SKKNI/BNSP disertai bimbingan wawancara kerja.
                        </p>
                      </div>
                    </div>
                    <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B1F3A]">
                      <span>Pelajari Kurikulum</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Full-Page Pinned Methodology Stream (Navy Editorial) */}
            <div className="w-full">
              <AOSPinnedMethodologyStream />
            </div>

            {/* Konten Beranda Lanjutan */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
              {/* Testimoni Alumni */}
              <div className="space-y-4">
                <div className="max-w-2xl space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C81E1E]">
                    Rekam Jejak Lulusan
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                    Kisah &amp; Pengalaman Nyata Alumni ELC
                  </h2>
                  <p className="text-sm text-slate-600">
                    Gulir halaman atau pilih nama alumni untuk membaca pengalaman belajar mereka bersama ELC Ciparay.
                  </p>
                </div>
                <AOSPinnedStoriesStream />
              </div>

              {/* Interactive Course Matcher */}
              <InteractiveCurriculumFinder
                onSelectProgram={(programId) => handleSelectTab(programId)}
                onOpenRegister={(programName) => handleOpenRegister(programName)}
              />

              {/* Company Profile & Sejarah */}
              <EnhancedCompanyProfileSection />

              {/* Clean Institutional CTA Banner */}
              <div className="bg-[#0B1F3A] rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-300">
                    Pendaftaran Siswa Baru
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Mulai Langkah Pendidikan Anda Bersama ELC
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Konsultasikan kebutuhan kelas Bahasa Inggris, Komputer Perkantoran, atau Sertifikasi Kerja BNSP langsung bersama tim akademik kami.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenRegister()}
                  className="px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0B1F3A] font-bold text-sm rounded-lg transition-colors flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Daftar Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 2: KURSUS BAHASA INGGRIS */}
        {/* ======================================================== */}
        {activeTab === 'english' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <EnglishPage onOpenRegister={handleOpenRegister} />
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 3: KOMPUTER & IT ACADEMY */}
        {/* ======================================================== */}
        {activeTab === 'computer' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ComputerPage onOpenRegister={handleOpenRegister} />
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 4: LPK VOKASI & BNSP */}
        {/* ======================================================== */}
        {activeTab === 'lpk' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <LPKPage onOpenRegister={handleOpenRegister} />
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 5: VERIFIKASI SERTIFIKAT */}
        {/* ======================================================== */}
        {activeTab === 'verification' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C81E1E]">
                Sistem Informasi Keaslian Sertifikat
              </span>
              <h2 className="text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                Verifikasi Ijazah &amp; Sertifikat Resmi ELC
              </h2>
              <p className="text-sm text-slate-600 max-w-xl">
                Validasi keabsahan dokumen tanda kelulusan kursus Bahasa Inggris, Komputer, dan LPK yang dikeluarkan oleh ELC Ciparay.
              </p>
            </div>
            <CertificateVerificationWidget />
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 6: PORTAL SISWA (/siswa) */}
        {/* ======================================================== */}
        {activeTab === 'mobile-app' && (
          <div className="w-full">
            <StudentMobileApp onBackToPortal={() => handleSelectTab('home')} />
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 7: BACKOFFICE ADMIN (/admin) */}
        {/* ======================================================== */}
        {activeTab === 'backoffice' && (
          <div className="w-full">
            <BackofficeDashboard onBackToPortal={() => handleSelectTab('home')} />
          </div>
        )}
      </main>

      {/* FOOTER */}
      {activeTab !== 'mobile-app' && activeTab !== 'backoffice' && (
        <footer className="border-t border-slate-200 bg-slate-50 py-14 px-4 sm:px-6 lg:px-8 text-xs text-slate-600">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-white font-bold text-xs flex items-center justify-center">
                  ELC
                </div>
                <span className="font-bold text-sm text-[#0B1F3A] tracking-tight">
                  LKP &amp; LPK ENGLISH LOVERS CLUB
                </span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed max-w-md">
                Lembaga Kursus dan Pelatihan resmi sejak 1992 di Ciparay &amp; Pacet, Kabupaten Bandung. Mencetak lulusan cakap berbahasa Inggris, mahir teknologi komputer, dan tersertifikasi BNSP.
              </p>
              <p className="text-slate-500 text-xs">
                Pimpinan Lembaga: <strong className="text-slate-800">{INSTITUTION_INFO.director}</strong>
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[#0B1F3A] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C81E1E]" />
                <span>Lokasi Kampus</span>
              </h4>
              <div className="space-y-2.5 text-slate-600 text-xs leading-relaxed">
                <p>
                  <strong className="text-slate-800">Kampus Pusat:</strong>
                  <br />
                  {INSTITUTION_INFO.mainOffice}
                </p>
                <p>
                  <strong className="text-slate-800">Kampus Cabang:</strong>
                  <br />
                  {INSTITUTION_INFO.branchOffice}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[#0B1F3A] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0B1F3A]" />
                <span>Legalitas &amp; Akses Portal</span>
              </h4>
              <div className="space-y-1.5 text-slate-600 text-xs">
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0B1F3A]" />
                  <span>{INSTITUTION_INFO.operationalPermitDisnaker}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0B1F3A]" />
                  <span>{INSTITUTION_INFO.operationalPermitDisdik}</span>
                </p>
                <p className="pt-1 font-semibold text-slate-800">
                  Telp: {INSTITUTION_INFO.phone}
                </p>
                <p>
                  <a
                    href={`https://${INSTITUTION_INFO.blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0B1F3A] underline hover:text-[#C81E1E]"
                  >
                    {INSTITUTION_INFO.blog}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} English Lovers Club (ELC). Hak Cipta Dilindungi.</p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleSelectTab('mobile-app')}
                className="text-slate-700 hover:text-[#0B1F3A] font-semibold cursor-pointer inline-flex items-center gap-1.5"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Portal Siswa (/siswa)</span>
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={() => handleSelectTab('backoffice')}
                className="text-slate-700 hover:text-[#0B1F3A] font-semibold cursor-pointer inline-flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Backoffice Admin (/admin)</span>
              </button>
            </div>
          </div>
        </footer>
      )}

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultProgram={selectedProgramTitle}
      />

      <FloatingWhatsAppWidget />
    </div>
  );
}

export default App;
