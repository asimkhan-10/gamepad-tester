import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms of Service | Gamepad Tester',
  description: 'Our terms of service outline the rules for using Gamepad Tester.',
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16 w-full min-h-[70vh] text-slate-600">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="space-y-6">
            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing and using Gamepad Tester (the "Service"), you accept and agree to be bound by the terms and provisions of this agreement.
                </p>
                <p>
                    If you do not agree to abide by these Terms, please do not use this site.
                </p>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Description of Service</h2>
                <p className="mb-4">
                    Gamepad Tester provides a web-based utility for checking controller button inputs, analog stick drift, and haptic feedback. We provide this tool "As Is" without any warranties of absolute precision. While we use standard browser APIs to read input, hardware defects or driver issues on your local device may affect the results.
                </p>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Prohibited Uses</h2>
                <p className="mb-4">
                    You agree not to use the Service to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Attempt to hack, reverse-engineer, or maliciously overload our servers.</li>
                    <li>Scrape our data or visual assets for commercial resale.</li>
                    <li>Violate any local, state, national, or international law while using the tool.</li>
                </ul>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Open Source and Liability</h2>
                <p>
                    Gamepad Tester is provided free of charge. In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use the Service. We are not responsible for bricked controllers, damaged USB ports, or any hardware failure that occurs while or after using our site.
                </p>
            </section>

            <p className="text-sm text-slate-400 mt-12">Last Updated: February 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
