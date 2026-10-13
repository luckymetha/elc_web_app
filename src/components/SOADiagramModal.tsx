import React, { useState } from 'react';
import { Server, Database, Globe, Zap } from 'lucide-react';

export const SOADiagramModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  const [selectedService, setSelectedService] = useState<'auth' | 'course' | 'lpk' | 'payment'>('course');

  if (!isOpen) return null;

  const services = [
    {
      id: 'course',
      name: 'Course Catalog & Class Service',
      desc: 'Mengelola jadwal kelas Bahasa Inggris, modul lab komputer, dan materi kurikulum.',
      endpoint: '/api/v1/courses',
      badge: 'Microservice'
    },
    {
      id: 'lpk',
      name: 'LPK & BNSP Certification Service',
      desc: 'Mengelola data peserta magang, kelulusan SKKNI, sertifikat kompetensi BNSP, & penyaluran kerja mitra.',
      endpoint: '/api/v1/lpk-vocational',
      badge: 'Microservice'
    },
    {
      id: 'auth',
      name: 'User Identity & Auth Service',
      desc: 'Single Sign-On (SSO) untuk Siswa, Pengajar, Admin, dan Mitra Perusahaan.',
      endpoint: '/api/v1/auth',
      badge: 'Core Service'
    },
    {
      id: 'payment',
      name: 'Payment & Billing Gateway',
      desc: 'Integrasi otomatis Midtrans/Xendit untuk pembayaran SPP bulanan, biaya ujian & kwitansi digital.',
      endpoint: '/api/v1/billing',
      badge: 'Financial Service'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-white">Arsitektur SOA (Service-Oriented Architecture)</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Bagaimana modul Web, Mobile App, dan sistem LPK ELC saling terhubung secara modular & independen.
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl cursor-pointer"
          >
            Tutup
          </button>
        </div>

        {/* Architecture Flow */}
        <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Layer 1: Clients */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1 mb-2">
              <Globe className="w-3.5 h-3.5" /> Client Applications
            </span>
            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
                🌐 <strong>Web Portal ELC</strong> (Next.js / React)
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
                📱 <strong>Mobile Student App</strong> (Flutter/React Native)
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
                💼 <strong>Admin & LPK Portal</strong> (Backoffice Dashboard)
              </div>
            </div>
            <span className="text-[10px] text-slate-500 mt-2 block">Klien memanggil API gateway</span>
          </div>

          {/* Layer 2: API Gateway */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-indigo-500/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-[10px] font-bold rounded-bl-lg">
              Hub SOA
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1 mb-2">
              <Zap className="w-3.5 h-3.5" /> API Gateway & Router
            </span>
            <div className="text-slate-400 space-y-2 text-[11px] leading-relaxed">
              <p>Menerima request dari Web & Mobile, mengamankan token JWT, dan meneruskan ke service terkait.</p>
              <div className="p-2 bg-indigo-950/40 border border-indigo-800/40 rounded-lg text-indigo-300 font-mono text-[10px]">
                REST API / GraphQL Gateway
              </div>
            </div>
            <span className="text-[10px] text-slate-500 mt-2 block">Zero downtime per service</span>
          </div>

          {/* Layer 3: Independent Services */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1 mb-2">
              <Database className="w-3.5 h-3.5" /> Microservices & DB
            </span>
            <div className="space-y-1.5">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id as any)}
                  className={`w-full text-left p-2 rounded-lg border text-[11px] transition-all cursor-pointer ${
                    selectedService === s.id
                      ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
            <span className="text-[10px] text-slate-500 mt-2 block">Database PostgreSQL / Cloud DB</span>
          </div>
        </div>

        {/* Selected Service Detail */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-white">
              Detail Service:{' '}
              <span className="text-indigo-400">
                {services.find((s) => s.id === selectedService)?.name}
              </span>
            </span>
            <span className="font-mono text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              {services.find((s) => s.id === selectedService)?.endpoint}
            </span>
          </div>
          <p className="text-slate-400">
            {services.find((s) => s.id === selectedService)?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};
