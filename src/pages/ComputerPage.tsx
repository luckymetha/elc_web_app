import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Award,
  Check
} from 'lucide-react';

interface ComputerPageProps {
  onOpenRegister: (programName?: string) => void;
}

const COMPUTER_SUBCOURSES = [
  {
    title: 'Aplikasi Perkantoran & Administrasi Bisnis',
    badge: 'Paling Diminati Perusahaan',
    target: 'Lulusan SMA/SMK, Calon Staff Kantor, & Kasir',
    duration: '2 - 3 Bulan',
    desc: 'Menguasai pembuatan surat menyurat resmi (Word), otomatisasi data & rumus logika akuntansi (Excel Mahir), serta presentasi bisnis interaktif (PowerPoint).',
    topics: [
      'Microsoft Word: Surat Resmi, Tabel, Mail Merge & Format Laporan',
      'Microsoft Excel Mahir: VLOOKUP, HLOOKUP, IF Bertingkat, PivotTable & Grafik',
      'PowerPoint Professional: Slide Master, Infografis & Animasi Transisi',
      'Google Workspace: Docs, Sheets, Drive & Manajemen File Cloud'
    ],
    accent: 'border-cyan-200 bg-cyan-50/40 text-cyan-900',
    tagBg: 'bg-cyan-100 text-cyan-800'
  },
  {
    title: 'Desain Grafis Terapan & Digital Branding',
    badge: 'Skill Kreatif & Wirausaha',
    target: 'Content Creator, Pelaku UMKM, & Desainer Pemula',
    duration: '2 - 3 Bulan',
    desc: 'Praktik langsung mendesain aset visual promosi digital dan cetak. Memahami tata letak (layout), kombinasi warna, tipografi, dan persiapan file siap cetak.',
    topics: [
      'CorelDraw: Desain Logo, Brosur, Spanduk, Banner & Stempel',
      'Adobe Photoshop: Manipulasi Foto, Cutout, Retouching & Poster Digital',
      'Canva Pro Master: Desain Feed & Story Instagram Cepat untuk Olshop',
      'Standar File Siap Cetak: Resolusi 300 DPI, Mode Warna CMYK vs RGB'
    ],
    accent: 'border-emerald-200 bg-emerald-50/40 text-emerald-900',
    tagBg: 'bg-emerald-100 text-emerald-800'
  },
  {
    title: 'Teknisi Komputer & Jaringan Perkantoran',
    badge: 'Hardware & IT Support',
    target: 'Calon Teknisi & IT Support Toko/Kantor',
    duration: '2 Bulan',
    desc: 'Membongkar dan merakit PC, diagnosa kerusakan laptop/komputer, instalasi OS Windows, antivirus, dan konfigurasi jaringan LAN kantor.',
    topics: [
      'Perakitan PC & Diagnosa Kerusakan Hardware (Motherboard, RAM, SSD)',
      'Instalasi Windows 10/11 & Driver Lengkap',
      'Setting Jaringan LAN, Crimping Kabel RJ45 & Router WiFi',
      'Optimasi Kecepatan Komputer & Pembersihan Virus/Malware'
    ],
    accent: 'border-blue-200 bg-blue-50/40 text-blue-900',
    tagBg: 'bg-blue-100 text-blue-800'
  }
];

const LAB_FACILITIES = [
  {
    title: '1 Siswa 1 PC Komputer Mandiri',
    desc: 'Setiap siswa memiliki komputer masing-masing selama jam praktik. Tanpa sistem bergantian, memastikan waktu belajar tangan langsung 100%.'
  },
  {
    title: 'Ruangan Lab Ber-AC Nyaman',
    desc: 'Lingkungan belajar yang bersih, sejuk, dan kondusif untuk fokus latihan software tanpa kepanasan.'
  },
  {
    title: 'Software Resmi & Up-to-Date',
    desc: 'Menggunakan versi Microsoft Office, CorelDraw, dan Adobe Photoshop yang sesuai dengan standar operasional kantor modern.'
  },
  {
    title: 'Bimbingan Tugas Portofolio Riil',
    desc: 'Lulusan dibekali file portofolio hasil karya asli (tabel keuangan, brosur cetak) yang bisa langsung dilampirkan ke surat lamaran kerja.'
  }
];

export const ComputerPage: React.FC<ComputerPageProps> = ({ onOpenRegister }) => {
  return (
    <div className="font-nunito space-y-16 pb-12">
      {/* 1. Header Hero Page Komputer */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-100/60 via-[#fbfbf9] to-white rounded-3xl border border-cyan-200/70 shadow-sm">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300 text-cyan-900 text-xs font-black shadow-2xs">
            <Award className="w-4 h-4 text-cyan-600" />
            <span>ELC Digital Computer Academy • Lab 1 Siswa 1 PC Ber-AC</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Kuasai Keahlian Komputer Praktis{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
              Langsung Siap Kerja
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed font-semibold">
            Bukan sekadar hafalan teori. Praktik intensif aplikasi perkantoran (Excel Mahir, Word, PPT), desain grafis Corel & Photoshop, hingga instalasi hardware bersama instruktur praktisi berpengalaman.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenRegister('ELC Digital Computer Academy')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:brightness-105 text-white font-black text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Daftar Kursus Komputer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin%20ELC,%20saya%20ingin%20tanya%20jadwal%20dan%20biaya%20kursus%20Komputer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-cyan-50 border border-cyan-300 text-slate-800 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Konsultasi Lab via WA</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 text-left">
            <div className="p-3.5 bg-white rounded-2xl border border-cyan-200 shadow-2xs">
              <p className="text-lg font-black text-cyan-600">1:1 Ratio</p>
              <p className="text-[11px] text-slate-500 font-bold">1 Siswa 1 PC Mandiri</p>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-cyan-200 shadow-2xs">
              <p className="text-lg font-black text-blue-600">100% Praktik</p>
              <p className="text-[11px] text-slate-500 font-bold">Langsung di Depan Layar</p>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-cyan-200 shadow-2xs">
              <p className="text-lg font-black text-emerald-600">Portofolio</p>
              <p className="text-[11px] text-slate-500 font-bold">Hasil Karya Riil</p>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-cyan-200 shadow-2xs">
              <p className="text-lg font-black text-indigo-600">Sertifikat</p>
              <p className="text-[11px] text-slate-500 font-bold">Resmi Terakreditasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Suasana Lab Komputer Foto */}
      <section className="relative rounded-3xl overflow-hidden border border-cyan-200 shadow-lg bg-white p-3">
        <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
            alt="Suasana Lab Komputer ELC"
            className="w-full h-full object-cover object-center filter saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-black rounded-full inline-block w-fit mb-2">
              Fasilitas Modern & Terawat
            </span>
            <h3 className="text-xl sm:text-2xl font-black max-w-xl">
              "Setiap Peserta Memegang PC Sendiri. Belajar Rumus Excel dan Desain Jadi Lebih Cepat Paham!"
            </h3>
          </div>
        </div>
      </section>

      {/* 3. Paket Kursus Komputer */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-black uppercase text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200 inline-block">
            Pilihan Modul Komputer
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Keterampilan Teruji yang Dicari HRD Perusahaan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-semibold">
            Tersedia paket dari dasar hingga tingkat mahir yang siap diaplikasikan langsung di tempat kerja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPUTER_SUBCOURSES.map((course, idx) => (
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
                    Silabus Praktik:
                  </span>
                  {course.topics.map((t, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                      <Check className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenRegister(course.title)}
                  className="w-full py-3 rounded-2xl bg-cyan-700 hover:bg-cyan-800 text-white font-black text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Pilih Program Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Keunggulan Fasilitas Lab */}
      <section className="bg-white rounded-3xl border border-cyan-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-cyan-100 pb-4">
          <h3 className="text-xl font-black text-slate-900">Standar Fasilitas Laboratorium ELC</h3>
          <p className="text-xs text-slate-500 font-semibold">Kami memastikan sarana belajar Anda mendukung percepatan pemahaman.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LAB_FACILITIES.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#fbfbf9] border border-cyan-100 space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <h4 className="text-sm font-black text-slate-900">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call To Action Footer */}
      <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
        <div className="space-y-2 text-center md:text-left">
          <span className="px-3 py-1 bg-white/20 text-white text-xs font-black rounded-full inline-block">
            Pendaftaran Kelas Komputer
          </span>
          <h3 className="text-2xl sm:text-3xl font-black">
            Tingkatkan Skill Komputer & Raih Karir Impian Anda!
          </h3>
          <p className="text-xs sm:text-sm text-cyan-100 max-w-xl font-semibold">
            Konsultasikan paket kelas perkantoran atau desain grafis gratis bersama staf kami.
          </p>
        </div>
        <button
          onClick={() => onOpenRegister('ELC Digital Computer Academy')}
          className="px-8 py-4 bg-white hover:bg-cyan-50 text-blue-700 font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
        >
          <span>Daftar Kelas Komputer (WA)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
