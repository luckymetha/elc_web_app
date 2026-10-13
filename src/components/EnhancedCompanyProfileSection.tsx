import React from 'react';
import { 
  Award, 
  GraduationCap, 
  CheckCircle2 
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/programs';

export const EnhancedCompanyProfileSection: React.FC = () => {
  const timelineMilestones = [
    {
      year: '1992',
      title: 'Pendirian Kursus ELC (English Lovers Club)',
      desc: 'Bapak Entis Sutisna merintis kursus Bahasa Inggris di Ciparay dengan visi mencerdaskan generasi muda melalui metode belajar komunikatif tanpa beban mental.',
      badge: 'Tonggak Awal'
    },
    {
      year: '1994',
      title: 'Izin Resmi Departemen Tenaga Kerja (Disnaker)',
      desc: 'ELC resmi terdaftar dan mengantongi izin operasional LPK (Lembaga Pelatihan Kerja) untuk mencetak tenaga kerja terampil di Kabupaten Bandung.',
      badge: 'Legalitas LPK'
    },
    {
      year: '2004',
      title: 'Akreditasi Dinas Pendidikan (Disdik)',
      desc: 'Memperoleh izin resmi LKP dari Dinas Pendidikan Kab. Bandung, memperluas jangkauan bimbingan belajar untuk siswa SD, SMP, SMA, dan mahasiswa.',
      badge: 'Legalitas LKP'
    },
    {
      year: '2009',
      title: 'Juara 2 Jambore PTK PNF Tingkat Jawa Barat',
      desc: 'Meraih gelar Juara 2 Lomba Mengajar se-Jawa Barat (Teaching Art Championship). Memvalidasi efektivitas pendekatan pedagogi kreatif ELC.',
      badge: 'Prestasi Tingkat Provinsi'
    },
    {
      year: 'Kini',
      title: 'Integrasi Digital & Sertifikasi BNSP',
      desc: 'Menggabungkan kursus Bahasa Inggris, lab komputer ber-AC, dan kurikulum vokasi berbasis SKKNI siap kerja dengan sertifikasi kompetensi nasional BNSP.',
      badge: 'Era Modern'
    }
  ];

  return (
    <div className="w-full space-y-12">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
          Dedikasi & Legalitas Resmi
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Profil Lembaga & Warisan Pendidikan 30+ Tahun
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
          Dari sebuah klub belajar kecil di Ciparay pada tahun 1992, berkembang menjadi lembaga pelatihan kerja dan bahasa Inggris resmi terakreditasi di Bandung Selatan.
        </p>
      </div>

      {/* 1. LEADERSHIP SPOTLIGHT (MR. ENTIS SUTISNA) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-blue-600/20 mb-4 ring-4 ring-blue-50">
              <GraduationCap className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-black text-slate-900">{INSTITUTION_INFO.director}</h3>
            <p className="text-xs font-semibold text-blue-700 mt-0.5">Pendiri & Pimpinan ELC</p>
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
              Juara 2 Lomba Mengajar Se-Jabar
            </span>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filosofi Pendidikan Kami</span>
              <p className="text-sm sm:text-base font-serif italic text-slate-800 leading-relaxed">
                "Bahasa Inggris bukanlah momok yang harus ditakuti. Belajar di ELC harus dirasakan tanpa beban, penuh rasa gembira, dan penuh keyakinan bahwa setiap siswa berpotensi berhasil menguasai komunikasi internasional."
              </p>
              <p className="text-xs text-slate-500 font-medium">— Mr. Entis Sutisna (Pimpinan ELC)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-2.5">
                <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Teruji meraih Juara 2 Teaching Art Jambore PTK PNF se-Jawa Barat</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Pengabdian tanpa henti membimbing generasi Ciparay & Pacet sejak 1992</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TIMELINE PERJALANAN SEJARAH (ALUR VERTIKAL RUNUT) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Jejak Langkah</span>
          <h3 className="text-xl font-bold text-slate-900 mt-0.5">Garis Waktu Perjalanan ELC (1992 - Sekarang)</h3>
        </div>

        <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
          {timelineMilestones.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md shadow-blue-500/20 ring-4 ring-white">
                {idx + 1}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-base font-black text-slate-900">{item.year}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. TIGA PILAR METODOLOGI KHAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            1
          </div>
          <h4 className="text-base font-bold text-slate-900">Active Speaking Tanpa Cemas</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Menghilangkan rasa grogi berbicara bahasa Inggris. Siswa dilatih percaya diri dulu dalam pelafalan dan kosakata sebelum menyempurnakan tata bahasa.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
            2
          </div>
          <h4 className="text-base font-bold text-slate-900">Grammar Aplikatif Berpola</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Rumus tata bahasa (Direct/Indirect, Passive Voice, Conditional) dipelajari melalui pola kalimat terapan yang langsung digunakan dalam komunikasi kerja.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold">
            3
          </div>
          <h4 className="text-base font-bold text-slate-900">Standar BNSP & Praktik Riil</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Di kelas komputer dan LPK, siswa mempraktikkan langsung dokumen kerja nyata kantor standar SKKNI nasional di lab PC ber-AC (1 siswa 1 komputer).
          </p>
        </div>
      </div>

      {/* 4. KAMPUS PUSAT & CABANG LOKASI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Kampus Pusat & Kelas Utama
            </span>
            <span className="text-xs text-slate-400">Ciparay</span>
          </div>
          <h4 className="text-base font-bold text-slate-900">ELC Ciparay Cikoneng</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {INSTITUTION_INFO.mainOffice}
          </p>
          <div className="pt-2 border-t border-slate-100 text-xs text-slate-700 space-y-1">
            <p><strong>Telepon Resmi:</strong> 022-5959930</p>
            <p><strong>Fasilitas:</strong> Audio Lab, Ruang Kelas AC, Perpustakaan Mini</p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Kampus Cabang & Lab Komputer
            </span>
            <span className="text-xs text-slate-400">Pacet</span>
          </div>
          <h4 className="text-base font-bold text-slate-900">ELC Branch Jalancagak</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {INSTITUTION_INFO.branchOffice}
          </p>
          <div className="pt-2 border-t border-slate-100 text-xs text-slate-700 space-y-1">
            <p><strong>Area:</strong> Perbatasan Ciparay - Maruyung Pacet</p>
            <p><strong>Fasilitas:</strong> Lab Komputer Praktik Mandiri, Ruang Vokasi LPK</p>
          </div>
        </div>
      </div>
    </div>
  );
};
