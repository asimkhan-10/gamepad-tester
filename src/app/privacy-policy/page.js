import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy | Gamepad Tester',
  description: 'Our privacy policy explains how we collect and use your data. (Spoiler: We basically don\'t).',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16 w-full min-h-[70vh] text-slate-600">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="space-y-6">
            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                    The short answer is: <strong>We don't collect any of your personal data.</strong> 
                </p>
                <p>
                    Gamepad Tester is a client-side application. This means all of the processing, button mapping, and analyzing happens directly in your browser. We do not transmit your controller serial numbers, usage data, or diagnostic results to any remote server.
                </p>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Local Storage and Cookies</h2>
                <p className="mb-4">
                    We currently do not use cookies or local storage to track you across sessions. If we add features to save settings (like a dark mode preference) in the future, it will be stored purely in your browser's local storage and will never be sent to us.
                </p>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Third-Party Services</h2>
                <p className="mb-4">
                    Our website may use standard web analytics (like Google Analytics or Vercel Analytics) strictly for monitoring aggregated page views and site performance. These tools collect basic, non-identifying information such as your browser type, screen resolution, and referring URL.
                </p>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Changes to This Policy</h2>
                <p>
                    We may occasionally update this Privacy Policy. If we make significant changes, we will post a prominent notice on the website. Because we process no personal data, changes will generally only pertain to new functionality.
                </p>
            </section>

            <p className="text-sm text-slate-400 mt-12">Last Updated: February 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
