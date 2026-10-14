import React, { useState, useEffect } from 'react';
import { 
  Home, 
  BookOpen, 
  QrCode, 
  Award, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  PlayCircle, 
  FileText, 
  Lock, 
  ChevronRight, 
  ArrowLeft,
  Sparkles,
  LogOut,
  UserCheck,
  ShieldCheck,
  Download,
  KeyRound,
  AlertCircle,
  Camera
} from 'lucide-react';

interface StudentMobileAppProps {
  onBackToPortal: () => void;
}

export const StudentMobileApp: React.FC<StudentMobileAppProps> = ({ onBackToPortal }) => {
  // Session Login Nyata
  const [currentUser, setCurrentUser] = useState<any | null>(() => {
    const saved = localStorage.getItem('elc_student_session');
    return saved ? JSON.parse(saved) : null;
  });

  // Form State Login
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Dashboard Data dari SQLite Backend
  const [dashboardData, setDashboardData] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'modules' | 'attendance' | 'certificate'>('home');
  const [selectedModule, setSelectedModule] = useState<any | null>(null);
  
  // Real Scan State
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState('');

  // Fetch Dashboard saat user login
  useEffect(() => {
    if (currentUser?.id) {
      fetchDashboard(currentUser.id);
    }
  }, [currentUser]);

  const fetchDashboard = async (userId: string) => {
    try {
      const res = await fetch(`http://localhost:3301/api/student/dashboard/${userId}`);
      if (res.ok) {
        const data = await res.json();
        setDashboardData(data);
      }
    } catch (err) {
      console.error('Gagal mengambil data dashboard:', err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    try {
      const res = await fetch('http://localhost:3301/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password })
      });

      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.error || 'Login gagal');
      } else {
        setCurrentUser(data.user);
        localStorage.setItem('elc_student_session', JSON.stringify(data.user));
      }
    } catch {
      setLoginError('Server backend belum merespons. Pastikan backend di port 3301 aktif.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setDashboardData(null);
    localStorage.removeItem('elc_student_session');
  };

  const handleQuickDemoLogin = (nim: string) => {
    setIdentifier(nim);
    setPassword('elc12345');
  };

  // Eksekusi Scan Presensi Nyata ke Database SQLite
  const handlePerformRealScan = async (roomName = 'Lab Komputer AC / Ruang Kelas Ciparay') => {
    if (!currentUser?.id) return;
    setIsScanning(true);
    setScanMessage('Menghubungkan ke Scanner Presensi ELC...');

    setTimeout(async () => {
      try {
        const res = await fetch('http://localhost:3301/api/student/attendance/scan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: currentUser.id,
            roomName: roomName,
            sessionName: `Presensi Terverifikasi: ${dashboardData?.user?.program_name || 'Kelas ELC'}`
          })
        });

        if (res.ok) {
          setScanMessage('Presensi Berhasil Terverifikasi di Database ELC!');
          fetchDashboard(currentUser.id); // Refresh data riwayat absen
          setTimeout(() => {
            setIsScanning(false);
            setScanMessage('');
          }, 2000);
        }
      } catch {
        setScanMessage('Gagal mencatat presensi');
        setTimeout(() => setIsScanning(false), 2000);
      }
    }, 1200);
  };

  const student = dashboardData?.user || currentUser;
  const programCategory = student?.program_category || 'english';

  const getProgramBadge = () => {
    switch (programCategory) {
      case 'english':
        return {
          label: '🇬🇧 Bahasa Inggris ELC',
          gradient: 'from-amber-500 to-orange-500',
          accent: 'text-orange-600',
          lightBg: 'bg-amber-50 border-amber-200'
        };
      case 'computer':
        return {
          label: '💻 Digital Computer Academy',
          gradient: 'from-cyan-600 to-blue-600',
          accent: 'text-cyan-600',
          lightBg: 'bg-cyan-50 border-cyan-200'
        };
      case 'lpk':
        return {
          label: '🏢 LPK Vokasi & BNSP',
          gradient: 'from-emerald-600 to-teal-600',
          accent: 'text-emerald-600',
          lightBg: 'bg-emerald-50 border-emerald-200'
        };
      default:
        return {
          label: 'ELC Course',
          gradient: 'from-slate-700 to-slate-900',
          accent: 'text-slate-800',
          lightBg: 'bg-slate-50 border-slate-200'
        };
    }
  };

  const badge = getProgramBadge();

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center p-2 sm:p-6 font-nunito">
      {/* Smartphone Frame Container */}
      <div className="w-full max-w-md bg-[#fbfbf9] min-h-[840px] max-h-[92vh] rounded-[40px] shadow-2xl border-4 border-slate-700/80 flex flex-col overflow-hidden relative">
        
        {/* ======================================================== */}
        {/* VIEW 1: JIKA SISWA BELUM LOGIN (LOGIN SCREEN ASLI) */}
        {/* ======================================================== */}
        {!currentUser ? (
          <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 bg-white">
            <div className="space-y-6 pt-4">
              {/* Back to Web Portal */}
              <button
                onClick={onBackToPortal}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-bold cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Web Portal</span>
              </button>

              {/* Logo & Headline */}
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 mx-auto flex items-center justify-center shadow-md shadow-orange-500/25 ring-4 ring-amber-100">
                  <span className="font-black text-2xl text-white tracking-wider">ELC</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900">Portal Siswa ELC</h2>
                <p className="text-xs text-slate-500 font-semibold max-w-xs mx-auto">
                  Silakan login menggunakan Nomor Induk Siswa (NIM) atau Email yang terdaftar di ELC Ciparay / Pacet.
                </p>
              </div>

              {/* Error Message */}
              {loginError && (
                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              {/* Form Login Nyata */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-slate-800 mb-1">
                    NIM / Email Siswa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: ELC-ENG-041 atau email@elc.id"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-800 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-105 text-white font-black text-xs shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>{isLoading ? 'Memeriksa Data...' : 'Masuk ke Akun Siswa'}</span>
                </button>
              </form>

              {/* Quick Auto-Fill Demo Akun Siswa Nyata di Database */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="block text-[11px] font-black uppercase tracking-wider text-slate-400 text-center">
                  Pilih Cepat Akun Demo (Di Database SQLite):
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('ELC-ENG-041')}
                    className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-left text-xs font-bold text-amber-900 flex items-center justify-between cursor-pointer"
                  >
                    <span>🇬🇧 Rizky (Siswa Bahasa Inggris)</span>
                    <span className="text-[10px] text-amber-700">NIM: ELC-ENG-041</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('ELC-COM-019')}
                    className="p-2 rounded-xl bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-left text-xs font-bold text-cyan-900 flex items-center justify-between cursor-pointer"
                  >
                    <span>💻 Siti (Siswa Komputer & Excel)</span>
                    <span className="text-[10px] text-cyan-700">NIM: ELC-COM-019</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('ELC-LPK-007')}
                    className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-left text-xs font-bold text-emerald-900 flex items-center justify-between cursor-pointer"
                  >
                    <span>🏢 Fajar (Siswa LPK BNSP)</span>
                    <span className="text-[10px] text-emerald-700">NIM: ELC-LPK-007</span>
                  </button>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 text-center pt-4">
              LKP & LPK ELC Ciparay • Izin Disnaker 1994 & Disdik 2004
            </p>
          </div>
        ) : (

          /* ======================================================== */
          /* VIEW 2: SETELAH SISWA BERHASIL LOGIN (DASHBOARD REALTIME) */
          /* ======================================================== */
          <>
            {/* Top Bar Status */}
            <div className="bg-white border-b border-slate-200/80 px-5 pt-4 pb-3 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs">
                <button
                  onClick={onBackToPortal}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-900 font-bold cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Portal Web</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 text-rose-600 hover:text-rose-700 font-bold cursor-pointer bg-rose-50 px-2.5 py-1 rounded-xl border border-rose-200 text-[11px]"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Keluar</span>
                </button>
              </div>

              {/* Profile Card */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3">
                  <img
                    src={student.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}
                    alt={student.name}
                    className="w-11 h-11 rounded-2xl object-cover ring-2 ring-amber-300 shadow-xs"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-black text-slate-900 leading-tight">
                        {student.name}
                      </h3>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-[11px] font-bold text-slate-500">
                      NIM: {student.student_id_number}
                    </p>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-xl text-[10px] font-black text-white bg-gradient-to-r ${badge.gradient} shadow-2xs`}>
                  {programCategory.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20 scrollbar-none">
              
              {/* TAB 1: BERANDA SISWA */}
              {activeTab === 'home' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  {/* Card Program Info Spesifik */}
                  <div className={`p-4 rounded-3xl border ${badge.lightBg} shadow-xs space-y-2`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-600">
                        Program Terdaftar
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-500">
                        {student.class_type}
                      </span>
                    </div>
                    <h4 className="text-base font-black text-slate-900 leading-snug">
                      {student.program_name}
                    </h4>
                    <p className="text-xs text-slate-600 font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{student.branch}</span>
                    </p>
                  </div>

                  {/* Ringkasan Presensi Nyata dari SQLite */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs text-center">
                      <p className="text-2xl font-black text-emerald-600">
                        {dashboardData?.attendances?.length || 0} Sesi
                      </p>
                      <p className="text-[11px] font-bold text-slate-500">Total Hadir Riil</p>
                    </div>
                    <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs text-center">
                      <p className="text-2xl font-black text-amber-600">
                        {dashboardData?.stats?.completedModules || 0} / {dashboardData?.modules?.length || 0}
                      </p>
                      <p className="text-[11px] font-bold text-slate-500">Modul Tuntas</p>
                    </div>
                  </div>

                  {/* Tombol Cepat Absensi & Modul */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveTab('attendance')}
                      className="flex-1 py-3 px-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <QrCode className="w-4 h-4 text-orange-600" />
                      <span>Scan Presensi</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('modules')}
                      className={`flex-1 py-3 px-3 rounded-2xl text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md bg-gradient-to-r ${badge.gradient} cursor-pointer`}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Buka Modul</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: MODUL PEMBELAJARAN (DATA ASLI SQLITE) */}
              {activeTab === 'modules' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-1">
                    <div>
                      <h3 className="text-base font-black text-slate-900">Materi & Tugas Belajar</h3>
                      <p className="text-xs text-slate-500 font-semibold">{student.program_name}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      {dashboardData?.modules?.length || 0} Modul
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {dashboardData?.modules?.map((mod: any, idx: number) => (
                      <div
                        key={mod.id}
                        onClick={() => {
                          if (mod.status !== 'locked') setSelectedModule(mod);
                        }}
                        className={`p-3.5 rounded-2xl border transition-all ${
                          mod.status === 'locked'
                            ? 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed'
                            : 'bg-white border-slate-200/90 hover:border-amber-400 hover:shadow-xs cursor-pointer'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2.5">
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                              mod.status === 'completed'
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-amber-100 text-amber-700'
                            }`}>
                              {mod.status === 'completed' ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : mod.status === 'locked' ? (
                                <Lock className="w-4 h-4" />
                              ) : (
                                <PlayCircle className="w-4 h-4" />
                              )}
                            </div>

                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-black uppercase text-slate-400">
                                  Modul 0{idx + 1} • {mod.type}
                                </span>
                                {mod.score && (
                                  <span className="px-1.5 py-0.2 bg-emerald-50 text-emerald-700 text-[10px] font-extrabold rounded">
                                    Nilai: {mod.score}
                                  </span>
                                )}
                              </div>
                              <h4 className="text-xs font-black text-slate-900 leading-snug">
                                {mod.title}
                              </h4>
                              <p className="text-[11px] text-slate-500 font-medium">
                                Durasi: {mod.duration}
                              </p>
                            </div>
                          </div>

                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-2" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedModule && (
                    <div className="p-4 bg-white rounded-3xl border border-amber-300 shadow-lg space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-xs font-black text-amber-800 uppercase">
                          Aktif: {selectedModule.title}
                        </span>
                        <button
                          onClick={() => setSelectedModule(null)}
                          className="text-xs text-slate-400 hover:text-slate-700 font-bold cursor-pointer"
                        >
                          Tutup
                        </button>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                        {selectedModule.description || 'Materi ini siap diakses untuk pembelajaran tatap muka dan mandiri.'}
                      </p>
                      <button className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer">
                        <PlayCircle className="w-4 h-4" />
                        <span>Mulai Sesi Belajar</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: PRESENSI REALTIME & KARTU DIGITAL SISWA */}
              {activeTab === 'attendance' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  {/* Kartu Pelajar Digital Resmi */}
                  <div className="rounded-3xl p-5 bg-gradient-to-tr from-slate-900 via-slate-800 to-amber-950 text-white shadow-xl space-y-4 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black text-xs flex items-center justify-center">
                          ELC
                        </div>
                        <div>
                          <h4 className="font-black text-xs tracking-wider">KARTU SISWA RESMI</h4>
                          <p className="text-[10px] text-amber-300 font-bold">LKP & LPK English Lovers Club</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full border border-white/20">
                        Aktif
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="space-y-1">
                        <p className="text-sm font-black tracking-wide">{student.name}</p>
                        <p className="text-xs text-slate-300 font-mono font-bold">{student.student_id_number}</p>
                        <p className="text-[10px] text-amber-200 font-semibold">{student.program_name}</p>
                      </div>

                      {/* Tombol Scan Presensi Nyata */}
                      <div 
                        onClick={() => handlePerformRealScan('Lab Komputer AC / Ruang Kelas Ciparay')}
                        className="p-2 bg-white rounded-2xl shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-transform flex flex-col items-center"
                        title="Klik untuk scan presensi nyata"
                      >
                        <QrCode className="w-16 h-16 text-slate-900" />
                        <span className="text-[8px] text-slate-500 font-bold mt-0.5">Tap Absen</span>
                      </div>
                    </div>
                  </div>

                  {/* Feedback Scan */}
                  {isScanning && (
                    <div className="p-3 bg-amber-50 border border-amber-300 text-amber-900 rounded-2xl text-xs font-bold flex items-center gap-2 animate-pulse">
                      <Camera className="w-4 h-4 text-amber-600" />
                      <span>{scanMessage}</span>
                    </div>
                  )}

                  {/* Riwayat Absensi Riil dari Database */}
                  <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black uppercase text-slate-800">
                        Riwayat Presensi Tersimpan di Database
                      </h4>
                      <span className="text-[11px] font-bold text-emerald-600">
                        {dashboardData?.attendances?.length || 0} Hadir
                      </span>
                    </div>

                    <div className="space-y-2">
                      {dashboardData?.attendances?.map((rec: any) => (
                        <div key={rec.id} className="p-2.5 rounded-xl bg-[#fbfbf9] border border-slate-100 flex items-center justify-between text-xs">
                          <div>
                            <p className="font-bold text-slate-800">{rec.session_name}</p>
                            <p className="text-[10px] text-slate-400">{rec.scan_time} • {rec.room_name}</p>
                          </div>
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-100 text-emerald-800">
                            {rec.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: SERTIFIKAT SISWA */}
              {activeTab === 'certificate' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-5 bg-white rounded-3xl border border-amber-300 shadow-md space-y-4">
                    <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-500" />
                        <div>
                          <h4 className="text-xs font-black text-slate-900">Sertifikat Kelulusan Resmi</h4>
                          <p className="text-[10px] text-slate-400">Nomor: {dashboardData?.certificate?.cert_number || 'Dalam Proses'}</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded-lg">
                        Terverifikasi
                      </span>
                    </div>

                    <div className="space-y-1 text-center py-2">
                      <p className="text-[11px] text-slate-500">Diberikan kepada:</p>
                      <h4 className="text-base font-black text-slate-900">{student.name}</h4>
                      <p className="text-xs font-bold text-amber-800">{student.program_name}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
                        Keahlian Teruji:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {dashboardData?.certificate?.skills?.map((s: string, idx: number) => (
                          <span key={idx} className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200">
                            ✓ {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer">
                      <Download className="w-4 h-4" />
                      <span>Download E-Sertifikat (PDF)</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Bar Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 flex items-center justify-around z-20">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-2xl transition-all cursor-pointer ${
                  activeTab === 'home'
                    ? 'text-amber-600 font-black'
                    : 'text-slate-400 hover:text-slate-700 font-bold'
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="text-[10px]">Beranda</span>
              </button>

              <button
                onClick={() => setActiveTab('modules')}
                className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-2xl transition-all cursor-pointer ${
                  activeTab === 'modules'
                    ? 'text-amber-600 font-black'
                    : 'text-slate-400 hover:text-slate-700 font-bold'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span className="text-[10px]">Modul</span>
              </button>

              <button
                onClick={() => setActiveTab('attendance')}
                className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-2xl transition-all cursor-pointer ${
                  activeTab === 'attendance'
                    ? 'text-amber-600 font-black'
                    : 'text-slate-400 hover:text-slate-700 font-bold'
                }`}
              >
                <QrCode className="w-5 h-5" />
                <span className="text-[10px]">Presensi</span>
              </button>

              <button
                onClick={() => setActiveTab('certificate')}
                className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-2xl transition-all cursor-pointer ${
                  activeTab === 'certificate'
                    ? 'text-amber-600 font-black'
                    : 'text-slate-400 hover:text-slate-700 font-bold'
                }`}
              >
                <Award className="w-5 h-5" />
                <span className="text-[10px]">Sertifikat</span>
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
