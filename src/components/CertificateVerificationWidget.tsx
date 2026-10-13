import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle, Search } from 'lucide-react';

interface CertificateRecord {
  id: string;
  studentName: string;
  program: string;
  gradYear: string;
  certNumber: string;
  accreditation: string;
  status: 'TERVERIFIKASI ASLI' | 'DALAM PROSES';
}

const SAMPLE_DATABASE: CertificateRecord[] = [
  {
    id: 'ELC-ENG-1997-042',
    studentName: 'Ahmad Faisal, S.Pd',
    program: 'English Intensive Conversation & Grammar',
    gradYear: '1997',
    certNumber: 'NO: 421/ELC/ENG/1997',
    accreditation: 'Depdikbud / Disdik Kab. Bandung',
    status: 'TERVERIFIKASI ASLI'
  },
  {
    id: 'ELC-COM-2023-108',
    studentName: 'Siti Nurhaliza',
    program: 'Komputer Aplikasi Perkantoran & Excel Mahir',
    gradYear: '2023',
    certNumber: 'NO: 088/LKP-ELC/KOMP/2023',
    accreditation: 'SKKNI Disnaker Kab. Bandung',
    status: 'TERVERIFIKASI ASLI'
  },
  {
    id: 'ELC-LPK-2024-075',
    studentName: 'Rian Hidayat',
    program: 'Pelatihan Vokasi Administrasi Bisnis BNSP',
    gradYear: '2024',
    certNumber: 'BNSP-REG-563/ELC-LPK/2024',
    accreditation: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    status: 'TERVERIFIKASI ASLI'
  }
];

export const CertificateVerificationWidget: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<CertificateRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.trim().toLowerCase();
    const found = SAMPLE_DATABASE.find(
      (item) =>
        item.id.toLowerCase().includes(query) ||
        item.studentName.toLowerCase().includes(query) ||
        item.certNumber.toLowerCase().includes(query)
    );

    setSearchResult(found || null);
    setHasSearched(true);
  };

  const handleQuickPick = (sampleId: string) => {
    setSearchQuery(sampleId);
    const found = SAMPLE_DATABASE.find((item) => item.id === sampleId);
    setSearchResult(found || null);
    setHasSearched(true);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            Portal Alumni & Legalitas Resmi
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Cek Keaslian E-Sertifikat Alumni ELC & LPK</span>
          </h3>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Database Izin Disnaker sejak 1994 & Disdik 2004
        </span>
      </div>

      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ketik Nomor Sertifikat atau Nama Alumni (contoh: Siti Nurhaliza atau ELC-ENG-1997-042)..."
              className="w-full px-4 py-3 pl-10 rounded-2xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Verifikasi Data</span>
          </button>
        </div>
      </form>

      {/* Quick click suggestions */}
      <div className="flex flex-wrap items-center gap-2 text-xs mb-6">
        <span className="text-slate-400">Contoh cek cepat:</span>
        <button
          onClick={() => handleQuickPick('ELC-ENG-1997-042')}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] cursor-pointer"
        >
          Alumni 1997 (Ahmad Faisal)
        </button>
        <button
          onClick={() => handleQuickPick('ELC-COM-2023-108')}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] cursor-pointer"
        >
          Alumni Komputer (Siti Nurhaliza)
        </button>
        <button
          onClick={() => handleQuickPick('ELC-LPK-2024-075')}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] cursor-pointer"
        >
          Alumni BNSP (Rian Hidayat)
        </button>
      </div>

      <AnimatePresence>
        {hasSearched && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {searchResult ? (
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600 text-white uppercase tracking-wider">
                        {searchResult.status}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {searchResult.certNumber}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 mt-1">
                      {searchResult.studentName}
                    </h4>
                    <p className="text-xs text-slate-600">
                      Program: <strong>{searchResult.program}</strong> (Tahun Kelulusan: {searchResult.gradYear})
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Standar Akreditasi: {searchResult.accreditation}
                    </p>
                  </div>
                </div>

                <div className="text-right sm:self-center w-full sm:w-auto">
                  <span className="text-[11px] font-semibold text-emerald-800 bg-white border border-emerald-200 px-3 py-1.5 rounded-xl block sm:inline-block">
                    ✓ Sah & Terdaftar Resmi
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center text-xs text-amber-800">
                Data nomor sertifikat tidak ditemukan di database sampel online. Untuk verifikasi arsip fisik alumni lama, silakan hubungi kantor ELC di <strong>022-5959930</strong>.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
