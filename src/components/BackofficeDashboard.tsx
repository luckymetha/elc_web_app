import React, { useState, useEffect } from 'react';
import { 
  Users, 
  BookOpen, 
  QrCode, 
  Award, 
  Plus, 
  Trash2, 
  RefreshCw, 
  ArrowLeft, 
  ShieldCheck, 
  Search, 
  BarChart3,
  LogOut,
  Lock,
  Mail,
  ArrowRight
} from 'lucide-react';

interface BackofficeDashboardProps {
  onBackToPortal: () => void;
}

const FALLBACK_OVERVIEW = {
  totalStudents: 3,
  englishStudents: 1,
  computerStudents: 1,
  lpkStudents: 1,
  totalAttendances: 7,
  totalCertificates: 3
};

const FALLBACK_STUDENTS = [
  {
    id: "user-1",
    student_id_number: "ELC-ENG-041",
    name: "Rizky Ramadhani",
    email: "rizky@elc.id",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
    program_category: "english",
    program_name: "Active Speaking & Teens Conversation",
    class_type: "Reguler Sore",
    branch: "Kampus Pusat Ciparay",
    attendance_count: 5,
    completed_modules: 2,
    cert_number: "ELC/ENG/2026/0892"
  },
  {
    id: "user-2",
    student_id_number: "ELC-COM-019",
    name: "Siti Nurhaliza",
    email: "siti@elc.id",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    program_category: "computer",
    program_name: "Aplikasi Perkantoran & Excel Mahir",
    class_type: "Privat Intensif",
    branch: "Kampus Pusat Ciparay (Lab Komputer)",
    attendance_count: 1,
    completed_modules: 2,
    cert_number: "ELC/COMP/2026/0311"
  },
  {
    id: "user-3",
    student_id_number: "ELC-LPK-007",
    name: "Fajar Nugraha",
    email: "fajar@elc.id",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    program_category: "lpk",
    program_name: "LPK Vokasi Siap Kerja & Sertifikasi BNSP",
    class_type: "Kelas Vokasi Industri",
    branch: "Kampus Cabang Pacet (Jalancagak)",
    attendance_count: 1,
    completed_modules: 2,
    cert_number: "ELC/BNSP/2026/0055"
  }
];

const FALLBACK_ATTENDANCES = [
  {
    id: "att-1",
    user_id: "user-1",
    student_name: "Rizky Ramadhani",
    student_id_number: "ELC-ENG-041",
    program_category: "english",
    branch: "Kampus Pusat Ciparay",
    session_name: "Active Speaking: Daily Expressions & Fluency",
    room_name: "Ruang Audio-Visual Lt. 2",
    scan_time: "2026-10-14 16:30:00",
    status: "Hadir"
  },
  {
    id: "att-2",
    user_id: "user-2",
    student_name: "Siti Nurhaliza",
    student_id_number: "ELC-COM-019",
    program_category: "computer",
    branch: "Kampus Pusat Ciparay",
    session_name: "Praktik Rumus Excel VLOOKUP & Pivot Table",
    room_name: "Lab Komputer AC (1 Siswa 1 PC)",
    scan_time: "2026-10-14 14:15:00",
    status: "Hadir"
  },
  {
    id: "att-3",
    user_id: "user-3",
    student_name: "Fajar Nugraha",
    student_id_number: "ELC-LPK-007",
    program_category: "lpk",
    branch: "Kampus Cabang Pacet (Jalancagak)",
    session_name: "Simulasi Uji Kompetensi BNSP",
    room_name: "Aula Workshop Vokasi LPK",
    scan_time: "2026-10-14 10:00:00",
    status: "Hadir"
  }
];

const FALLBACK_MODULES = [
  {
    id: "mod-eng-1",
    program_category: "english",
    title: "Unit 1: Self Introduction & Overcoming Mental Block",
    type: "video",
    duration: "45 Menit",
    description: "Fondasi berbicara tanpa rasa takut salah grammar melalui metode Active Speaking ELC."
  },
  {
    id: "mod-eng-2",
    program_category: "english",
    title: "Unit 2: Idiomatic Expressions in Casual Conversation",
    type: "pdf",
    duration: "30 Menit",
    description: "Kumpulan ungkapan natural yang umum digunakan oleh native speaker."
  },
  {
    id: "mod-com-1",
    program_category: "computer",
    title: "Modul 1: Excel Formula Terapan Kerja (IF, VLOOKUP, INDEX)",
    type: "pdf",
    duration: "60 Menit",
    description: "Studi kasus pengolahan data laporan administrasi dan keuangan kantor."
  },
  {
    id: "mod-lpk-1",
    program_category: "lpk",
    title: "SKKNI Unit 1: Tata Kelola Dokumen & Korespondensi Bisnis",
    type: "pdf",
    duration: "90 Menit",
    description: "Standar kompetensi kerja nasional untuk staf administrasi perkantoran modern."
  }
];

export const BackofficeDashboard: React.FC<BackofficeDashboardProps> = ({ onBackToPortal }) => {
  // Autentikasi Admin State
  const [adminUser, setAdminUser] = useState<any>(() => {
    try {
      const saved = localStorage.getItem('elc_admin_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'attendances' | 'modules'>('overview');
  
  // Data State dari SQLite
  const [overview, setOverview] = useState<any>(FALLBACK_OVERVIEW);
  const [students, setStudents] = useState<any[]>(FALLBACK_STUDENTS);
  const [attendances, setAttendances] = useState<any[]>(FALLBACK_ATTENDANCES);
  const [modules, setModules] = useState<any[]>(FALLBACK_MODULES);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Modal Tambah Siswa Baru
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    student_id_number: '',
    program_category: 'english',
    program_name: 'Active Speaking & Teens Conversation',
    class_type: 'Reguler Sore',
    branch: 'Kampus Pusat Ciparay',
    password: 'elc' + Math.floor(1000 + Math.random() * 9000)
  });

  // Modal Tambah Modul Belajar
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false);
  const [newModule, setNewModule] = useState({
    program_category: 'english',
    title: '',
    type: 'pdf',
    duration: '30 Menit',
    description: ''
  });

  useEffect(() => {
    if (adminUser) {
      fetchOverview();
      fetchStudents();
      fetchAttendances();
      fetchModules();
    }
  }, [adminUser]);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      const res = await fetch('http://localhost:3301/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: adminEmail, password: adminPassword })
      });

      const data = await res.json();
      if (res.ok && data.user) {
        if (data.user.role !== 'admin') {
          setLoginError('Akun ini adalah akun siswa, silakan login di Portal Siswa (/siswa).');
          return;
        }
        setAdminUser(data.user);
        localStorage.setItem('elc_admin_session', JSON.stringify(data.user));
      } else {
        setLoginError(data.error || 'Login gagal');
      }
    } catch {
      // Offline / Vercel fallback
      if (
        (adminEmail.toLowerCase() === 'admin@elc.id' || 
         adminEmail.toUpperCase() === 'ELC-ADM-001' || 
         adminEmail.toLowerCase() === 'admin') && 
        adminPassword === 'admin123'
      ) {
        const demoAdmin = {
          id: 'admin-1',
          student_id_number: 'ELC-ADM-001',
          name: 'Mr. Entis Sutisna',
          email: 'admin@elc.id',
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
          branch: 'Kampus Pusat Ciparay'
        };
        setAdminUser(demoAdmin);
        localStorage.setItem('elc_admin_session', JSON.stringify(demoAdmin));
      } else {
        setLoginError('Email atau password salah! Coba akun demo: admin@elc.id / admin123');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleAdminLogout = () => {
    setAdminUser(null);
    localStorage.removeItem('elc_admin_session');
  };

  const fetchOverview = async () => {
    try {
      const res = await fetch('http://localhost:3301/api/admin/overview');
      if (res.ok) setOverview(await res.json());
    } catch {
      setOverview(FALLBACK_OVERVIEW);
    }
  };

  const fetchStudents = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('http://localhost:3301/api/admin/students');
      if (res.ok) setStudents(await res.json());
    } catch {
      setStudents(FALLBACK_STUDENTS);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAttendances = async () => {
    try {
      const res = await fetch('http://localhost:3301/api/admin/attendances');
      if (res.ok) setAttendances(await res.json());
    } catch {
      setAttendances(FALLBACK_ATTENDANCES);
    }
  };

  const fetchModules = async () => {
    try {
      const res = await fetch('http://localhost:3301/api/admin/modules');
      if (res.ok) setModules(await res.json());
    } catch {
      setModules(FALLBACK_MODULES);
    }
  };

  const handleCreateStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3301/api/admin/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent)
      });
      const data = await res.json();
      if (res.ok) {
        setIsAddStudentOpen(false);
        fetchStudents();
        fetchOverview();
        alert('Siswa berhasil didaftarkan ke Database ELC!');
      } else {
        alert(data.error || 'Gagal menambahkan siswa');
      }
    } catch {
      alert('Koneksi ke backend port 3301 gagal');
    }
  };

  const handleDeleteStudent = async (userId: string, name: string) => {
    if (!confirm(`Apakah Anda yakin ingin menghapus data siswa: ${name}?`)) return;
    try {
      const res = await fetch(`http://localhost:3301/api/admin/students/${userId}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchStudents();
        fetchOverview();
        fetchAttendances();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateModule = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3301/api/admin/modules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newModule)
      });
      if (res.ok) {
        setIsAddModuleOpen(false);
        fetchModules();
        alert('Modul baru berhasil ditambahkan!');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.student_id_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Jika belum login admin, tampilkan form login khusus Administrator
  if (!adminUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col justify-center items-center px-4 py-12 font-nunito relative selection:bg-amber-500 selection:text-white">
        {/* Back button */}
        <button
          onClick={onBackToPortal}
          className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Halaman Utama</span>
        </button>

        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-orange-500/25 mx-auto ring-4 ring-orange-100">
              ELC
            </div>
            <div className="pt-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200 inline-block">
                Portal Manajemen Staf
              </span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Login Backoffice ELC
            </h2>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              Khusus pengelola, pimpinan lembaga (Mr. Entis Sutisna), dan instruktur LKP/LPK English Lovers Club.
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <span>Email atau ID Admin</span>
              </label>
              <input
                type="text"
                required
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="misal: admin@elc.id atau ELC-ADM-001"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-bold focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-indigo-600" />
                <span>Password</span>
              </label>
              <input
                type="password"
                required
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-bold focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-900 to-slate-900 hover:from-indigo-800 hover:to-slate-800 text-white rounded-2xl font-black text-xs shadow-md shadow-indigo-950/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{isLoggingIn ? 'Memverifikasi...' : 'Masuk ke Backoffice'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Fill Button */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <p className="text-[11px] text-slate-400 font-bold text-center">
              Akses Cepat Pengujian Demo Admin:
            </p>
            <button
              type="button"
              onClick={() => {
                setAdminEmail('admin@elc.id');
                setAdminPassword('admin123');
              }}
              className="w-full py-2.5 px-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl text-amber-900 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>🔑</span>
              <span>Gunakan Akun: admin@elc.id / admin123</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 font-nunito flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-slate-900 text-white px-6 py-4 border-b border-slate-800 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToPortal}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Kembali ke Web Portal"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center font-black text-white text-sm shadow-xs">
              ELC
            </div>
            <div>
              <h1 className="font-black text-base tracking-tight leading-tight">
                ELC Admin Backoffice & SIS
              </h1>
              <p className="text-[11px] text-slate-400 font-bold">
                Student Information System • Database SQLite Aktif
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-2xl border border-slate-700 text-xs font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('students')}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'students'
                ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Data Siswa ({overview.totalStudents})</span>
          </button>

          <button
            onClick={() => setActiveTab('attendances')}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'attendances'
                ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Log Presensi ({overview.totalAttendances})</span>
          </button>

          <button
            onClick={() => setActiveTab('modules')}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'modules'
                ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Materi Pembelajaran</span>
          </button>
        </div>

        {/* Admin Profile & Logout */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2.5 bg-slate-800/80 px-3 py-1.5 rounded-2xl border border-slate-700">
            <img 
              src={adminUser?.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"} 
              alt={adminUser?.name || "Admin"} 
              className="w-7 h-7 rounded-xl object-cover ring-2 ring-amber-400"
            />
            <div className="text-left">
              <p className="text-xs font-black text-white leading-tight">{adminUser?.name || "Mr. Entis Sutisna"}</p>
              <p className="text-[10px] text-amber-400 font-bold">Pimpinan Lembaga / Admin</p>
            </div>
          </div>

          <button
            onClick={handleAdminLogout}
            className="px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/30 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            title="Keluar dari sesi admin"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Backoffice Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        
        {/* ======================================================== */}
        {/* VIEW 1: OVERVIEW & REKAP LEMBAGA */}
        {/* ======================================================== */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Top Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Total Siswa Aktif</span>
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-3xl font-black text-slate-900">{overview.totalStudents}</p>
                <div className="text-[11px] font-bold text-slate-500 flex items-center gap-2 pt-1 border-t border-slate-100">
                  <span className="text-amber-700">🇬🇧 {overview.englishStudents} Inggris</span> • 
                  <span className="text-cyan-700">💻 {overview.computerStudents} Komputer</span> • 
                  <span className="text-emerald-700">🏢 {overview.lpkStudents} LPK</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Total Presensi Riil</span>
                  <QrCode className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-3xl font-black text-emerald-600">{overview.totalAttendances}</p>
                <p className="text-[11px] font-bold text-slate-500 pt-1 border-t border-slate-100">
                  Tersimpan di SQLite attendances table
                </p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Sertifikat Kelulusan</span>
                  <Award className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-3xl font-black text-orange-600">{overview.totalCertificates}</p>
                <p className="text-[11px] font-bold text-slate-500 pt-1 border-t border-slate-100">
                  Ijazah terdaftar & bisa diverifikasi
                </p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Status Legalitas</span>
                  <ShieldCheck className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-lg font-black text-indigo-900 leading-tight">Disnaker 1994 & Disdik 2004</p>
                <p className="text-[11px] font-bold text-slate-500 pt-1 border-t border-slate-100">
                  Kampus Ciparay & Pacet
                </p>
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-base font-black text-slate-900">Aktivitas Presensi Terbaru Siswa</h3>
                  <button 
                    onClick={fetchAttendances}
                    className="text-xs text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Refresh</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {attendances.slice(0, 5).map((att) => (
                    <div key={att.id} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-slate-900">{att.student_name}</span>
                          <span className="text-[10px] font-bold text-slate-400 font-mono">({att.student_id_number})</span>
                        </div>
                        <p className="text-slate-600 font-semibold">{att.session_name} • {att.room_name}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-100 text-emerald-800">
                          {att.status}
                        </span>
                        <p className="text-[10px] text-slate-400 mt-1">{att.scan_time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backoffice Quick Tools */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-4">
                <h3 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3">
                  Aksi Cepat Manajemen
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setActiveTab('students');
                      setIsAddStudentOpen(true);
                    }}
                    className="w-full py-3 px-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Daftarkan Siswa Baru</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('modules');
                      setIsAddModuleOpen(true);
                    }}
                    className="w-full py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Tambah Modul Belajar</span>
                  </button>

                  <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs font-semibold text-amber-900 space-y-1">
                    <p className="font-black">Catatan Administrator:</p>
                    <p>Siswa yang baru didaftarkan di menu ini dapat langsung login di <strong>Mobile App Siswa</strong> menggunakan NIM dan password default.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 2: KELOLA DATA SISWA (CRUD LENGKAP) */}
        {/* ======================================================== */}
        {activeTab === 'students' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-3xl border border-slate-200 shadow-2xs">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari nama, NIM, atau email siswa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={fetchStudents}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 cursor-pointer"
                  title="Refresh data siswa"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                </button>

                <button
                  onClick={() => setIsAddStudentOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Siswa</span>
                </button>
              </div>
            </div>

            {/* Table Siswa */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold uppercase text-[11px]">
                      <th className="py-3.5 px-4">Siswa</th>
                      <th className="py-3.5 px-4">NIM & Program</th>
                      <th className="py-3.5 px-4">Kelas & Cabang</th>
                      <th className="py-3.5 px-4">Presensi</th>
                      <th className="py-3.5 px-4">Modul Selesai</th>
                      <th className="py-3.5 px-4 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredStudents.map((st) => (
                      <tr key={st.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={st.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
                              alt={st.name}
                              className="w-8 h-8 rounded-xl object-cover ring-1 ring-slate-200"
                            />
                            <div>
                              <p className="font-black text-slate-900">{st.name}</p>
                              <p className="text-[11px] text-slate-400 font-medium">{st.email}</p>
                            </div>
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            {st.student_id_number}
                          </span>
                          <p className="text-[11px] font-semibold text-slate-600 mt-1">{st.program_name}</p>
                        </td>

                        <td className="py-3.5 px-4">
                          <p className="font-bold text-slate-800">{st.class_type}</p>
                          <p className="text-[11px] text-slate-500">{st.branch}</p>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800 text-[11px]">
                            {st.attendance_count} Hadir
                          </span>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="font-bold text-slate-700">{st.completed_modules} Modul</span>
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => handleDeleteStudent(st.id, st.name)}
                            className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-colors cursor-pointer"
                            title="Hapus Siswa"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 3: LOG PRESENSI SEMUA SISWA */}
        {/* ======================================================== */}
        {activeTab === 'attendances' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between bg-white p-4 rounded-3xl border border-slate-200 shadow-2xs">
              <div>
                <h3 className="text-base font-black text-slate-900">Rekap Riwayat Presensi Masuk</h3>
                <p className="text-xs text-slate-500 font-semibold">Seluruh data hasil scan presensi digital siswa ELC secara realtime.</p>
              </div>
              <button
                onClick={fetchAttendances}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refresh Log</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold uppercase text-[11px]">
                    <th className="py-3.5 px-4">Waktu Scan</th>
                    <th className="py-3.5 px-4">Nama Siswa</th>
                    <th className="py-3.5 px-4">NIM</th>
                    <th className="py-3.5 px-4">Sesi & Ruangan</th>
                    <th className="py-3.5 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {attendances.map((att) => (
                    <tr key={att.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-slate-500">{att.scan_time}</td>
                      <td className="py-3.5 px-4 font-black text-slate-900">{att.student_name}</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-amber-800">{att.student_id_number}</td>
                      <td className="py-3.5 px-4">
                        <p className="font-bold text-slate-800">{att.session_name}</p>
                        <p className="text-[11px] text-slate-500">{att.room_name}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800">
                          {att.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 4: KELOLA MODUL PEMBELAJARAN */}
        {/* ======================================================== */}
        {activeTab === 'modules' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between bg-white p-4 rounded-3xl border border-slate-200 shadow-2xs">
              <div>
                <h3 className="text-base font-black text-slate-900">Kurikulum & Modul Belajar Siswa</h3>
                <p className="text-xs text-slate-500 font-semibold">Kelola silabus materi yang tampil di aplikasi mobile siswa.</p>
              </div>
              <button
                onClick={() => setIsAddModuleOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Modul</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {modules.map((m) => (
                <div key={m.id} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700">
                      {m.program_category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-bold">{m.duration}</span>
                  </div>
                  <h4 className="font-black text-slate-900 text-sm leading-snug">{m.title}</h4>
                  <p className="text-xs text-slate-500 font-semibold">{m.description || 'Materi pembelajaran resmi ELC.'}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* MODAL 1: FORM TAMBAH SISWA BARU KE DATABASE SQLITE */}
      {isAddStudentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Pendaftaran Siswa Baru (Database)</h3>
              <button
                onClick={() => setIsAddStudentOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-xs font-bold cursor-pointer"
              >
                Tutup
              </button>
            </div>

            <form onSubmit={handleCreateStudent} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-800 font-bold mb-1">Nama Lengkap Siswa *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Farhan"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-800 font-bold mb-1">Nomor Induk Siswa (NIM) *</label>
                  <input
                    type="text"
                    required
                    placeholder="ELC-ENG-099"
                    value={newStudent.student_id_number}
                    onChange={(e) => setNewStudent({ ...newStudent, student_id_number: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold font-mono text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-slate-800 font-bold mb-1">Email Siswa *</label>
                  <input
                    type="email"
                    required
                    placeholder="farhan@email.com"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-800 font-bold mb-1">Pilihan Program</label>
                  <select
                    value={newStudent.program_category}
                    onChange={(e) => setNewStudent({ 
                      ...newStudent, 
                      program_category: e.target.value,
                      program_name: e.target.value === 'english' ? 'English Lovers Club (ELC)' : e.target.value === 'computer' ? 'Computer Academy' : 'LPK Vokasi BNSP'
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold text-slate-900"
                  >
                    <option value="english">🇬🇧 Bahasa Inggris</option>
                    <option value="computer">💻 Komputer & IT</option>
                    <option value="lpk">🏢 LPK Vokasi BNSP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-800 font-bold mb-1">Cabang Belajar</label>
                  <select
                    value={newStudent.branch}
                    onChange={(e) => setNewStudent({ ...newStudent, branch: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold text-slate-900"
                  >
                    <option value="Kampus Pusat Ciparay">Kampus Pusat Ciparay</option>
                    <option value="Cabang Pacet (Jalancagak)">Cabang Pacet (Jalancagak)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-bold mb-1">Password Awal Siswa</label>
                <input
                  type="text"
                  required
                  value={newStudent.password}
                  onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-mono font-bold text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs cursor-pointer shadow-md"
              >
                Simpan & Daftarkan Siswa ke Database
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: FORM TAMBAH MODUL BELAJAR */}
      {isAddModuleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-black text-slate-900">Tambah Modul Pembelajaran</h3>
              <button
                onClick={() => setIsAddModuleOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-xs font-bold cursor-pointer"
              >
                Tutup
              </button>
            </div>

            <form onSubmit={handleCreateModule} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-800 font-bold mb-1">Kategori Program</label>
                <select
                  value={newModule.program_category}
                  onChange={(e) => setNewModule({ ...newModule, program_category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold text-slate-900"
                >
                  <option value="english">Bahasa Inggris</option>
                  <option value="computer">Komputer & IT</option>
                  <option value="lpk">LPK Vokasi BNSP</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-800 font-bold mb-1">Judul Modul Materi *</label>
                <input
                  type="text"
                  required
                  placeholder="Misal: Trik Cepat Rumus VLOOKUP"
                  value={newModule.title}
                  onChange={(e) => setNewModule({ ...newModule, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-800 font-bold mb-1">Tipe Materi</label>
                  <select
                    value={newModule.type}
                    onChange={(e) => setNewModule({ ...newModule, type: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold text-slate-900"
                  >
                    <option value="pdf">Dokumen PDF</option>
                    <option value="audio">Audio Lab</option>
                    <option value="video">Video Tutorial</option>
                    <option value="quiz">Kuis Interaktif</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-800 font-bold mb-1">Estimasi Durasi</label>
                  <input
                    type="text"
                    value={newModule.duration}
                    onChange={(e) => setNewModule({ ...newModule, duration: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-bold mb-1">Ringkasan Silabus</label>
                <textarea
                  rows={2}
                  value={newModule.description}
                  onChange={(e) => setNewModule({ ...newModule, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 font-semibold text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs cursor-pointer shadow-md"
              >
                Simpan Modul
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
