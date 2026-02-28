import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-500 text-sm mb-2">&copy; 2026 Gamepad Tester. Built for gamers.</p>
            <div className="text-xs text-slate-400 space-x-4">
                <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>
        </div>
    </footer>
  );
}
