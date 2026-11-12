import { useState } from 'react';
import { ArrowUpRight, Lock, Menu, User, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenRegisterModal: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Beranda' },
  { id: 'english', label: 'Bahasa Inggris' },
  { id: 'computer', label: 'Komputer & IT' },
  { id: 'lpk', label: 'LPK BNSP' },
  { id: 'verification', label: 'Cek Sertifikat' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab, onOpenRegisterModal }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    onSelectTab(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Monogram */}
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 text-left cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-white font-bold text-base tracking-wider group-hover:bg-[#14335c] transition-colors">
            ELC
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-tight text-[#0B1F3A]">
                ELC Indonesia
              </span>
              <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-500 border-l border-slate-300 pl-2">
                Est. 1992
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
              English Lovers Club • Komputer • LPK Ciparay
            </p>
          </div>
        </button>

        {/* Desktop Clean Text Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`relative py-2 text-[13px] font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#0B1F3A]'
                    : 'text-slate-600 hover:text-[#0B1F3A]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C81E1E] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Utility & CTA */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => handleNav('mobile-app')}
            title="Login Portal Siswa (/siswa)"
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'mobile-app'
                ? 'bg-slate-100 text-[#0B1F3A]'
                : 'text-slate-600 hover:text-[#0B1F3A] hover:bg-slate-50'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Portal Siswa</span>
          </button>

          <button
            type="button"
            onClick={() => handleNav('backoffice')}
            title="Login Backoffice Admin (/admin)"
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'backoffice'
                ? 'bg-slate-100 text-[#0B1F3A]'
                : 'text-slate-500 hover:text-[#0B1F3A] hover:bg-slate-50'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Admin</span>
          </button>

          <div className="w-px h-5 bg-slate-200 mx-1" />

          <button
            type="button"
            onClick={onOpenRegisterModal}
            className="px-4 py-2.5 rounded-lg bg-[#0B1F3A] hover:bg-[#14335c] text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Daftar Program</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold cursor-pointer ${
                activeTab === item.id
                  ? 'bg-slate-100 text-[#0B1F3A]'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleNav('mobile-app')}
              className="px-3 py-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <User className="w-3.5 h-3.5" />
              <span>Portal Siswa</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav('backoffice')}
              className="px-3 py-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Login Admin</span>
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenRegisterModal();
            }}
            className="w-full py-3 rounded-lg bg-[#0B1F3A] text-white text-xs font-semibold cursor-pointer"
          >
            Daftar Program Sekarang
          </button>
        </div>
      )}
    </header>
  );
};
