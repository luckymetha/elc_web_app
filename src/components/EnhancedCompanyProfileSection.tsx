import React from 'react';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
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
      badge: 'Prestasi Provinsi'
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
      {/* Section Header */}
      <div className="max-w-3xl space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C81E1E]">
          Dedikasi &amp; Legalitas Resmi
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
          Profil Lembaga &amp; Warisan Pendidikan 30+ Tahun
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Dari sebuah klub belajar di Ciparay pada tahun 1992, berkembang menjadi lembaga pelatihan kerja dan bahasa Inggris resmi terakreditasi di Bandung Selatan.
        </p>
      </div>

      {/* 1. Leadership Spotlight */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center md:text-left md:border-r md:border-slate-200 md:pr-8">
            <div className="w-20 h-20 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mx-auto md:mx-0 mb-4">
              <GraduationCap className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A]">{INSTITUTION_INFO.director}</h3>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Pendiri &amp; Pimpinan ELC</p>
            <p className="inline-block mt-3 text-[11px] font-semibold text-[#C81E1E] uppercase tracking-wider">
              Juara 2 Teaching Art Se-Jabar
            </p>
          </div>

          <div className="md:col-span-8 space-y-5">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.14em]">
                Filosofi Pendidikan Kami
              </span>
              <p className="font-serif-editorial italic text-xl sm:text-2xl text-[#0B1F3A] leading-relaxed">
                &ldquo;Bahasa Inggris bukanlah momok yang harus ditakuti. Belajar di ELC harus dirasakan tanpa beban, penuh rasa gembira, dan penuh keyakinan bahwa setiap siswa berpotensi berhasil.&rdquo;
              </p>
              <p className="text-xs text-slate-500 font-medium">— Mr. Entis Sutisna, Pimpinan ELC</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                <span>Teruji meraih Juara 2 Teaching Art Jambore PTK PNF se-Jawa Barat</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                <span>Pengabdian tanpa henti membimbing generasi Ciparay &amp; Pacet sejak 1992</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Timeline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-6">
        <div className="pb-4 border-b border-slate-200">
          <span className="text-[11px] font-bold text-[#C81E1E] uppercase tracking-[0.14em]">
            Jejak Langkah
          </span>
          <h3 className="text-xl font-bold text-[#0B1F3A] mt-1">
            Garis Waktu Perjalanan ELC (1992 – Sekarang)
          </h3>
        </div>

        <div className="relative border-l border-slate-300 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-7">
          {timelineMilestones.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3 h-3 rounded-full bg-[#0B1F3A] ring-4 ring-white" />
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1">
                  <span className="text-sm font-extrabold text-[#0B1F3A]">{item.year}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Kampus Pusat & Cabang */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C81E1E]">
              Kampus Pusat
            </span>
            <span className="text-xs font-medium text-slate-400">Ciparay</span>
          </div>
          <h4 className="text-base font-bold text-[#0B1F3A]">ELC Ciparay Cikoneng</h4>
          <p className="text-xs text-slate-600 leading-relaxed">{INSTITUTION_INFO.mainOffice}</p>
          <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1">
            <p>
              <strong className="font-semibold">Telepon Resmi:</strong> 022-5959930
            </p>
            <p>
              <strong className="font-semibold">Fasilitas:</strong> Audio Lab, Ruang Kelas AC, Perpustakaan Mini
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1F3A]">
              Kampus Cabang
            </span>
            <span className="text-xs font-medium text-slate-400">Pacet</span>
          </div>
          <h4 className="text-base font-bold text-[#0B1F3A]">ELC Branch Jalancagak</h4>
          <p className="text-xs text-slate-600 leading-relaxed">{INSTITUTION_INFO.branchOffice}</p>
          <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1">
            <p>
              <strong className="font-semibold">Area:</strong> Perbatasan Ciparay – Maruyung Pacet
            </p>
            <p>
              <strong className="font-semibold">Fasilitas:</strong> Lab Komputer Praktik Mandiri, Ruang Vokasi LPK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
