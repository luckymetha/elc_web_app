import { ArrowRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenRegisterModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab, onOpenRegisterModal }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#fbfbf9]/90 border-b border-amber-200/60 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Warm Cheerful Look */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onSelectTab('english')}>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center shadow-md shadow-orange-500/25 ring-4 ring-amber-100 group-hover:scale-105 transition-transform">
            <span className="font-black text-2xl text-white tracking-wider font-nunito">ELC</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-slate-900 font-nunito">ELC CIPARAY</span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 text-[11px] font-extrabold bg-amber-100 text-amber-800 rounded-full border border-amber-300">
                Est. 1992
              </span>
            </div>
            <p className="text-xs text-slate-500 font-semibold hidden sm:block">
              English Lovers Club • Komputer • LPK Bina Mandiri
            </p>
          </div>
        </div>

        {/* Dynamic Category Switcher with Rounded Pill Theme */}
        <nav className="hidden md:flex items-center p-1.5 bg-amber-100/60 rounded-2xl border border-amber-200/80 shadow-inner">
          <button
            onClick={() => onSelectTab('english')}
            className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTab === 'english'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <span>🇬🇧</span>
            <span>Bahasa Inggris</span>
          </button>

          <button
            onClick={() => onSelectTab('computer')}
            className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTab === 'computer'
                ? 'bg-white text-emerald-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <span>💻</span>
            <span>Komputer & IT</span>
          </button>

          <button
            onClick={() => onSelectTab('lpk')}
            className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTab === 'lpk'
                ? 'bg-white text-amber-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <span>🏢</span>
            <span>LPK BNSP</span>
          </button>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20ELC,%20saya%20ingin%20tanya%20program%20pelatihan"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 px-3.5 py-2.5 rounded-xl border border-amber-200 hover:border-amber-300 bg-white transition-colors shadow-2xs"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
            <span>022-5959930</span>
          </a>

          <button
            onClick={onOpenRegisterModal}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white text-xs font-black shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>Daftar Sekarang</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
