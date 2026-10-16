import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

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
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onSelectTab('home')}>
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

        {/* Clean Multi-Page Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-amber-100/60 rounded-2xl border border-amber-200/80 shadow-xs">
          <button
            onClick={() => onSelectTab('home')}
            className={`px-3.5 py-2 text-xs font-black rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'home'
                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-amber-300'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <span>Beranda</span>
          </button>

          <button
            onClick={() => onSelectTab('english')}
            className={`px-3.5 py-2 text-xs font-black rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'english'
                ? 'bg-white text-orange-600 shadow-sm ring-1 ring-amber-300'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <span>🇬🇧</span>
            <span>Bahasa Inggris</span>
          </button>

          <button
            onClick={() => onSelectTab('computer')}
            className={`px-3.5 py-2 text-xs font-black rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'computer'
                ? 'bg-white text-cyan-700 shadow-sm ring-1 ring-amber-300'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <span>💻</span>
            <span>Komputer & IT</span>
          </button>

          <button
            onClick={() => onSelectTab('lpk')}
            className={`px-3.5 py-2 text-xs font-black rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'lpk'
                ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-amber-300'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <span>🏢</span>
            <span>LPK BNSP</span>
          </button>

          <button
            onClick={() => onSelectTab('verification')}
            className={`px-3 py-2 text-xs font-extrabold rounded-xl transition-all duration-200 flex items-center gap-1 cursor-pointer ${
              activeTab === 'verification'
                ? 'bg-white text-amber-800 shadow-sm ring-1 ring-amber-300'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <span>🔍</span>
            <span>Cek Sertifikat</span>
          </button>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20ELC,%20saya%20ingin%20tanya%20program%20pelatihan"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-xl border border-amber-200 hover:border-amber-300 bg-white transition-colors shadow-2xs"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
            <span>022-5959930</span>
          </a>

          <button
            onClick={() => onSelectTab('backoffice')}
            title="Buka Login Backoffice Admin (/admin)"
            className={`px-3 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'backoffice'
                ? 'bg-indigo-900 text-white shadow-md ring-2 ring-indigo-400'
                : 'bg-indigo-50/80 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 shadow-2xs'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">Login</span>
            <span>Admin</span>
          </button>

          <button
            onClick={() => onSelectTab('mobile-app')}
            title="Buka Login Portal Siswa & Mobile App (/siswa)"
            className={`px-3 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'mobile-app'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white hover:bg-amber-50 text-slate-800 border border-amber-300 shadow-2xs'
            }`}
          >
            <span>📱</span>
            <span className="hidden sm:inline">Login</span>
            <span>Siswa</span>
          </button>

          <button
            onClick={onOpenRegisterModal}
            className="px-4 sm:px-5 py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white text-xs font-black shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 transition-all flex items-center gap-1.5 sm:gap-2 group cursor-pointer"
          >
            <span>Daftar</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};

