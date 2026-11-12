import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface MethodologyStory {
  id: string;
  step: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  keyPoints: string[];
  bgImage: string;
  quote: string;
  mentor: string;
}

const METHODOLOGY_STORIES: MethodologyStory[] = [
  {
    id: 'speaking-natural',
    step: '01',
    badge: 'Active English Speaking',
    title: 'Belajar Bicara Tanpa Beban Mental',
    headline: 'Percaya diri berbicara sejak pertemuan pertama tanpa takut salah tata bahasa.',
    description:
      'Di ELC Ciparay, suasana kelas didesain cair ("serius tapi santai"). Siswa dirangsang aktif berbicara melalui daily simulation, roleplay, dan pendekatan khas Mr. Entis Sutisna.',
    keyPoints: [
      'Metode Active Speaking alami tanpa intimidasi tata bahasa di awal',
      'Pembiasaan pelafalan (Pronunciation) & intonasi yang tepat',
      'Pendekatan teruji: Juara 2 Jambore PTK PNF Tingkat Jawa Barat',
      'Diskusi topik harian dan studi kasus komunikasi nyata'
    ],
    bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    quote: '"English is not a burden, it is a practical journey to connect with the world."',
    mentor: 'Mr. Entis Sutisna, Direktur ELC'
  },
  {
    id: 'computer-skills',
    step: '02',
    badge: 'Modern Computer Lab',
    title: 'Praktik Terapan Komputer & Desain Nyata',
    headline: 'Fasilitas 1 Siswa 1 PC dengan kurikulum selaras kebutuhan kerja perkantoran.',
    description:
      'Setiap peserta langsung mengoperasikan komputer mandiri. Materi fokus pada keahlian terpakai: otomatisasi Microsoft Office (Excel formula, Word laporan), hingga desain grafis.',
    keyPoints: [
      '1 Siswa 1 Komputer: Praktik penuh di ruang lab ber-AC',
      'Excel Praktis: VLOOKUP, Pivot Table, & rumus logika administrasi',
      'Desain Grafis Siap Cetak: CorelDraw, Photoshop, dan media promosi',
      'Portofolio hasil karya siap dilampirkan untuk melamar kerja'
    ],
    bgImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
    quote: '"Keahlian komputer di ELC bukan sekadar teori, langsung praktik dan siap kerja."',
    mentor: 'Instruktur Lab Komputer ELC'
  },
  {
    id: 'lpk-bnsp',
    step: '03',
    badge: 'LPK Vokasi & BNSP',
    title: 'Jalur Karir Resmi Berizin Disnaker & Disdik',
    headline: 'Sertifikat kompetensi resmi dengan standar nasional untuk daya saing kerja.',
    description:
      'Sebagai LPK (Lembaga Pelatihan Kerja) berizin resmi sejak 1994, ELC membekali lulusan dengan etos kerja industri serta peluang sertifikasi BNSP/SKKNI.',
    keyPoints: [
      'Legalitas lengkap: Izin Disnaker 1994 & Izin Dinas Pendidikan 2004',
      'Persiapan uji kompetensi BNSP yang diakui BUMN dan perusahaan swasta',
      'Bimbingan wawancara kerja Bahasa Inggris & penyusunan CV standar HRD',
      'Jaringan alumni yang tersebar di instansi pendidikan dan industri'
    ],
    bgImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    quote: '"Membuka pintu karir profesional bagi generasi muda Ciparay dan Kabupaten Bandung."',
    mentor: 'Divisi Pelatihan Vokasi ELC'
  },
  {
    id: 'mentoring-warm',
    step: '04',
    badge: 'Pendampingan Personal',
    title: 'Pendekatan Humanis & Komunitas Sejak 1992',
    headline: 'Instruktur berperan sebagai mentor yang sabar membimbing dari nol.',
    description:
      'Lebih dari 30 tahun ELC berdiri, kunci keberhasilannya adalah pendampingan personal. Setiap kesulitan tata bahasa maupun pengoperasian software didampingi hingga tuntas.',
    keyPoints: [
      'Konsultasi tambahan di luar jam kelas reguler jika ada materi tertinggal',
      'Komunitas English Lovers Club yang suportif untuk latihan rutin',
      'Akses modul latihan dan grup diskusi alumni',
      'Lokasi strategis di Ciparay & Pacet dengan biaya pendidikan terjangkau'
    ],
    bgImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
    quote: '"Di ELC kami bukan sekadar tempat kursus, kami membangun kepercayaan diri."',
    mentor: 'Alumni & Instruktur ELC'
  }
];

export const AOSPinnedMethodologyStream: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const total = METHODOLOGY_STORIES.length;
    const calculatedIdx = Math.min(total - 1, Math.floor(latest * total));
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
    <div ref={containerRef} className="relative h-[320vh] w-full bg-[#0B1F3A] text-white">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* Background Photography with Deep Navy Editorial Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <img
                src={activeStory.bgImage}
                alt={activeStory.title}
                className="w-full h-full object-cover object-center opacity-25"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(11, 31, 58, 0.96) 0%, rgba(11, 31, 58, 0.88) 55%, rgba(15, 23, 42, 0.94) 100%)'
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 flex flex-col justify-between">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/15">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-300">
                Metodologi Pembelajaran ELC • Pilar {activeStory.step}
              </p>
              <p className="text-sm font-semibold text-white mt-0.5">{activeStory.badge}</p>
            </div>

            <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-lg border border-white/10 overflow-x-auto max-w-full">
              {METHODOLOGY_STORIES.map((s, idx) => {
                const isSelected = idx === activeStoryIdx;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => selectStory(idx)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-white text-[#0B1F3A]'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {s.step} · {s.badge}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mid Section */}
          <div className="my-auto py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Narrative */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {activeStory.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
                    {activeStory.headline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeStory.description}
                  </p>

                  <div className="pt-3 border-t border-white/10">
                    <p className="font-serif-editorial italic text-lg sm:text-xl text-white/95">
                      {activeStory.quote}
                    </p>
                    <p className="text-xs font-medium text-slate-400 mt-1">
                      — {activeStory.mentor}
                    </p>
                  </div>
                </div>

                {/* Right Key Points */}
                <div className="lg:col-span-6 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Poin Utama Kurikulum
                  </p>
                  <div className="space-y-2.5">
                    {activeStory.keyPoints.map((point, pIdx) => (
                      <motion.div
                        key={pIdx}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: pIdx * 0.06 }}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.06] border border-white/10"
                      >
                        <div className="w-5 h-5 rounded-full bg-white text-[#0B1F3A] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-100 leading-snug">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Controls */}
          <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>
              Gulir halaman ke bawah atau pilih nomor pilar untuk melihat detail metode belajar.
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeStoryIdx === 0}
                className={`px-3.5 py-2 rounded-lg border flex items-center gap-1.5 font-semibold transition-colors ${
                  activeStoryIdx === 0
                    ? 'opacity-35 border-white/10 text-slate-500 cursor-not-allowed'
                    : 'border-white/20 text-white hover:bg-white/10 cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={activeStoryIdx === METHODOLOGY_STORIES.length - 1}
                className={`px-3.5 py-2 rounded-lg flex items-center gap-1.5 font-semibold transition-colors ${
                  activeStoryIdx === METHODOLOGY_STORIES.length - 1
                    ? 'opacity-35 bg-white/10 text-slate-500 cursor-not-allowed'
                    : 'bg-white text-[#0B1F3A] hover:bg-slate-100 cursor-pointer'
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
