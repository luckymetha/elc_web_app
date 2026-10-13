import React, { useState } from 'react';
import { MessageCircle, X, MapPin, Send, Sparkles } from 'lucide-react';

const ELC_ADMIN_WA = '6281234567890';

const QUICK_TOPICS = [
  'Info biaya & jadwal kursus Bahasa Inggris',
  'Info kursus Komputer Perkantoran & Desain',
  'Pendaftaran LPK & Sertifikasi BNSP',
  'Lokasi Kampus Pusat Ciparay & Cabang Pacet'
];

export const FloatingWhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<'Ciparay (Pusat)' | 'Pacet (Cabang)'>('Ciparay (Pusat)');

  const handleSendTopic = (topic: string) => {
    const message = `Halo Admin ELC (${selectedBranch}), saya ingin bertanya mengenai: *${topic}*. Mohon informasinya, terima kasih!`;
    const url = `https://wa.me/${ELC_ADMIN_WA}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-nunito flex flex-col items-end">
      {/* Popup Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl border border-emerald-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center font-black text-base">
                ELC
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-black text-sm">Admin Konsultasi ELC</h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                </div>
                <p className="text-[11px] text-emerald-100 font-semibold">
                  Respon Cepat • WhatsApp Gratis
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#fbfbf9]">
            {/* Branch Selector */}
            <div>
              <label className="block text-[11px] font-extrabold uppercase text-slate-500 mb-1.5">
                Pilih Cabang Terdekat:
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['Ciparay (Pusat)', 'Pacet (Cabang)'] as const).map((branch) => (
                  <button
                    key={branch}
                    type="button"
                    onClick={() => setSelectedBranch(branch)}
                    className={`py-1.5 px-2.5 rounded-xl text-xs font-extrabold border flex items-center justify-center gap-1 cursor-pointer transition-all ${
                      selectedBranch === branch
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-emerald-50'
                    }`}
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{branch}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Questions */}
            <div className="space-y-1.5">
              <span className="block text-[11px] font-extrabold uppercase text-slate-500">
                Klik Topik Pertanyaan Cepat:
              </span>
              {QUICK_TOPICS.map((topic, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendTopic(topic)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-300 text-xs font-bold text-slate-700 hover:text-emerald-900 flex items-center justify-between group cursor-pointer transition-all shadow-2xs"
                >
                  <span className="pr-2">{topic}</span>
                  <Send className="w-3.5 h-3.5 text-emerald-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>

            {/* Direct Blank Chat */}
            <button
              type="button"
              onClick={() => handleSendTopic('Konsultasi Umum Program Kursus ELC')}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 cursor-pointer transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chat Langsung dengan Admin</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-black text-xs sm:text-sm shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer ring-4 ring-emerald-100"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-300 animate-ping" />
        </div>
        <span>Tanya Admin WA (Gratis)</span>
      </button>
    </div>
  );
};
