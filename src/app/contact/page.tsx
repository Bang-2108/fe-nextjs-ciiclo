'use client';

import React, { useState, useEffect } from 'react';
import { portfolioService } from '@/services/portfolio';
import { Profile } from '@/types';

export default function ContactPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; msg: string } | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await portfolioService.getProfile();
        setProfile(data);
      } catch (err) {
        console.error('Failed to load profile for contact page:', err);
      }
    };
    loadProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      await portfolioService.sendContactMessage({
        ...form,
        subject: 'Contact from Portfolio Website'
      });
      setStatus({ success: true, msg: 'Tin nhắn đã được gửi thành công!' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ success: false, msg: 'Gửi tin nhắn thất bại. Vui lòng thử lại!' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewCV = () => {
    if (profile?.cv_path) {
      window.open(profile.cv_path, '_blank');
    } else {
      alert('The CV is currently being updated!');
    }
  };

  const emailData = (profile as any)?.email || 'zoanthibang@gmail.com';
  const githubLink = 'https://github.com/Bang-2108/';
  const linkedinLink = 'https://www.linkedin.com/in/zo%C3%A3n-th%E1%BB%8B-b%C4%83ng-v135798642/';

  return (
    <div className="min-h-screen bg-black text-white p-6 pt-28 flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          Get In <span className="text-pink-400">Touch</span>
        </h1>
        <p className="text-gray-400 font-medium">Let's work together!</p>
      </div>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div className="md:col-span-7 bg-[#111827]/60 border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col h-full">
          <h2 className="text-xl font-bold text-white mb-4">Send a Message</h2>
          {status && (
            <div className={`p-3.5 rounded-xl text-center text-xs font-semibold border mb-4 ${
              status.success ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}>
              {status.msg}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
              <input 
                type="text" required value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <input 
                type="email" required value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500/50 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="flex-1 flex flex-col min-h-[160px]">
              <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
              <textarea 
                required value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                className="w-full flex-1 bg-[#1f2937]/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500/50 transition-colors resize-none leading-relaxed"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit" disabled={isSubmitting}
              className="w-full bg-pink-400 hover:bg-pink-500 disabled:opacity-50 text-black font-bold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-500/5 cursor-pointer mt-2"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
              ) : (
                <>
                  <i className="bi bi-send-fill text-xs"></i> Send Message
                </>
              )}
            </button>
          </form>
        </div>
        <div className="md:col-span-5 flex flex-col gap-6 justify-between">
          <div className="bg-[#111827]/60 border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl space-y-6 flex-1">
            <h2 className="text-xl font-bold text-white">Contact Information</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="text-pink-400 text-xl pt-0.5">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Email</div>
                  <a href={`mailto:${emailData}`} className="text-sm text-gray-200 hover:text-white hover:underline transition-colors">{emailData}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-pink-400 text-xl pt-0.5">
                  <i className="bi bi-github"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">GitHub</div>
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-200 hover:text-white hover:underline transition-colors">
                    Bang-2108
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-pink-400 text-xl pt-0.5">
                  <i className="bi bi-linkedin"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">LinkedIn</div>
                  <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-200 hover:text-white hover:underline transition-colors">
                    Zoãn Thị Băng
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-pink-400 text-xl pt-0.5">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Location</div>
                  <div className="text-sm text-gray-200">Vietnam</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#111827]/40 border border-pink-500/10 rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
            <h2 className="text-lg font-bold text-white">View Curriculum Vitae</h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Open my resume in a new tab to review my technical background and learning history.
            </p>
            <button 
              onClick={handleViewCV}
              className="bg-pink-400/20 text-pink-400 hover:bg-pink-400 hover:text-black border border-pink-400/30 text-xs font-bold px-5 py-3 rounded-xl transition-all flex items-center gap-2 cursor-pointer w-full justify-center md:w-auto"
            >
              <i className="bi bi-box-arrow-up-right"></i> View CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}