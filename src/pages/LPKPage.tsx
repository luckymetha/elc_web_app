import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Check
} from 'lucide-react';

interface LPKPageProps {
  onOpenRegister: (programName?: string) => void;
}

const LPK_COMPETENCY_SCHEMES = [
  {
    title: 'Pelatihan Kerja Terapan & Magang Industri',
    badge: 'Program Vokasi 3 - 6 Bulan',
    desc: 'Pelatihan komprehensif mengintegrasikan kecakapan Bahasa Inggris komunikasi kerja, pengoperasian komputer kantor tingkat lanjut, etos kerja profesional, dan simulasi penanganan proyek perkantoran riil.',
    points: [
      'Simulasi Administrasi Perkantoran & Alur Dokumen Bisnis',
      'Korespondensi & Penulisan Email Bisnis Bahasa Inggris',
      'Pembentukan Karakter Kerja, Disiplin, & Etika Profesi',
      'Penyusunan Berkas Lamaran Kerja & Portofolio Kompetensi'
    ]
  },
  {
    title: 'Uji Kompetensi & Sertifikasi Standar BNSP / SKKNI',
    badge: 'Sertifikat Profesi Resmi',
    desc: 'Fasilitasi persiapan dan pendampingan uji kompetensi berstandar Standar Kompetensi Kerja Nasional Indonesia (SKKNI) yang diakui resmi oleh industri, BUMN, instansi swasta, dan kementerian terkait.',
    points: [
      'Bimbingan Kisi-kisi Asesmen Uji Kompetensi Nasional',
      'Pra-Asesmen Mandiri & Bedah Dokumen Portofolio Asesi',
      'Sertifikat Kompetensi dengan Logo Garuda Resmi BNSP',
      'Nilai Tambah Signifikan dalam Seleksi Rekrutmen Kerja'
    ]
  },
  {
    title: 'Klinik Karir, Bedah CV & Simulasi Interview',
    badge: 'Career Preparation Hub',
    desc: 'Layanan pendampingan eksklusif bagi setiap siswa lulusan LPK ELC untuk membedah resume, optimalisasi profil LinkedIn, serta latihan interview kerja dalam Bahasa Indonesia dan Bahasa Inggris.',
    points: [
      'Review CV Format ATS-Friendly agar Lolos Screening HRD',
      'Simulasi Wawancara Kerja dengan Pertanyaan Studi Kasus Nyata',
      'Konsultasi Minat Bakat & Jalur Karir Masa Depan',
      'Peluang Rekomendasi Kerja ke Jaringan Mitra & Alumni ELC'
    ]
  }
];

const LEGAL_DOCUMENTS = [
  {
    authority: 'Dinas Tenaga Kerja (Disnaker)',
    permit: 'Izin Resmi Operasional: 1994 (No: 563/128/DISNAKER)',
    desc: 'Lembaga Pelatihan Kerja (LPK) resmi terdaftar untuk melatih calon tenaga kerja kompeten dan siap pakai.'
  },
  {
    authority: 'Dinas Pendidikan (Disdik)',
    permit: 'Izin Resmi Kursus: 2004 (LKP Pendidikan Luar Sekolah)',
    desc: 'Lembaga Kursus dan Pelatihan resmi terverifikasi membina ribuan siswa dan masyarakat di Kabupaten Bandung.'
  },
  {
    authority: 'Prestasi Jambore PTK PNF',
    permit: 'Juara 2 Lomba Mengajar Se-Jawa Barat',
    desc: 'Bukti kualitas pedagogik dan metodologi pengajaran instruktur yang diakui di level provinsi.'
  }
];

export const LPKPage: React.FC<LPKPageProps> = ({ onOpenRegister }) => {
  return (
    <div className="font-nunito space-y-16 pb-12">
      {/* 1. Header Hero Page LPK */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-100/60 via-[#fbfbf9] to-white rounded-3xl border border-emerald-200/70 shadow-sm">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-300 text-emerald-900 text-xs font-black shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>LPK Resmi Berizin Disnaker Sejak 1994 • Terstandar BNSP</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Lembaga Pelatihan Kerja (LPK){' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Vokasi Siap Kerja & Sertifikasi BNSP
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed font-semibold">
            Jembatan nyata antara dunia pendidikan dengan kebutuhan industri. Kami membekali generasi muda Ciparay dan sekitarnya dengan kompetensi riil, integritas kerja, dan sertifikat berstandar nasional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenRegister('LPK ELC Vocational Training')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:brightness-105 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Daftar Pelatihan Vokasi LPK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin%20ELC,%20saya%20ingin%20tanya%20program%20pelatihan%20LPK%20dan%20sertifikasi%20BNSP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-emerald-50 border border-emerald-300 text-slate-800 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Konsultasi Program via WA</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 text-left">
            <div className="p-3.5 bg-white rounded-2xl border border-emerald-200 shadow-2xs">
              <p className="text-lg font-black text-emerald-600">1994</p>
              <p className="text-[11px] text-slate-500 font-bold">Izin Depnaker Resmi</p>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-emerald-200 shadow-2xs">
              <p className="text-lg font-black text-teal-600">BNSP / SKKNI</p>
              <p className="text-[11px] text-slate-500 font-bold">Standar Kompetensi</p>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-emerald-200 shadow-2xs">
              <p className="text-lg font-black text-cyan-600">5.000+</p>
              <p className="text-[11px] text-slate-500 font-bold">Alumni Terserap</p>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-emerald-200 shadow-2xs">
              <p className="text-lg font-black text-amber-600">Siap Kerja</p>
              <p className="text-[11px] text-slate-500 font-bold">Etos & Disiplin Tinggi</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Suasana Pelatihan Vokasi Foto */}
      <section className="relative rounded-3xl overflow-hidden border border-emerald-200 shadow-lg bg-white p-3">
        <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
            alt="Pelatihan Vokasi LPK ELC"
            className="w-full h-full object-cover object-center filter saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-black rounded-full inline-block w-fit mb-2">
              Kesiapan Menghadapi Karir Profesional
            </span>
            <h3 className="text-xl sm:text-2xl font-black max-w-xl">
              "Membimbing dari Dasar Hingga Memiliki Sertifikat Kompetensi yang Diakui Pasar Kerja Nasional."
            </h3>
          </div>
        </div>
      </section>

      {/* 3. Skema Program Unggulan LPK */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-black uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 inline-block">
            Program Vokasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Tiga Pilar Pembekalan LPK ELC
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-semibold">
            Kombinasi hard skill software kantor, soft skill komunikasi Bahasa Inggris, dan kesiapan sertifikasi profesi.
          </p>
        </div>

        <div className="space-y-4">
          {LPK_COMPETENCY_SCHEMES.map((scheme, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 bg-white rounded-3xl border border-emerald-200/80 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800">
                    {scheme.badge}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900">{scheme.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                  {scheme.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {scheme.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 self-start md:self-center">
                <button
                  onClick={() => onOpenRegister(scheme.title)}
                  className="px-6 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <span>Daftar Skema Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Rekam Jejak & Legalitas Resmi */}
      <section className="bg-white rounded-3xl border border-emerald-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-emerald-100 pb-4">
          <h3 className="text-xl font-black text-slate-900">Legalitas & Keabsahan Lembaga</h3>
          <p className="text-xs text-slate-500 font-semibold">Beroperasi resmi di bawah pengawasan pemerintah Republik Indonesia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LEGAL_DOCUMENTS.map((doc, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#fbfbf9] border border-emerald-100 space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 block">
                {doc.authority}
              </span>
              <h4 className="text-sm font-black text-slate-900 leading-snug">{doc.permit}</h4>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                {doc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call To Action Footer */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-500/20">
        <div className="space-y-2 text-center md:text-left">
          <span className="px-3 py-1 bg-white/20 text-white text-xs font-black rounded-full inline-block">
            Pendaftaran Program LPK Vokasi
          </span>
          <h3 className="text-2xl sm:text-3xl font-black">
            Mulai Langkah Nyata Menuju Karir Mandiri!
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-xl font-semibold">
            Dapatkan bimbingan etos kerja, uji kompetensi BNSP, dan arahan karir terpercaya bersama LPK ELC.
          </p>
        </div>
        <button
          onClick={() => onOpenRegister('LPK ELC Vocational Training')}
          className="px-8 py-4 bg-white hover:bg-emerald-50 text-emerald-800 font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
        >
          <span>Daftar Pelatihan LPK (WA)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
