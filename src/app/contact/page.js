'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('ideal'); // ideal, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Mock API call
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16 w-full min-h-[70vh] text-slate-600">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
        <p className="mb-12 text-slate-500 max-w-xl">
            Having an issue with the tester? Have a feature request for a new controller? Or maybe you just want to say hi! Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl max-w-xl">
            {status === 'success' ? (
                <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h2>
                    <p className="text-slate-500 mb-6">Thanks for reaching out. We will read your message and get back to you shortly.</p>
                    <button onClick={() => setStatus('ideal')} className="text-blue-600 hover:text-blue-700 font-semibold px-4 py-2 border border-blue-200 rounded-lg shadow-sm">Send another message</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" 
                            placeholder="John Doe" 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" 
                            placeholder="john@example.com" 
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                        <textarea 
                            id="message" 
                            rows="5"
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none" 
                            placeholder="How can we help?"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        disabled={status === 'sending'}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-50 flex justify-center items-center gap-2"
                    >
                        {status === 'sending' ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : 'Send Message'}
                    </button>
                    {status === 'error' && (
                        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                    )}
                </form>
            )}
        </section>
      </main>
      <Footer />
    </>
  );
}
