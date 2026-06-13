import React, { useState } from 'react';
import { Wrench, Eye, EyeOff, LogIn } from 'lucide-react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function AdminLogin({ onLogin }) {
  const [form, setForm]   = useState({ email: '', password: '' });
  const [show, setShow]   = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async e => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res  = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success && data.token) {
        localStorage.setItem('ht_token', data.token);
        localStorage.setItem('ht_admin', JSON.stringify(data.user || {}));
        onLogin();
      } else {
        setError(data.message || 'Invalid credentials. Please try again.');
      }
    } catch {
      setError('Unable to connect to server. Ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#081018]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#60A5FA] text-[#081018]">
            <Wrench size={22} strokeWidth={2.2} />
          </div>
          <h1 className="text-[1.4rem] font-black tracking-tight text-white">
            HARDIK <span className="text-[#60A5FA]">TRADERS</span>
          </h1>
          <p className="text-[12.5px] mt-1 text-white/50">Admin CRM Portal</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-7 bg-[#101827] border border-white/10 shadow-2xl">
          <h2 className="font-black text-[15px] mb-1 text-white">Sign In</h2>
          <p className="text-[12.5px] mb-6 text-white/50">Access the lead management dashboard</p>

          {error && (
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg mb-4 text-[12.5px] font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400">
              ⚠ {error}
            </div>
          )}

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-[11.5px] font-bold uppercase tracking-widest mb-1.5 text-white/40">Email</label>
              <input
                type="email" required
                value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="admin@hardiktraders.com"
                className="w-full px-3.5 py-2.5 rounded-lg text-[13.5px] bg-[#081018] border border-white/10 text-white outline-none transition-all focus:border-[#60A5FA]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
            <div>
              <label className="block text-[11.5px] font-bold uppercase tracking-widest mb-1.5 text-white/40">Password</label>
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'} required
                  value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-lg text-[13.5px] bg-[#081018] border border-white/10 text-white outline-none transition-all pr-10 focus:border-[#60A5FA]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-white/40 hover:text-white transition-colors">
                  {show ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
            <button
              type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-[13.5px] text-[#081018] bg-[#60A5FA] hover:bg-[#93C5FD] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <><span className="w-4 h-4 border-2 border-[#081018] border-t-transparent rounded-full animate-spin" /> Signing in…</> : <><LogIn size={15} /> Sign In</>}
            </button>
          </form>
        </div>

        <p className="text-center text-[11px] mt-4 text-white/30">
          Hardik Traders Internal Portal · Rewari, Haryana
        </p>
      </div>
    </div>
  );
}
