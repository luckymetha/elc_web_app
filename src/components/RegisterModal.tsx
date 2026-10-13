import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

// Nomor WA Admin ELC (Format Internasional tanpa + atau 0 di depan)
const ELC_ADMIN_WA = '6281234567890';

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = 'English Lovers Club (ELC)'
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'Kampus Pusat Ciparay (Jl. Raya Pacet No. 45)',
    program: defaultProgram,
    classType: 'Reguler',
    notes: ''
  });

  useEffect(() => {
    if (defaultProgram) {
      setFormData((prev) => ({ ...prev, program: defaultProgram }));
    }
  }, [defaultProgram]);

  if (!isOpen) return null;

  const generateWhatsAppUrl = () => {
    const messageLines = [
      `Halo Admin *LKP & LPK ELC Ciparay*, saya ingin mendaftar / konsultasi kursus:`,
      ``,
      `• *Nama Lengkap:* ${formData.name}`,
      `• *No. WhatsApp:* ${formData.phone}`,
      `• *Program Pilihan:* ${formData.program}`,
      `• *Tipe Kelas:* ${formData.classType}`,
      `• *Lokasi Cabang:* ${formData.branch}`,
      formData.notes ? `• *Catatan Tambahan:* ${formData.notes}` : null,
      ``,
      `Mohon informasi jadwal kelas terdekat dan rincian biayanya. Terima kasih!`
    ].filter(Boolean);

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    return `https://wa.me/${ELC_ADMIN_WA}?text=${encodedText}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = generateWhatsAppUrl();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm font-nunito">
      <div className="relative w-full max-w-lg bg-white border border-amber-200 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-xl bg-slate-100 hover:bg-amber-100 cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Mengalihkan ke WhatsApp...</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Terima kasih, <span className="text-slate-900 font-bold">{formData.name}</span>! Format pendaftaran Anda telah disiapkan secara otomatis. Silakan klik tombol <strong>Kirim (Send)</strong> di aplikasi WhatsApp Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Buka Ulang WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer transition-colors"
              >
                Selesai & Tutup
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-black flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>Direct WhatsApp • Respon Cepat & Gratis</span>
              </span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-1">Formulir Pendaftaran Siswa</h3>
            <p className="text-xs text-slate-500 mb-5 font-semibold">
              Isi data singkat di bawah ini, sistem akan langsung menghubungkan Anda ke WhatsApp Admin ELC tanpa biaya tambahan.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-800 font-bold mb-1">Nama Lengkap Siswa *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Pratama"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-800 font-bold mb-1">Nomor WhatsApp Aktif *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 0812xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-bold mb-1">Pilih Lokasi Cabang Belajar</label>
                <div className="relative">
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-amber-50/60 border border-amber-300 text-slate-900 font-bold focus:outline-none focus:border-amber-500 focus:bg-white"
                  >
                    <option value="Kampus Pusat Ciparay (Jl. Raya Pacet No. 45)">
                      📍 Kampus Pusat Ciparay (Jl. Raya Pacet - Cikoneng No. 45)
                    </option>
                    <option value="Cabang Pacet (Jalancagak, Desa Maruyung)">
                      📍 Cabang Pacet (Jalancagak, Desa Maruyung)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-bold mb-1">Pilihan Program Pelatihan</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-bold focus:outline-none focus:border-amber-500 focus:bg-white"
                >
                  <option value="English Lovers Club (ELC) - Bahasa Inggris">English Lovers Club (ELC) - Bahasa Inggris</option>
                  <option value="English for Kids & Teens (SD - SMP)">English for Kids & Teens (SD - SMP)</option>
                  <option value="Active Conversation & TOEFL Prep">Active Conversation & TOEFL Prep (SMA/Umum)</option>
                  <option value="Aplikasi Perkantoran (MS Word, Excel, PowerPoint)">Komputer Aplikasi Perkantoran (Word, Excel, PPT)</option>
                  <option value="Desain Grafis (CorelDraw & Photoshop)">Desain Grafis Terapan (CorelDraw & Photoshop)</option>
                  <option value="LPK Vokasi Kerja & Sertifikasi BNSP">LPK Vokasi Siap Kerja & Sertifikasi BNSP</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-800 font-bold mb-1">Tipe Kelas yang Diminati</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Reguler', 'Privat Intensif', 'Kolektif / Instansi'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, classType: type })}
                      className={`py-2 px-2 text-center rounded-xl border font-bold cursor-pointer transition-all ${
                        formData.classType === type
                          ? 'border-amber-500 bg-amber-100 text-amber-950 shadow-2xs'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-bold mb-1">Pertanyaan / Catatan Jadwal (Opsional)</label>
                <input
                  type="text"
                  placeholder="Misal: Ingin jadwal sore sepulang sekolah / kerja"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:brightness-105 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/25 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Pendaftaran ke WhatsApp Admin (Gratis)</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

