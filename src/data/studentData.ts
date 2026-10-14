export interface StudentUser {
  id: string;
  studentIdNumber: string; // e.g. ELC-2026-ENG-082
  name: string;
  avatar: string;
  programCategory: 'english' | 'computer' | 'lpk';
  programName: string;
  classType: string;
  branch: string;
  attendanceRate: number; // e.g. 92%
  totalSessions: number;
  completedSessions: number;
  nextSession: {
    day: string;
    time: string;
    room: string;
    topic: string;
    instructor: string;
  };
  modules: {
    id: string;
    title: string;
    type: 'audio' | 'video' | 'pdf' | 'quiz';
    status: 'completed' | 'in_progress' | 'locked';
    score?: number;
    duration: string;
  }[];
  recentAttendance: {
    date: string;
    time: string;
    status: 'Hadir' | 'Izin' | 'Sakit';
    sessionName: string;
  }[];
  certificate?: {
    certNumber: string;
    issueDate: string;
    verified: boolean;
    skills: string[];
  };
}

export const MOCK_STUDENTS: StudentUser[] = [
  {
    id: 'student-1',
    studentIdNumber: 'ELC-2026-ENG-041',
    name: 'Rizky Ramadhani',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    programCategory: 'english',
    programName: 'Active Speaking & Teens Conversation',
    classType: 'Reguler Sore',
    branch: 'Kampus Pusat Ciparay',
    attendanceRate: 95,
    totalSessions: 24,
    completedSessions: 18,
    nextSession: {
      day: 'Kamis, 16 Okt 2026',
      time: '15.30 - 17.00 WIB',
      room: 'Ruang Speaking A (Lt. 2)',
      topic: 'Expressing Opinions & Debating Skills',
      instructor: 'Mr. Entis Sutisna'
    },
    modules: [
      {
        id: 'm1',
        title: 'Daily Greetings & Breaking Mental Block',
        type: 'audio',
        status: 'completed',
        score: 95,
        duration: '15 Menit'
      },
      {
        id: 'm2',
        title: 'Direct & Indirect Speech in Formal Report',
        type: 'pdf',
        status: 'completed',
        score: 90,
        duration: '25 Menit'
      },
      {
        id: 'm3',
        title: 'Passive Voice Mastery in Academic Test',
        type: 'quiz',
        status: 'in_progress',
        score: 82,
        duration: '20 Menit'
      },
      {
        id: 'm4',
        title: 'TOEFL Listening Section Tactics (Part A)',
        type: 'audio',
        status: 'locked',
        duration: '30 Menit'
      }
    ],
    recentAttendance: [
      { date: '12 Okt 2026', time: '15.32 WIB', status: 'Hadir', sessionName: 'Session 18: Parts of Speech Review' },
      { date: '08 Okt 2026', time: '15.28 WIB', status: 'Hadir', sessionName: 'Session 17: Conditional Sentences Practice' },
      { date: '05 Okt 2026', time: '15.30 WIB', status: 'Hadir', sessionName: 'Session 16: Active Conversation Simulation' },
      { date: '01 Okt 2026', time: '15.40 WIB', status: 'Hadir', sessionName: 'Session 15: Idioms in Real Context' }
    ],
    certificate: {
      certNumber: 'ELC/ENG/2026/0892',
      issueDate: 'Segera Terbit (Setelah 24 Sesi)',
      verified: true,
      skills: ['Active English Speaking', 'Grammar Application', 'Pronunciation Natural']
    }
  },
  {
    id: 'student-2',
    studentIdNumber: 'ELC-2026-COM-019',
    name: 'Siti Nurhaliza',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    programCategory: 'computer',
    programName: 'Aplikasi Perkantoran & Excel Mahir',
    classType: 'Privat Intensif',
    branch: 'Kampus Pusat Ciparay (Lab Komputer)',
    attendanceRate: 100,
    totalSessions: 16,
    completedSessions: 12,
    nextSession: {
      day: 'Jumat, 17 Okt 2026',
      time: '14.00 - 16.00 WIB',
      room: 'Lab Komputer AC (PC #06)',
      topic: 'Otomatisasi Laporan Keuangan dengan Pivot Table',
      instructor: 'Bpk. Dedi Irawan, S.Kom'
    },
    modules: [
      {
        id: 'mc1',
        title: 'Mastering MS Word Format Dokumen Resmi',
        type: 'pdf',
        status: 'completed',
        score: 100,
        duration: '30 Menit'
      },
      {
        id: 'mc2',
        title: 'Rumus Logika Excel: IF, AND, OR, VLOOKUP',
        type: 'quiz',
        status: 'completed',
        score: 94,
        duration: '40 Menit'
      },
      {
        id: 'mc3',
        title: 'Desain Flyer & Brosur Kerja di CorelDraw',
        type: 'video',
        status: 'in_progress',
        score: 88,
        duration: '35 Menit'
      },
      {
        id: 'mc4',
        title: 'Pembuatan Dashboard Visual Interaktif',
        type: 'pdf',
        status: 'locked',
        duration: '45 Menit'
      }
    ],
    recentAttendance: [
      { date: '13 Okt 2026', time: '14.00 WIB', status: 'Hadir', sessionName: 'Session 12: VLOOKUP & Data Validation' },
      { date: '10 Okt 2026', time: '13.58 WIB', status: 'Hadir', sessionName: 'Session 11: Mail Merge & Form Otomatis' },
      { date: '06 Okt 2026', time: '14.02 WIB', status: 'Hadir', sessionName: 'Session 10: Perancangan Slide Presentasi' },
      { date: '03 Okt 2026', time: '14.00 WIB', status: 'Hadir', sessionName: 'Session 09: Troubleshooting Windows' }
    ],
    certificate: {
      certNumber: 'ELC/COMP/2026/0311',
      issueDate: 'Segera Terbit',
      verified: true,
      skills: ['Excel Advanced', 'Office Administration', 'Digital Data Formatting']
    }
  },
  {
    id: 'student-3',
    studentIdNumber: 'ELC-2026-LPK-007',
    name: 'Fajar Nugraha',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    programCategory: 'lpk',
    programName: 'LPK Vokasi Siap Kerja & Sertifikasi BNSP',
    classType: 'Kelas Vokasi Industri',
    branch: 'Kampus Cabang Pacet (Jalancagak)',
    attendanceRate: 91,
    totalSessions: 30,
    completedSessions: 22,
    nextSession: {
      day: 'Sabtu, 18 Okt 2026',
      time: '09.00 - 12.00 WIB',
      room: 'Ruang Workshop Vokasi',
      topic: 'Simulasi Wawancara Kerja & Asesmen Mandiri BNSP',
      instructor: 'Tim Asesor & Instruktur ELC'
    },
    modules: [
      {
        id: 'ml1',
        title: 'Etika Kerja & Komunikasi Profesional Kantor',
        type: 'pdf',
        status: 'completed',
        score: 96,
        duration: '20 Menit'
      },
      {
        id: 'ml2',
        title: 'Standar Operasional Kerja Berbasis SKKNI',
        type: 'pdf',
        status: 'completed',
        score: 92,
        duration: '40 Menit'
      },
      {
        id: 'ml3',
        title: 'Pembuatan Portofolio Uji Kompetensi BNSP',
        type: 'quiz',
        status: 'in_progress',
        score: 85,
        duration: '30 Menit'
      },
      {
        id: 'ml4',
        title: 'Final Job Interview & English Presentation',
        type: 'video',
        status: 'locked',
        duration: '45 Menit'
      }
    ],
    recentAttendance: [
      { date: '11 Okt 2026', time: '09.00 WIB', status: 'Hadir', sessionName: 'Session 22: Simulasi Asesmen Kompetensi' },
      { date: '04 Okt 2026', time: '08.55 WIB', status: 'Hadir', sessionName: 'Session 21: Korespondensi Bahasa Inggris' },
      { date: '27 Sep 2026', time: '09.05 WIB', status: 'Hadir', sessionName: 'Session 20: Administrasi Berkas Perusahaan' },
      { date: '20 Sep 2026', time: '09.00 WIB', status: 'Hadir', sessionName: 'Session 19: Etos Kerja Disnaker' }
    ],
    certificate: {
      certNumber: 'ELC/BNSP/2026/0055',
      issueDate: 'Terverifikasi Asesor BNSP',
      verified: true,
      skills: ['Standar SKKNI', 'Office Communication', 'Etos Kerja Industri']
    }
  }
];
