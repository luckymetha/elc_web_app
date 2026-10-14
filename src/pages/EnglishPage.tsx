import React from 'react';
import { 
  Award, 
  ArrowRight, 
  Users, 
  Calendar, 
  Clock, 
  Check 
} from 'lucide-react';
import { DailyLearningLab } from '../components/DailyLearningLab';
import { PortraitGrammarAndStories } from '../components/PortraitGrammarAndStories';

interface EnglishPageProps {
  onOpenRegister: (programName?: string) => void;
}

const ENGLISH_SUBCOURSES = [
  {
    title: 'English for Kids (SD Kelas 1 - 6)',
    badge: 'Elementary Level',
    target: 'Usia 6 - 12 Tahun',
    duration: '3 Bulan (2x Seminggu)',
    desc: 'Membangun kosakata dasar, pelafalan natural sejak dini, bernyanyi, dan menumbuhkan rasa suka terhadap Bahasa Inggris dalam suasana ceria tanpa tekanan.',
    topics: [
      'Basic Phonics & Pronunciation Fun',
      'Daily Vocabulary: Animals, Family, School, Colors',
      'Simple Greetings & Everyday Expressions',
      'Interactive Games & Storytelling'
    ],
    accent: 'border-amber-200 bg-amber-50/40 text-amber-900',
    tagBg: 'bg-amber-100 text-amber-800'
  },
  {
    title: 'English for Teens (SMP & SMA)',
    badge: 'Intermediate Level',
    target: 'Siswa SMP & SMA',
    duration: '3 - 6 Bulan',
    desc: 'Mempersiapkan siswa unggul dalam ujian sekolah, UTBK, pemahaman grammar aplikatif, serta pembiasaan active conversation di depan teman-teman.',
    topics: [
      'Active Speaking & Daily Presentation',
      'Grammar Mastery: Tenses, Direct/Indirect, Passive',
      'Reading Comprehension & Critical Thinking',
      'Strategi Lolos Ujian Sekolah & UTBK'
    ],
    accent: 'border-orange-200 bg-orange-50/40 text-orange-900',
    tagBg: 'bg-orange-100 text-orange-800'
  },
  {
    title: 'TOEFL & General Conversation (Umum & Karir)',
    badge: 'Advanced Level',
    target: 'Mahasiswa & Profesional',
    duration: '2 - 4 Bulan (Intensif)',
    desc: 'Kelas khusus pemburu skor TOEFL ITP/iBT tinggi untuk beasiswa, CPNS, dan BUMN, serta speaking percaya diri untuk interview kerja internasional.',
    topics: [
      'Listening, Structure & Reading Drill',
      'Trik Cepat Menjawab Soal TOEFL dalam 30 Detik',
      'Job Interview & Business Correspondence',
      'Simulasi Tes TOEFL Resmi Berkala'
    ],
    accent: 'border-rose-200 bg-rose-50/40 text-rose-900',
    tagBg: 'bg-rose-100 text-rose-800'
  }
];

const SCHEDULE_OPTIONS = [
  {
    type: 'Kelas Reguler Sore',
    days: 'Senin & Rabu / Selasa & Kamis',
    time: '14.30 - 16.00 WIB & 16.15 - 17.45 WIB',
    capacity: '8 - 12 Siswa / Kelas'
  },
  {
    type: 'Kelas Weekend (Sabtu / Minggu)',
    days: 'Sabtu atau Minggu',
    time: '09.00 - 12.00 WIB (Intensif)',
    capacity: '8 - 10 Siswa / Kelas'
  },
  {
    type: 'Kelas Privat 1-on-1',
    days: 'Jadwal Fleksibel (Bisa Pilih Hari)',
    time: 'Sesuai kesepakatan dengan tutor',
    capacity: '1 Siswa 1 Pengajar (Fokus Maksimal)'
  }
];

export const EnglishPage: React.FC<EnglishPageProps> = ({ onOpenRegister }) => {
  return (
    <div className="font-nunito space-y-16 pb-12">
      {/* 1. Header Hero Page Bahasa Inggris */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-100/60 via-[#fbfbf9] to-white rounded-3xl border border-amber-200/70 shadow-sm">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-black shadow-2xs">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Pilar Utama ELC Sejak 1992 • Metode Juara Jambore Jabar</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Kursus Bahasa Inggris Komunikatif{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
              "Belajar Tanpa Beban"
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed font-semibold">
            Hilangkan rasa gugup dan takut salah tata bahasa. Bersama <strong>Mr. Entis Sutisna</strong> dan tim pengajar berdedikasi, kuasai percakapan aktif alami, raih nilai ujian tinggi, serta taklukkan tes TOEFL dengan percaya diri.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenRegister('English Lovers Club (ELC)')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:brightness-105 text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Daftar Kursus Bahasa Inggris</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin%20ELC,%20saya%20ingin%20tanya%20biaya%20dan%20jadwal%20les%20Bahasa%20Inggris"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-amber-50 border border-amber-300 text-slate-800 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Tanya Biaya & Jadwal via WA</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 text-left">
            <div className="p-3.5 bg-white rounded-2xl border border-amber-200 shadow-2xs">
              <p className="text-lg font-black text-amber-600">32+ Tahun</p>
              <p className="text-[11px] text-slate-500 font-bold">Pengalaman Mengajar</p>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-amber-200 shadow-2xs">
              <p className="text-lg font-black text-orange-600">Active Speaking</p>
              <p className="text-[11px] text-slate-500 font-bold">Fokus Praktik 80%</p>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-amber-200 shadow-2xs">
              <p className="text-lg font-black text-emerald-600">Sertifikat Resmi</p>
              <p className="text-[11px] text-slate-500 font-bold">Diakui Disdik Jabar</p>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-amber-200 shadow-2xs">
              <p className="text-lg font-black text-rose-600">2 Lokasi</p>
              <p className="text-[11px] text-slate-500 font-bold">Ciparay & Pacet</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Suasana Belajar Foto */}
      <section className="relative rounded-3xl overflow-hidden border border-amber-200 shadow-lg bg-white p-3">
        <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
            alt="Suasana Belajar Bahasa Inggris ELC"
            className="w-full h-full object-cover object-center filter saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <span className="px-3 py-1 bg-amber-500 text-white text-xs font-black rounded-full inline-block w-fit mb-2">
              Suasana Interaktif & Penuh Tawa
            </span>
            <h3 className="text-xl sm:text-2xl font-black max-w-xl">
              "Belajar Sersan: Serius tapi Santai. Membuat Setiap Siswa Yakin English is Easy!"
            </h3>
          </div>
        </div>
      </section>

      {/* 3. Pilihan Level & Paket Kelas Bahasa Inggris */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-black uppercase text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200 inline-block">
            Pilihan Jenjang Kelas
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Kurikulum Terstruktur untuk Segala Usia
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-semibold">
            Pilih paket belajar yang paling sesuai dengan tingkatan sekolah dan target masa depan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGLISH_SUBCOURSES.map((course, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl border p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all ${course.accent} bg-white`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-black ${course.tagBg}`}>
                    {course.badge}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500">{course.duration}</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                  {course.desc}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 block">
                    Materi Inti:
                  </span>
                  {course.topics.map((t, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenRegister(course.title)}
                  className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Pilih Program Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Daily Learning Lab (Audio Pronunciation & Kosakata) */}
      <DailyLearningLab />

      {/* 5. Catatan Grammar Khas Mr. Entis */}
      <PortraitGrammarAndStories />

      {/* 6. Pilihan Jadwal & Jam Belajar */}
      <section className="bg-white rounded-3xl border border-amber-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-100 pb-4">
          <div>
            <h3 className="text-xl font-black text-slate-900">Pilihan Waktu & Jadwal Belajar</h3>
            <p className="text-xs text-slate-500 font-semibold">Tersedia sesi sepulang sekolah maupun akhir pekan.</p>
          </div>
          <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-black rounded-full w-fit">
            Tersedia di Ciparay & Pacet
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SCHEDULE_OPTIONS.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#fbfbf9] border border-amber-100 space-y-2">
              <h4 className="text-sm font-black text-slate-900">{item.type}</h4>
              <p className="text-xs text-amber-900 font-bold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-orange-600" />
                <span>{item.days}</span>
              </p>
              <p className="text-xs text-slate-600 font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{item.time}</span>
              </p>
              <p className="text-[11px] text-emerald-700 font-bold flex items-center gap-1.5 pt-1">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                <span>{item.capacity}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call To Action Footer Page */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-orange-500/20">
        <div className="space-y-2 text-center md:text-left">
          <span className="px-3 py-1 bg-white/20 text-white text-xs font-black rounded-full inline-block">
            Pendaftaran Bahasa Inggris ELC
          </span>
          <h3 className="text-2xl sm:text-3xl font-black">
            Siap Berbicara Bahasa Inggris Tanpa Rasa Cemas?
          </h3>
          <p className="text-xs sm:text-sm text-amber-100 max-w-xl font-semibold">
            Dapatkan sesi placement test dan konsultasi level kelas gratis bersama instruktur ELC.
          </p>
        </div>
        <button
          onClick={() => onOpenRegister('English Lovers Club (ELC)')}
          className="px-8 py-4 bg-white hover:bg-amber-50 text-orange-700 font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
        >
          <span>Daftar Sekarang (Gratis WA)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
