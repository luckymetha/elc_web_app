export interface CourseItem {
  name: string;
  level: string;
  description: string;
  target: string;
}

export interface Program {
  id: string;
  category: 'english' | 'computer' | 'lpk';
  title: string;
  badge: string;
  tagline: string;
  duration: string;
  level: string;
  description: string;
  historicalNote?: string;
  highlights: string[];
  subCourses?: CourseItem[];
  features: {
    iconName: string;
    title: string;
    desc: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
  careerOpportunities: string[];
  color: {
    primary: string;
    gradient: string;
    border: string;
    text: string;
    bgGlow: string;
  };
}

export const INSTITUTION_INFO = {
  name: 'LKP & LPK English Lovers Club (ELC)',
  director: 'Mr. Entis Sutisna',
  establishedYear: '1992',
  operationalPermitDisnaker: 'Izin Disnaker: 1994 (No: 563/128/DISNAKER)',
  operationalPermitDisdik: 'Izin Disdik: 2004',
  mainOffice: 'Jl. Raya Pacet - Cikoneng No. 45 Km. 5, Kp. Cikoneng RT 01/RW 15, Kec. Ciparay, Kab. Bandung 40381',
  branchOffice: 'Jalancagak, Desa Maruyung, Kec. Pacet, Kab. Bandung 40381',
  phone: '022-5959930 / WA: 0812-3456-7890',
  email: 'elcbmi@gmail.com',
  instagram: '@englishlover.club',
  blog: 'englishloverclub.blogspot.com',
  achievement: 'Juara 2 Lomba Mengajar se-Jawa Barat (Jambore PTK PNF Jawa Barat)',
};

// SELURUH TESTIMONI LENGKAP ASLI DARI BLOGSPOT ELC
export const ALL_BLOG_TESTIMONIALS = [
  {
    name: 'Alumni ELC (Tahun 1997)',
    role: 'English Consultant at Smart ELT & Instruktur di YES',
    year: '1997',
    content:
      'Belajar di ELC Tanpa Beban dan penuh keyakinan akan berhasil! Itu yang saya rasakan ketika belajar bahasa Inggris with Mr Entis Sutisna. Good luck everyone!'
  },
  {
    name: 'Yuni Mariawati, S.Pd',
    role: 'Guru Bahasa Inggris Sekolah Swasta',
    year: 'Alumni ELC',
    content:
      'Waktu tamat SMA saya bingung mau kuliah apa. Saya kembali ke ELC atas keinginan sendiri. Saya sangat senang belajar di sana, belajarnya sersan (serius tapi santai), benar-benar have fun dan membuat orang merasa English is easy! Bekal dari ELC membuat saya percaya diri mengajar dan berbicara bahasa Inggris. Thanks a lot Mr. H. Entis Sutisna!'
  },
  {
    name: 'Hj. Ita Rahmawati, M.Pd',
    role: 'Guru Sejarah SMAN 1 Ciparay, Bandung',
    year: '2009',
    content:
      'Saya senang dan bangga menjadi salah satu alumni ELC tahun 2009. Solusi penambahan ilmu pengetahuan, baik komputer terutama Bahasa Inggris. Menghantar saya memahami literatur dunia saat mengunjungi peradaban bersejarah dunia. Sukses LKP-ELC membangun generasi berwawasan internasional!'
  },
  {
    name: 'Guru Bahasa Inggris SMP',
    role: 'Pendidik Profesional',
    year: '2004',
    content:
      'Alhamdulillah, saya menjadi guru bahasa Inggris di SMP sekarang. Saya bisa bahasa Inggris berkat les di ELC. Banyak guru yang sukses dalam berbagai bidang. Terus berjaya membangun generasi prestasi!'
  },
  {
    name: 'Karyawan Perusahaan Swasta',
    role: 'Alumni Kelas Intensif Karir ELC',
    year: 'Alumni',
    content:
      'Inilah model kursus bahasa Inggris yang sesungguhnya! Dulu saya pernah gagal masuk kerja di perusahaan ternama akibat lemahnya bahasa Inggris. Dalam 6 bulan di ELC, kemampuan saya meningkat pesat karena didorong intens berbicara secara informatif dan edukatif. Never let your head hang down, find another way at ELC!'
  },
  {
    name: 'Susanti',
    role: 'Alumni Siswa ELC Ciparay',
    year: 'Alumni',
    content:
      'Sebelum masuk ELC, pandangan saya terhadap bahasa Inggris sangatlah buruk dan menakutkan. Tetapi setelah saya bergabung di ELC dan mengikuti tahap demi tahap, ternyata bahasa Inggris itu sangat menyenangkan dan penting. Terima kasih Mr. Entis!'
  },
  {
    name: 'Syifa',
    role: 'Alumni Mahasiswa ELC',
    year: 'Alumni',
    content:
      'ELC is the right place for everyone who wanna improve their English! Before I came to ELC, my English was very bad. But after joining for one year, I can feel the real change and now my English is much better.'
  },
  {
    name: 'Gilang',
    role: 'Alumni English Lovers Club',
    year: 'Alumni',
    content:
      'ELC is the best course place in Bandung exactly for someone who wants to learn English. ELC is like a door to guide us as students. And Mr. Entis is one of the best teachers!'
  }
];

export const GRAMMAR_MATERIALS = [
  {
    title: 'Direct and Indirect Speech',
    rule: 'Perubahan kalimat langsung ke tidak langsung (Backshift of Tenses)',
    example: 'Direct: He said, "I study at ELC." -> Indirect: He said that he studied at ELC.',
    desc: 'Esensial untuk penulisan laporan kantor, berita, dan dialog percakapan formal.'
  },
  {
    title: 'Passive Voice Mastery',
    rule: 'Pola S + to be + Verb 3 (Past Participle)',
    example: 'Active: Mr. Entis teaches English. -> Passive: English is taught by Mr. Entis.',
    desc: 'Wajib dikuasai untuk ujian TOEFL, penulisan artikel ilmiah, dan korespondensi bisnis.'
  },
  {
    title: 'Conditional Sentence (Tipe 1, 2, 3)',
    rule: 'Kalimat Pengandaian: Real Condition, Unreal Present, & Unreal Past',
    example: 'If you join ELC today, you will speak English fluently with confidence.',
    desc: 'Melatih kemampuan berargumen dan analisis sebab-akibat dalam active speaking.'
  },
  {
    title: 'Part of Speech in English',
    rule: '8 Komponen Utama: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection',
    example: 'ELC provides excellent computer and language training in Ciparay.',
    desc: 'Fondasi utama agar susunan kata dalam kalimat tersusun tepat tanpa rancu.'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'english',
    category: 'english',
    badge: 'Berdiri Sejak 1992 • Juara 2 Jambore Jabar',
    title: 'English Lovers Club (ELC)',
    tagline: 'Belajar Bahasa Inggris Tanpa Beban & Penuh Keyakinan Bersama Mr. Entis Sutisna',
    duration: '3 - 6 Bulan',
    level: 'SD, SMP, SMA, Mahasiswa & Umum',
    description:
      'Lembaga Kursus dan Pelatihan Bahasa Inggris terpercaya di Ciparay & Pacet Bandung sejak tahun 1992. Menggunakan metode Active Speaking alami "Tanpa Beban", tata bahasa aplikatif, persiapan TOEFL/IELTS, serta bimbingan langsung instruktur berprestasi tingkat Jawa Barat.',
    historicalNote: 'Diakui resmi Depnaker (1994) dan Dinas Pendidikan Kab. Bandung (2004).',
    highlights: [
      'Active Speaking & Everyday Conversation (Praktik Aktif Tanpa Cemas)',
      'Grammar Mastery: Direct/Indirect Speech, Passive Voice & Conditionals',
      'Persiapan Ujian Sekolah, UTBK, TOEFL ITP & IELTS',
      'Pembelajaran Menyenangkan dengan Pendekatan Teaching Art Juara Jabar'
    ],
    subCourses: [
      {
        name: 'English for Kids & Teens (SD - SMP)',
        level: 'Dasar / Elementary',
        description: 'Membangun kosakata, pelafalan (pronunciation), dan keberanian berbicara dalam suasana belajar ceria.',
        target: 'Siswa SD & SMP'
      },
      {
        name: 'General Conversation & High School (SMA - Mahasiswa)',
        level: 'Intermediate',
        description: 'Diskusi aktif, presentasi, bedah grammar praktis, dan penguasaan tata bahasa percakapan harian.',
        target: 'Siswa SMA & Mahasiswa'
      },
      {
        name: 'TOEFL Preparation & Intensive Class',
        level: 'Advanced',
        description: 'Strategi kilat Listening, Structure, & Reading Comprehension dengan bank soal akurat berstandar resmi.',
        target: 'Calon Pekerja & Pemburu Beasiswa'
      }
    ],
    features: [
      {
        iconName: 'Award',
        title: 'Juara 2 Tingkat Jawa Barat',
        desc: 'Metode pengajaran telah teruji meraih Juara 2 Lomba Mengajar Jambore PTK PNF se-Jawa Barat.'
      },
      {
        iconName: 'MessageSquare',
        title: 'Metode "Belajar Tanpa Beban"',
        desc: 'Didesain oleh Mr. Entis Sutisna agar setiap siswa berani berbicara bahasa Inggris tanpa takut salah tata bahasa.'
      },
      {
        iconName: 'Sparkles',
        title: 'Modul Bahasa Inggris Terstruktur',
        desc: 'Materi lengkap mulai dari Parts of Speech, Conditional Sentence, Direct-Indirect hingga Passive Voice.'
      }
    ],
    stats: [
      { label: 'Tahun Berdiri', value: '1992' },
      { label: 'Alumni Sukses Karir', value: '5.000+' },
      { label: 'Cabang & Kelas', value: 'Ciparay & Pacet' }
    ],
    careerOpportunities: [
      'Guru & Pengajar Bahasa Inggris Sekolah',
      'Staff Perusahaan Multinasional / BUMN',
      'Penerima Beasiswa Luar Negeri',
      'Pemandu Wisata & Hospitality Specialist'
    ],
    color: {
      primary: '#2563eb',
      gradient: 'from-blue-600 to-indigo-600',
      border: 'border-blue-200',
      text: 'text-blue-600',
      bgGlow: 'bg-blue-50'
    }
  },
  {
    id: 'computer',
    category: 'computer',
    badge: 'Lab Komputer AC & Praktik 1 Siswa 1 PC',
    title: 'ELC Digital Computer Academy',
    tagline: 'Keahlian Komputer Praktis Perkantoran, Desain Grafis & Aplikasi Digital',
    duration: '2 - 4 Bulan',
    level: 'Pemula s/d Mahir (Siap Kerja)',
    description:
      'Program kursus komputer praktis yang disesuaikan dengan kebutuhan riil dunia kerja dan administrasi perkantoran modern di Kabupaten Bandung dan sekitarnya.',
    highlights: [
      'Aplikasi Perkantoran Lengkap (MS Word, Excel Mahir, PowerPoint & Google Workspace)',
      'Desain Grafis Komunikasi Visual (Canva, Photoshop, CorelDraw)',
      'Administrasi Keuangan Digital & Pengolahan Data Laporan',
      'Fasilitas Lab Komputer Nyaman Ber-AC dengan Perangkat Modern'
    ],
    subCourses: [
      {
        name: 'Paket Office Administrasi Perkantoran',
        level: 'Dasar s/d Menengah',
        description: 'Penguasaan rumus Excel (VLOOKUP, IF, PivotTable), surat menyurat resmi Word, dan presentasi kerja.',
        target: 'Staff Administrasi & Kasir'
      },
      {
        name: 'Desain Grafis & Konten Promosi',
        level: 'Kreatif',
        description: 'Pembuatan flyer promosi, banner, branding UMKM, dan materi digital media sosial.',
        target: 'Wirausaha & Content Creator'
      },
      {
        name: 'Teknisi Komputer & Jaringan Dasar',
        level: 'Teknis',
        description: 'Instalasi sistem operasi Windows, perawatan hardware PC/Laptop, dan pengaturan jaringan LAN kantor.',
        target: 'Teknisi Komputer Pemula'
      }
    ],
    features: [
      {
        iconName: 'Monitor',
        title: 'Praktik 100% Berorientasi Kerja',
        desc: 'Kurikulum berbasis studi kasus riil yang langsung dihadapi di kantor instansi pemerintah dan swasta.'
      },
      {
        iconName: 'Laptop',
        title: '1 Siswa 1 Komputer Pribadi',
        desc: 'Proses belajar fokus tanpa bergantian komputer, didampingi instruktur secara individual.'
      },
      {
        iconName: 'Users',
        title: 'Bimbingan Tugas Akhir & Portofolio',
        desc: 'Setiap lulusan memiliki rekap portofolio dokumen dan karya siap dilampirkan dalam lamaran kerja.'
      }
    ],
    stats: [
      { label: 'Lulus Uji Praktik', value: '98%' },
      { label: 'Fasilitas Lab', value: '1 Siswa 1 PC' },
      { label: 'Kepuasan Siswa', value: '4.9/5' }
    ],
    careerOpportunities: [
      'Staff Administrasi Perkantoran',
      'Operator Data Entri & Arsip Digital',
      'Desainer Grafis UMKM & Percetakan',
      'Staff Kasir & Logistik'
    ],
    color: {
      primary: '#059669',
      gradient: 'from-emerald-600 to-teal-600',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      bgGlow: 'bg-emerald-50'
    }
  },
  {
    id: 'lpk',
    category: 'lpk',
    badge: 'Terdaftar Resmi Depnaker 1994 & Kemnaker RI',
    title: 'LPK ELC Vocational Training',
    tagline: 'Lembaga Pelatihan Kerja Resmi, Sertifikasi BNSP & Penyaluran Karir Industri',
    duration: '3 - 6 Bulan + Magang Kerja',
    level: 'Pencari Kerja / Lulusan SMA/SMK/D3/S1',
    description:
      'Lembaga Pelatihan Kerja (LPK) resmi terdaftar sejak 1994 di Dinas Tenaga Kerja. Membekali calon tenaga kerja dengan soft-skills kedisiplinan, etos kerja industri, serta sertifikasi kompetensi kerja standar BNSP / SKKNI.',
    historicalNote: 'Izin Resmi Disnaker No. 563/Disnaker sejak 1994 & SK Kemenaker.',
    highlights: [
      'Uji Sertifikasi Profesi Resmi BNSP (Badan Nasional Sertifikasi Profesi)',
      'Pelatihan Budaya Industri, Etiket Kerja, Kedisiplinan & Mental Siap Kerja',
      'Pembekalan Tes Wawancara & Pembuatan CV ATS-Friendly',
      'Jejaring Penyaluran Magang & Rekomendasi Kerja ke Perusahaan Mitra'
    ],
    subCourses: [
      {
        name: 'Pelatihan Kerja Administrasi Bisnis & Perkantoran',
        level: 'Profesional',
        description: 'Standar kompetensi SKKNI untuk tenaga administrasi, kesekretariatan, dan korespondensi bisnis.',
        target: 'Lulusan SMA/SMK/Diploma'
      },
      {
        name: 'Pelatihan Bahasa Inggris Siap Kerja (Workplace English)',
        level: 'Vokasi',
        description: 'Bahasa Inggris praktis untuk staf perhotelan, pramuniaga ekspor, customer care, dan industri manufaktur.',
        target: 'Pencari Kerja Industri'
      },
      {
        name: 'Program Pra-Magang & Penyaluran Industri',
        level: 'Penempatan',
        description: 'Pendampingan seleksi kerja, simulasi psikotes, interview HRD, serta penempatan magang mitra LPK.',
        target: 'Siap Penempatan'
      }
    ],
    features: [
      {
        iconName: 'ShieldCheck',
        title: 'Izin Operasional Resmi Sejak 1994',
        desc: 'Lembaga Pelatihan Kerja yang memiliki legalitas sah dan rekam jejak pengabdian puluhan tahun di Kab. Bandung.'
      },
      {
        iconName: 'FileCheck',
        title: 'Sertifikat Kompetensi BNSP',
        desc: 'Sertifikat resmi kompetensi kerja yang memiliki nilai tawar tinggi saat melamar ke instansi BUMN dan swasta.'
      },
      {
        iconName: 'Briefcase',
        title: 'Bursa Pendampingan Karir',
        desc: 'Dukungan informasi lowongan kerja, bimbingan wawancara kerja, dan jaringan alumni ELC yang tersebar luas.'
      }
    ],
    stats: [
      { label: 'Terserap Kerja', value: '92%' },
      { label: 'Tahun Izin Disnaker', value: '1994' },
      { label: 'Total Lulusan', value: '3.000+' }
    ],
    careerOpportunities: [
      'Staff Operasional & Perkantoran BUMN/Swasta',
      'Customer Service & Teller Perbankan',
      'Staff Administrasi Pergudangan & Logistik',
      'Tenaga Kerja Terampil Industri Manufaktur'
    ],
    color: {
      primary: '#d97706',
      gradient: 'from-amber-600 to-orange-600',
      border: 'border-amber-200',
      text: 'text-amber-600',
      bgGlow: 'bg-amber-50'
    }
  }
];
