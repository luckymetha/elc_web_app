import { useState } from 'react';
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
import { INSTITUTION_INFO } from './data/programs';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState('English Lovers Club (ELC)');

  // Scroll to top when page changes
  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRegister = (title?: string) => {
    if (title) {
      setSelectedProgramTitle(title);
    }
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-slate-800 flex flex-col selection:bg-amber-500 selection:text-white font-nunito">
      {/* 1. TOP NAVBAR (Multi-Page Navigation) */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenRegisterModal={() => handleOpenRegister()}
      />

      <main className="flex-1 pt-20">
        {/* ======================================================== */}
        {/* PAGE 1: BERANDA / HOME PORTAL LENGKAP */}
        {/* ======================================================== */}
        {activeTab === 'home' && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* Hero Banner */}
            <PortraitHero
              onOpenRegister={() => handleOpenRegister()}
              onExplorePrograms={() => {
                const elem = document.getElementById('ringkasan-pilar');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Ringkasan 3 Pilar dengan Tombol Buka Halaman Spesifik */}
            <div id="ringkasan-pilar" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300 inline-block">
                  Pusat Kursus & Pelatihan Resmi
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Tiga Pilar Pendidikan di ELC Ciparay
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                  Klik pilar program di bawah ini untuk melihat kurikulum, jadwal, dan rincian lengkapnya.
                </p>
              </div>

              {/* 3 Quick Cards pointing to respective pages */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: Bahasa Inggris */}
                <div 
                  onClick={() => handleSelectTab('english')}
                  className="p-6 bg-white rounded-3xl border border-amber-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 inline-block">
                      🇬🇧 Bahasa Inggris
                    </span>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                      English Lovers Club (ELC)
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      Metode active speaking "Belajar Tanpa Beban", persiapan TOEFL, dan kelas Kids s/d Mahasiswa.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black text-amber-600">
                    <span>Lihat Halaman Lengkap</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Card 2: Komputer */}
                <div 
                  onClick={() => handleSelectTab('computer')}
                  className="p-6 bg-white rounded-3xl border border-cyan-200 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-cyan-100 text-cyan-800 inline-block">
                      💻 Komputer & Desain
                    </span>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors">
                      ELC Computer Academy
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      Lab 1 Siswa 1 PC ber-AC. Menguasai rumus Excel terapan kerja kantor, Word, dan desain Corel/Photoshop.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black text-cyan-600">
                    <span>Lihat Halaman Lengkap</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Card 3: LPK BNSP */}
                <div 
                  onClick={() => handleSelectTab('lpk')}
                  className="p-6 bg-white rounded-3xl border border-emerald-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 inline-block">
                      🏢 LPK Vokasi
                    </span>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                      Pelatihan Kerja & BNSP
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      Izin Disnaker sejak 1994. Sertifikasi kompetensi resmi berstandar SKKNI/BNSP dan bimbingan karir.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black text-emerald-600">
                    <span>Lihat Halaman Lengkap</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              {/* Banner Interaktif: Akses Student Mobile App */}
              <div 
                onClick={() => handleSelectTab('mobile-app')}
                className="mt-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer hover:border-amber-400 border border-amber-300/40 transition-all group"
              >
                <div className="space-y-2 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-amber-500 text-slate-900 text-xs font-black rounded-full flex items-center gap-1.5 shadow-xs">
                      <span>📱 Fitur Baru Siswa</span>
                    </span>
                    <span className="text-xs text-amber-200 font-bold">
                      Aplikasi Pembelajaran & Absensi Digital
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    Buka Student Mobile App ELC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-semibold max-w-xl">
                    Dilengkapi modul belajar sesuai program, jadwal les, kartu pelajar digital resmi, riwayat scan presensi QR, dan sertifikat digital.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl font-black text-xs text-white shadow-md group-hover:scale-105 transition-transform">
                  <span>Coba Aplikasi Mobile</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* FULL-PAGE EDGE-TO-EDGE AOS PINNED METHODOLOGY & SUASANA BELAJAR */}
            <div className="w-full my-8">
              <AOSPinnedMethodologyStream />
            </div>

            {/* KONTEN BERANDA LANJUTAN */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
              {/* AOS PINNED TESTIMONI DARI BLOG */}
              <div className="space-y-4">
                <div className="text-center max-w-2xl mx-auto space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
                    AOS Interactive Testimonial Stream
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Kisah & Pengalaman Nyata Alumni ELC
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                    Layar terkunci (pinned) saat Anda menggulir. Anda juga bisa mengklik nama alumni secara langsung.
                  </p>
                </div>
                <AOSPinnedStoriesStream />
              </div>

              {/* INTERACTIVE COURSE MATCHER (KUIS 30 DETIK) */}
              <InteractiveCurriculumFinder
                onSelectProgram={(programId) => handleSelectTab(programId)}
                onOpenRegister={(programName) => handleOpenRegister(programName)}
              />

              {/* COMPANY PROFILE LENGKAP & SEJARAH SEJAK 1992 */}
              <EnhancedCompanyProfileSection />

              {/* CALL TO ACTION BANNER */}
              <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-orange-500/20">
                <div className="space-y-2 text-center md:text-left">
                  <span className="px-3 py-1 bg-white/20 text-white text-xs font-black rounded-full inline-block">
                    Pendaftaran Siswa Baru ELC Ciparay
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black">
                    Mulai Masa Depan Anda Bersama ELC Sekarang!
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-100 max-w-xl font-semibold leading-relaxed">
                    Belajar Bahasa Inggris tanpa beban mental, kuasai komputer terapan perkantoran, dan raih sertifikat profesi BNSP resmi.
                  </p>
                </div>
                <button
                  onClick={() => handleOpenRegister()}
                  className="px-8 py-4 bg-white hover:bg-amber-50 text-orange-800 font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Daftar Sekarang (WA)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 2: HALAMAN KHUSUS KURSUS BAHASA INGGRIS */}
        {/* ======================================================== */}
        {activeTab === 'english' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-in fade-in duration-300">
            <EnglishPage onOpenRegister={handleOpenRegister} />
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 3: HALAMAN KHUSUS KOMPUTER & IT ACADEMY */}
        {/* ======================================================== */}
        {activeTab === 'computer' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-in fade-in duration-300">
            <ComputerPage onOpenRegister={handleOpenRegister} />
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 4: HALAMAN KHUSUS LPK VOKASI & BNSP */}
        {/* ======================================================== */}
        {activeTab === 'lpk' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-in fade-in duration-300">
            <LPKPage onOpenRegister={handleOpenRegister} />
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 5: HALAMAN KHUSUS VERIFIKASI SERTIFIKAT */}
        {/* ======================================================== */}
        {activeTab === 'verification' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-300 inline-block">
                Sistem Informasi Keaslian Sertifikat
              </span>
              <h2 className="text-3xl font-black text-slate-900">
                Verifikasi Ijazah & Sertifikat Resmi ELC
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold max-w-xl mx-auto">
                Validasi keabsahan dokumen tanda kelulusan kursus Bahasa Inggris, Komputer, dan LPK yang dikeluarkan oleh ELC Ciparay.
              </p>
            </div>
            <CertificateVerificationWidget />
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 6: STUDENT MOBILE APP INTERACTIVE SIMULATOR */}
        {/* ======================================================== */}
        {activeTab === 'mobile-app' && (
          <div className="w-full">
            <StudentMobileApp onBackToPortal={() => handleSelectTab('home')} />
          </div>
        )}
      </main>

      {/* 4. FOOTER RESMI DI PALING BAWAH HALAMAN (Kecuali Saat Membuka Mobile App) */}
      {activeTab !== 'mobile-app' && (
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
      )}

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
