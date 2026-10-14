import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface MethodologyStory {
  id: string;
  step: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  keyPoints: string[];
  // Ilustrasi edukasi resolusi tinggi dengan gaya modern
  bgImage: string;
  themeColor: {
    accent: string;
    border: string;
    pillBg: string;
    pillText: string;
    glow: string;
  };
  quote: string;
  mentor: string;
}

const METHODOLOGY_STORIES: MethodologyStory[] = [
  {
    id: 'speaking-natural',
    step: 'Pilar 01',
    badge: 'Active English Speaking',
    title: 'Belajar Bicara Tanpa Beban Mental',
    headline: 'Bukan Sekadar Menghafal Rumus, Tapi Percaya Diri Sejak Menit Pertama',
    description: 
      'Di ELC Ciparay, suasana kelas didesain cair ("sersan: serius tapi santai"). Siswa dirangsang aktif berbicara melalui daily simulation, roleplay, dan ice breaking khas Mr. Entis Sutisna yang membongkar rasa takut salah.',
    keyPoints: [
      'Metode Active Speaking alami tanpa intimidasi tata bahasa di awal',
      'Pembiasaan pelafalan (Pronunciation) & intonasi native yang tepat',
      'Pendekatan juara: Juara 2 Jambore PTK PNF Tingkat Jawa Barat',
      'Kelas interaktif dengan diskusi topik hangat dan studi kasus nyata'
    ],
    // Gambar siswa/pelajar belajar bahasa Inggris berdiskusi dengan senyum riang
    bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    themeColor: {
      accent: 'from-amber-500 to-orange-500',
      border: 'border-amber-300',
      pillBg: 'bg-amber-100',
      pillText: 'text-amber-900',
      glow: 'rgba(245, 158, 11, 0.12)'
    },
    quote: '"English is not a burden, it is a fun journey to connect with the world."',
    mentor: 'Mr. Entis Sutisna (Direktur ELC)'
  },
  {
    id: 'computer-skills',
    step: 'Pilar 02',
    badge: 'Modern Computer Lab',
    title: 'Praktik Terapan Komputer & Desain Nyata',
    headline: 'Lab 1 Siswa 1 PC dengan Kurikulum Selaras Kebutuhan Kerja Perkantoran',
    description:
      'Setiap peserta langsung memegang komputer mandiri. Materi fokus ke skill terpakai: otomatisasi Microsoft Office (Excel formula, Word laporan), pengolahan data, hingga desain grafis CorelDraw & Photoshop.',
    keyPoints: [
      '1 Siswa 1 Komputer: Tanpa rebutan perangkat di lab ber-AC',
      'Excel Praktis: VLOOKUP, Pivot Table, Rumus Logika untuk administrasi',
      'Desain Grafis Siap Cetak: Banner, brosur, konten promosi digital',
      'Portofolio Hasil Karya riil siap dilampirkan ke CV lamaran kerja'
    ],
    // Gambar siswa belajar di lab komputer modern
    bgImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
    themeColor: {
      accent: 'from-blue-600 to-cyan-600',
      border: 'border-cyan-300',
      pillBg: 'bg-cyan-100',
      pillText: 'text-cyan-900',
      glow: 'rgba(6, 182, 212, 0.12)'
    },
    quote: '"Keahlian komputer di ELC bukan sekadar teori, langsung cetak dan siap kerja."',
    mentor: 'Instruktur Lab Komputer ELC'
  },
  {
    id: 'lpk-bnsp',
    step: 'Pilar 03',
    badge: 'LPK Vokasi & Sertifikasi BNSP',
    title: 'Jalur Karir Resmi Berizin Disnaker & Disdik',
    headline: 'Sertifikat Kompetensi Resmi dengan Uji Kompetensi Berstandar Nasional',
    description:
      'Sebagai LPK (Lembaga Pelatihan Kerja) berizin resmi sejak 1994, ELC membekali lulusan dengan kesiapan mental industri, etos kerja, dan sertifikat berstandar BNSP/SKKNI untuk bersaing di dunia industri.',
    keyPoints: [
      'Legalitas lengkap: Izin Disnaker 1994 & Izin Dinas Pendidikan 2004',
      'Peluang uji kompetensi BNSP resmi yang diakui BUMN dan swasta',
      'Bimbingan interview kerja Bahasa Inggris & pembuatan CV standar HRD',
      'Jaringan alumni luas yang tersebar di instansi pendidikan dan industri'
    ],
    // Gambar lulusan / peserta pelatihan vokasi yang siap berkarir
    bgImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    themeColor: {
      accent: 'from-emerald-600 to-teal-600',
      border: 'border-emerald-300',
      pillBg: 'bg-emerald-100',
      pillText: 'text-emerald-900',
      glow: 'rgba(16, 185, 129, 0.12)'
    },
    quote: '"Membuka pintu karir profesional anak muda Ciparay dan Kabupaten Bandung."',
    mentor: 'Divisi Pelatihan Vokasi ELC'
  },
  {
    id: 'mentoring-warm',
    step: 'Pilar 04',
    badge: 'Pendampingan Personal & Komunitas',
    title: 'Kekeluargaan ELC yang Terawat Sejak 1992',
    headline: 'Guru Berperan Sebagai Mentor Sahabat yang Sabar Membimbing dari Nol',
    description:
      'Lebih dari 30 tahun ELC berdiri, kunci keberhasilannya adalah pendekatan humanis. Tidak ada siswa yang ditinggal, setiap kesulitan tata bahasa atau pengoperasian software didampingi secara sabar.',
    keyPoints: [
      'Konsultasi privat gratis di luar jam kelas reguler jika ada materi belum paham',
      'Komunitas English Lovers Club yang saling mendukung tanpa bully',
      'Akses materi latihan seumur hidup dan grup diskusi alumni',
      'Lokasi strategis di Ciparay & Pacet dengan biaya terjangkau masyarakat'
    ],
    // Gambar suasana belajar santai berkelompok berdiskusi dengan mentor
    bgImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
    themeColor: {
      accent: 'from-rose-500 to-amber-500',
      border: 'border-rose-300',
      pillBg: 'bg-rose-100',
      pillText: 'text-rose-900',
      glow: 'rgba(244, 63, 94, 0.12)'
    },
    quote: '"Di ELC kami bukan sekadar kursus, kami keluarga pembelajar."',
    mentor: 'Alumni & Instruktur ELC'
  }
];

export const AOSPinnedMethodologyStream: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  // Dedicated scroll progress mapping 0 -> 1 over the 340vh height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const total = METHODOLOGY_STORIES.length;
    const calculatedIdx = Math.min(
      total - 1,
      Math.floor(latest * total)
    );
    if (calculatedIdx !== activeStoryIdx) {
      setActiveStoryIdx(calculatedIdx);
    }
  });

  const selectStory = (index: number, syncScroll = true) => {
    const targetIdx = Math.max(0, Math.min(METHODOLOGY_STORIES.length - 1, index));
    setActiveStoryIdx(targetIdx);

    if (syncScroll && containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const stepProgress = (targetIdx + 0.3) / METHODOLOGY_STORIES.length;
      const targetScroll = containerTop + (containerHeight * stepProgress) - (window.innerHeight * 0.15);

      window.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    selectStory(activeStoryIdx - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    selectStory(activeStoryIdx + 1);
  };

  const activeStory = METHODOLOGY_STORIES[activeStoryIdx] || METHODOLOGY_STORIES[0];

  return (
    <div ref={containerRef} className="relative h-[340vh] w-full font-nunito">
      {/* Pinned Viewport Container (True Full Screen 100vh Sticky Viewport) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        
        {/* ======================================================== */}
        {/* FULL PAGE BACKGROUND DENGAN OPACITY TIPIS & INDAH */}
        {/* ======================================================== */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              {/* Gambar ilustrasi orang belajar resolusi tinggi full-bleed */}
              <img
                src={activeStory.bgImage}
                alt={activeStory.title}
                className="w-full h-full object-cover object-center filter saturate-110"
              />

              {/* Layer Opacity Tipis, Anggun & Tidak Mencolok (Gradasi Lembut Menyeluruh) */}
              <div 
                className="absolute inset-0 backdrop-blur-[2px]"
                style={{
                  background: `linear-gradient(135deg, rgba(254, 252, 248, 0.93) 0%, rgba(255, 255, 255, 0.88) 50%, rgba(254, 250, 242, 0.94) 100%)`
                }}
              />

              {/* Dynamic Subtle Ambient Tint Sesuai Topik */}
              <div 
                className="absolute inset-0 transition-opacity duration-700"
                style={{ backgroundColor: activeStory.themeColor.glow }}
              />

              {/* Watermark Tipis Elegan Full-Width */}
              <div className="absolute -bottom-8 -right-8 text-[180px] lg:text-[240px] font-black text-amber-500/5 select-none pointer-events-none leading-none">
                ELC
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ======================================================== */}
        {/* FULL PAGE CONTENT CONTAINER */}
        {/* ======================================================== */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-24 pb-8 flex flex-col justify-between">

            
            {/* Top Bar: Kategori, Indikator Langkah & Tombol Pilih */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-amber-200/50">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AOS Visual Experience • {activeStory.step}</span>
                </span>
                <span className={`px-2.5 py-0.5 rounded-lg text-xs font-black ${activeStory.themeColor.pillBg} ${activeStory.themeColor.pillText} border border-amber-300/60`}>
                  {activeStory.badge}
                </span>
              </div>

              {/* Pill Selectors (Clickable Poin 1 s/d 4) */}
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md p-1 rounded-2xl border border-amber-200 shadow-2xs">
                {METHODOLOGY_STORIES.map((s, idx) => {
                  const isSelected = idx === activeStoryIdx;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => selectStory(idx)}
                      className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-300'
                          : 'text-slate-600 hover:text-amber-900 hover:bg-amber-50'
                      }`}
                    >
                      <span>{idx + 1}</span>
                      <span className="hidden md:inline text-[11px] font-bold truncate max-w-[100px]">
                        {s.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mid Section: Judul, Narasi & Poin-Poin Beranimasi */}
            <div className="my-auto py-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  {/* Left Column (Judul & Narasi Khas ELC) */}
                  <div className="lg:col-span-6 space-y-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                      Pendekatan Karakter Belajar ELC
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                      {activeStory.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-amber-900/80 leading-relaxed">
                      {activeStory.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white/70 backdrop-blur-xs p-3.5 rounded-2xl border border-amber-100 shadow-2xs">
                      {activeStory.description}
                    </p>

                    {/* Quote Filosofi Pendiri */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-1.5 h-10 rounded-full bg-gradient-to-b from-amber-500 to-orange-500" />
                      <div>
                        <p className="text-xs italic font-bold text-slate-800">
                          {activeStory.quote}
                        </p>
                        <p className="text-[11px] font-semibold text-slate-500">
                          — {activeStory.mentor}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: List Poin-Poin Interaktif */}
                  <div className="lg:col-span-6 space-y-2.5">
                    <div className="flex items-center justify-between pb-1">
                      <span className="text-xs font-black uppercase text-slate-800 tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-orange-600" />
                        <span>Keunggulan Nyata Sesi Ini:</span>
                      </span>
                      <span className="text-[11px] text-slate-500 font-bold">
                        Pilar #{activeStoryIdx + 1} dari {METHODOLOGY_STORIES.length}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {activeStory.keyPoints.map((point, pIdx) => (
                        <motion.div
                          key={pIdx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: pIdx * 0.08 }}
                          className="flex items-start gap-3 p-3 bg-white/85 backdrop-blur-sm rounded-2xl border border-amber-200/70 hover:border-amber-400 hover:shadow-md transition-all group"
                        >
                          <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Bar: Kontrol Navigasi Panah & Hint Scroll */}
            <div className="pt-3 border-t border-amber-200/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              
              {/* Petunjuk Dual Kontrol (AOS Scroll + Click) */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-700">
                  Scroll layar ke bawah untuk transisi poin otomatis, atau klik tombol di samping.
                </span>
              </div>

              {/* Tombol Panah Navigasi */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeStoryIdx === 0}
                  className={`px-3 py-1.5 rounded-xl border flex items-center gap-1 font-bold transition-all ${
                    activeStoryIdx === 0
                      ? 'opacity-40 bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                      : 'bg-white hover:bg-amber-50 text-slate-800 border-amber-200 hover:border-amber-400 cursor-pointer shadow-2xs'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeStoryIdx === METHODOLOGY_STORIES.length - 1}
                  className={`px-3 py-1.5 rounded-xl border flex items-center gap-1 font-bold transition-all ${
                    activeStoryIdx === METHODOLOGY_STORIES.length - 1
                      ? 'opacity-40 bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-transparent shadow-xs hover:brightness-105 cursor-pointer'
                  }`}
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

      </div>
    </div>
  );
};
