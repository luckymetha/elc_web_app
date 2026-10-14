import React, { useState } from 'react';
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
  Download
} from 'lucide-react';
import type { StudentUser } from '../data/studentData';
import { MOCK_STUDENTS } from '../data/studentData';

interface StudentMobileAppProps {
  onBackToPortal: () => void;
}

export const StudentMobileApp: React.FC<StudentMobileAppProps> = ({ onBackToPortal }) => {
  // Demo selector untuk berganti siswa antar program (Inggris vs Komputer vs LPK)
  const [currentStudentId, setCurrentStudentId] = useState<string>('student-1');
  const [activeTab, setActiveTab] = useState<'home' | 'modules' | 'attendance' | 'certificate'>('home');
  const [selectedModule, setSelectedModule] = useState<any | null>(null);
  const [showScanSuccess, setShowScanSuccess] = useState(false);

  const student: StudentUser = MOCK_STUDENTS.find(s => s.id === currentStudentId) || MOCK_STUDENTS[0];

  const getProgramBadge = () => {
    switch (student.programCategory) {
      case 'english':
        return {
          label: '🇬🇧 Bahasa Inggris ELC',
          bg: 'bg-amber-500',
          gradient: 'from-amber-500 to-orange-500',
          accent: 'text-orange-600',
          lightBg: 'bg-amber-50 border-amber-200'
        };
      case 'computer':
        return {
          label: '💻 Digital Computer Academy',
          bg: 'bg-cyan-600',
          gradient: 'from-cyan-600 to-blue-600',
          accent: 'text-cyan-600',
          lightBg: 'bg-cyan-50 border-cyan-200'
        };
      case 'lpk':
        return {
          label: '🏢 LPK Vokasi & BNSP',
          bg: 'bg-emerald-600',
          gradient: 'from-emerald-600 to-teal-600',
          accent: 'text-emerald-600',
          lightBg: 'bg-emerald-50 border-emerald-200'
        };
    }
  };

  const badge = getProgramBadge();

  const handleSimulateQRScan = () => {
    setShowScanSuccess(true);
    setTimeout(() => setShowScanSuccess(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center p-2 sm:p-6 font-nunito">
      {/* Mobile Frame Container (Maksimal Lebar Seperti Layar Smartphone Asli) */}
      <div className="w-full max-w-md bg-[#fbfbf9] min-h-[840px] max-h-[92vh] rounded-[40px] shadow-2xl border-4 border-slate-700/80 flex flex-col overflow-hidden relative">
        
        {/* ======================================================== */}
        {/* 1. TOP MOBILE STATUS BAR & HEADER */}
        {/* ======================================================== */}
        <div className="bg-white border-b border-slate-200/80 px-5 pt-4 pb-3 flex flex-col gap-2">
          {/* Top Bar Switcher Demo Siswa & Back Button */}
          <div className="flex items-center justify-between text-xs">
            <button
              onClick={onBackToPortal}
              className="flex items-center gap-1 text-slate-500 hover:text-slate-900 font-bold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ke Web Portal</span>
            </button>

            {/* Switch Akun Siswa (Demo Fitur Perbedaan Program) */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-slate-400 font-bold hidden sm:inline">Simulasi Siswa:</span>
              <select
                value={currentStudentId}
                onChange={(e) => {
                  setCurrentStudentId(e.target.value);
                  setSelectedModule(null);
                }}
                className="text-[11px] font-black bg-amber-50 text-amber-900 px-2 py-1 rounded-xl border border-amber-300 focus:outline-none cursor-pointer"
              >
                <option value="student-1">Rizky (Bahasa Inggris)</option>
                <option value="student-2">Siti (Komputer Perkantoran)</option>
                <option value="student-3">Fajar (LPK Vokasi BNSP)</option>
              </select>
            </div>
          </div>

          {/* Student Profile Quick Banner */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <img
                src={student.avatar}
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
                  {student.studentIdNumber}
                </p>
              </div>
            </div>

            <span className={`px-2.5 py-1 rounded-xl text-[10px] font-black text-white bg-gradient-to-r ${badge.gradient} shadow-2xs`}>
              {student.programCategory.toUpperCase()}
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. DYNAMIC CONTENT AREA (SCROLLABLE MOBILE BODY) */}
        {/* ======================================================== */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20 scrollbar-none">
          
          {/* TAB 1: HOME (BERANDA SISWA) */}
          {activeTab === 'home' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              
              {/* Card Program Info Spesifik */}
              <div className={`p-4 rounded-3xl border ${badge.lightBg} shadow-xs space-y-2`}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-600">
                    Program Terdaftar
                  </span>
                  <span className="text-[11px] font-extrabold text-slate-500">
                    {student.classType}
                  </span>
                </div>
                <h4 className="text-base font-black text-slate-900 leading-snug">
                  {student.programName}
                </h4>
                <p className="text-xs text-slate-600 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{student.branch}</span>
                </p>

                {/* Progress Bar Sesi Belajar */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Progress Belajar: {student.completedSessions} dari {student.totalSessions} Sesi</span>
                    <span className={badge.accent}>{Math.round((student.completedSessions / student.totalSessions) * 100)}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${badge.gradient} rounded-full transition-all`}
                      style={{ width: `${(student.completedSessions / student.totalSessions) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Jadwal Kelas Berikutnya */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-slate-800 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span>Jadwal Kelas Terdekat</span>
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-lg">
                    Terkonfirmasi
                  </span>
                </div>

                <div className="p-3 bg-[#fbfbf9] rounded-2xl border border-slate-100 space-y-1.5">
                  <p className="text-xs font-black text-slate-900">
                    {student.nextSession.topic}
                  </p>
                  <p className="text-xs text-slate-600 font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{student.nextSession.day} • {student.nextSession.time}</span>
                  </p>
                  <p className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{student.nextSession.room}</span>
                  </p>
                  <p className="text-[11px] text-amber-900 font-bold pt-1">
                    Instruktur: {student.nextSession.instructor}
                  </p>
                </div>
              </div>

              {/* Ringkasan Presensi & Kehadiran */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs text-center">
                  <p className="text-2xl font-black text-emerald-600">{student.attendanceRate}%</p>
                  <p className="text-[11px] font-bold text-slate-500">Tingkat Kehadiran</p>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs text-center">
                  <p className="text-2xl font-black text-amber-600">{student.modules.filter(m => m.status === 'completed').length} / {student.modules.length}</p>
                  <p className="text-[11px] font-bold text-slate-500">Modul Selesai</p>
                </div>
              </div>

              {/* Quick Actions Bar */}
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

          {/* TAB 2: MODUL PEMBELAJARAN (SPESIFIK SESUAI KELAS) */}
          {activeTab === 'modules' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-1">
                <div>
                  <h3 className="text-base font-black text-slate-900">Materi & Tugas Belajar</h3>
                  <p className="text-xs text-slate-500 font-semibold">{student.programName}</p>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  {student.modules.length} Modul
                </span>
              </div>

              {/* List Modul Belajar */}
              <div className="space-y-2.5">
                {student.modules.map((mod, idx) => (
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
                            : mod.status === 'in_progress'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-slate-200 text-slate-400'
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

              {/* Modal / Preview Detail Materi yang Diklik */}
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
                    Materi ini dapat diakses untuk latihan mandiri sebelum jadwal pertemuan tatap muka di ELC.
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer">
                      <PlayCircle className="w-4 h-4" />
                      <span>Mulai Latihan</span>
                    </button>
                    <button className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 cursor-pointer">
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: PRESENSI & KARTU DIGITAL SISWA */}
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
                    <p className="text-xs text-slate-300 font-mono font-bold">{student.studentIdNumber}</p>
                    <p className="text-[10px] text-amber-200 font-semibold">{student.programName}</p>
                  </div>

                  {/* QR Code Presensi */}
                  <div 
                    onClick={handleSimulateQRScan}
                    className="p-2 bg-white rounded-2xl shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-transform flex flex-col items-center"
                    title="Klik untuk simulasi scan absensi"
                  >
                    <QrCode className="w-16 h-16 text-slate-900" />
                    <span className="text-[8px] text-slate-500 font-bold mt-0.5">Tap Absen</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Cabang: {student.branch.split('(')[0]}</span>
                  <span>Disnaker & Disdik Jabar</span>
                </div>
              </div>

              {/* Notifikasi Sukses Scan Absen */}
              {showScanSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-2xl text-xs font-bold flex items-center gap-2 animate-in zoom-in-95">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Presensi Berhasil Terverifikasi di Lab / Kelas ELC!</span>
                </div>
              )}

              {/* Riwayat Kehadiran Terakhir */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase text-slate-800">
                    Riwayat Kehadiran (4 Sesi Terakhir)
                  </h4>
                  <span className="text-[11px] font-bold text-emerald-600">
                    {student.attendanceRate}% Hadir
                  </span>
                </div>

                <div className="space-y-2">
                  {student.recentAttendance.map((rec, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-[#fbfbf9] border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-slate-800">{rec.sessionName}</p>
                        <p className="text-[10px] text-slate-400">{rec.date} • {rec.time}</p>
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

          {/* TAB 4: SERTIFIKAT & PENCAPAIAN KOMPETENSI */}
          {activeTab === 'certificate' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="text-center space-y-1">
                <span className="text-[11px] font-black uppercase text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 inline-block">
                  Dokumen Kelulusan Digital
                </span>
                <h3 className="text-base font-black text-slate-900">
                  Sertifikat Kompetensi Siswa
                </h3>
              </div>

              {/* Sertifikat Card Preview */}
              <div className="p-5 bg-white rounded-3xl border border-amber-300 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <div>
                      <h4 className="text-xs font-black text-slate-900">Sertifikat Kelulusan Resmi</h4>
                      <p className="text-[10px] text-slate-400">Nomor: {student.certificate?.certNumber}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded-lg">
                    Terverifikasi
                  </span>
                </div>

                <div className="space-y-1 text-center py-2">
                  <p className="text-[11px] text-slate-500">Diberikan kepada:</p>
                  <h4 className="text-base font-black text-slate-900">{student.name}</h4>
                  <p className="text-xs font-bold text-amber-800">{student.programName}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
                    Keahlian yang Diakui:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {student.certificate?.skills.map((s, idx) => (
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

        {/* ======================================================== */}
        {/* 3. BOTTOM MOBILE NAVIGATION BAR */}
        {/* ======================================================== */}
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

      </div>
    </div>
  );
};
