import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="6" width="20" height="12" rx="4" ry="4"></rect>
            <path d="M6 12h4"></path>
            <path d="M8 10v4"></path>
            <line x1="15" y1="13" x2="15.01" y2="13"></line>
            <line x1="18" y1="11" x2="18.01" y2="11"></line>
          </svg>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            <span className="text-blue-600">Gamepad</span> Tester
          </h1>
        </Link>
        <div className="text-sm text-slate-500 font-mono hidden sm:block" id="global-status-react">
          {/* We'll pass connected count from parent later, or use global state */}
        </div>
      </div>
    </nav>
  );
}
