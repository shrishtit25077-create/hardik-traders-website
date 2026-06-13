import React, { useState, useEffect, useCallback } from 'react';
import {
  Search, Filter, Download, Trash2, Phone, Mail, MessageCircle,
  LogOut, RefreshCw, CheckCircle, XCircle, Clock, TrendingUp,
  Users, AlertCircle, ChevronDown, X, Eye,
} from 'lucide-react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/* ─── Helpers ─────────────────────────────────────────────────────────── */
const fmtDate = iso =>
  new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

const STATUS_META = {
  new:       { label: 'New',       bg: 'rgba(96, 165, 250, 0.1)', color: '#60A5FA', dot: '#60A5FA' },
  contacted: { label: 'Contacted', bg: 'rgba(251, 191, 36, 0.1)', color: '#FBBF24', dot: '#FBBF24' },
  closed:    { label: 'Closed',    bg: 'rgba(52, 211, 153, 0.1)', color: '#34D399', dot: '#34D399' },
};

const Badge = ({ status }) => {
  const m = STATUS_META[status] || STATUS_META.new;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold"
      style={{ backgroundColor: m.bg, color: m.color }}
    >
      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: m.dot }} />
      {m.label}
    </span>
  );
};

/* ─── Detail modal ────────────────────────────────────────────────────── */
function EnquiryModal({ enq, onClose, onStatusChange }) {
  const [status, setStatus] = useState(enq.status);
  const [notes, setNotes]   = useState(enq.notes || '');
  const [saving, setSaving] = useState(false);
  const token = localStorage.getItem('ht_token');

  const save = async () => {
    setSaving(true);
    try {
      const res = await fetch(`${API}/api/enquiries/${enq._id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status, notes }),
      });
      const d = await res.json();
      if (d.success) { onStatusChange(enq._id, status, notes); onClose(); }
    } finally { setSaving(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-[#101827] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden text-[#F8FAFC]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="font-black text-[15px] text-white">Enquiry Detail</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white"><X size={16} /></button>
        </div>
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {[['Name', enq.name], ['Phone', enq.phone], ['Email', enq.email], ['Company', enq.company || '—'], ['Date', fmtDate(enq.createdAt)]].map(([k, v]) => (
            <div key={k} className="flex gap-3">
              <span className="text-[11px] font-bold uppercase tracking-widest w-20 shrink-0 pt-0.5 text-white/40">{k}</span>
              <span className="text-[13.5px] font-medium text-white">{v}</span>
            </div>
          ))}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest mb-2 text-white/40">Requirement</div>
            <div className="p-3 rounded-lg text-[13.5px] leading-relaxed bg-[#081018] border border-white/10 text-white">{enq.message}</div>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest mb-2 text-white/40">Status</div>
            <select value={status} onChange={e => setStatus(e.target.value)} className="w-full px-3 py-2 bg-[#081018] border border-white/10 text-white rounded-lg text-[13px] font-semibold outline-none focus:border-[#60A5FA] transition-colors">
              <option value="new" className="bg-[#101827]">New</option>
              <option value="contacted" className="bg-[#101827]">Contacted</option>
              <option value="closed" className="bg-[#101827]">Closed</option>
            </select>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest mb-2 text-white/40">Internal Notes</div>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} placeholder="Add follow-up notes…" className="w-full px-3 py-2 bg-[#081018] border border-white/10 text-white rounded-lg text-[13px] resize-none outline-none focus:border-[#60A5FA] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }} />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 px-6 py-4 border-t border-white/10">
          <a href={`tel:${enq.phone}`} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12.5px] font-bold text-[#081018] bg-[#60A5FA] hover:bg-[#93C5FD] transition-colors"><Phone size={13} /> Call</a>
          <a href={`https://wa.me/${enq.phone.replace(/[^0-9]/g,'')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12.5px] font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"><MessageCircle size={13} /> WhatsApp</a>
          <a href={`mailto:${enq.email}`} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12.5px] font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"><Mail size={13} /> Email</a>
          <button onClick={save} disabled={saving} className="ml-auto px-5 py-2 rounded-lg text-[12.5px] font-bold text-[#081018] bg-white hover:bg-white/90 transition-colors" style={{ opacity: saving ? 0.7 : 1 }}>
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Dashboard ──────────────────────────────────────────────────── */
export default function AdminDashboard({ onLogout }) {
  const [enquiries, setEnquiries]   = useState([]);
  const [total, setTotal]           = useState(0);
  const [newCount, setNewCount]     = useState(0);
  const [loading, setLoading]       = useState(true);
  const [search, setSearch]         = useState('');
  const [statusFilter, setFilter]   = useState('all');
  const [selected, setSelected]     = useState(null);
  const [deleting, setDeleting]     = useState(null);
  const token = localStorage.getItem('ht_token');

  const fetch_enquiries = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: 100 });
      if (statusFilter !== 'all') params.set('status', statusFilter);
      if (search.trim()) params.set('search', search.trim());
      const res  = await fetch(`${API}/api/enquiries?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.data);
        setTotal(data.total);
        setNewCount(data.newCount);
      }
    } finally { setLoading(false); }
  }, [search, statusFilter, token]);

  useEffect(() => { fetch_enquiries(); }, [fetch_enquiries]);

  // Auto-refresh every 30 s
  useEffect(() => {
    const t = setInterval(fetch_enquiries, 30000);
    return () => clearInterval(t);
  }, [fetch_enquiries]);

  const handleStatusChange = (id, status, notes) => {
    setEnquiries(prev => prev.map(e => e._id === id ? { ...e, status, notes } : e));
    setNewCount(prev => enquiries.find(e => e._id === id)?.status === 'new' && status !== 'new' ? prev - 1 : prev);
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this enquiry permanently?')) return;
    setDeleting(id);
    try {
      await fetch(`${API}/api/enquiries/${id}`, {
        method: 'DELETE', headers: { Authorization: `Bearer ${token}` },
      });
      setEnquiries(prev => prev.filter(e => e._id !== id));
      setTotal(t => t - 1);
    } finally { setDeleting(null); }
  };

  const exportCSV = () => {
    window.open(`${API}/api/enquiries/export?token=${token}`, '_blank');
    fetch(`${API}/api/enquiries/export`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `hardik-traders-leads-${Date.now()}.csv`;
        a.click(); URL.revokeObjectURL(url);
      });
  };

  const stats = [
    { label: 'Total Leads',  value: total,    icon: <Users size={18} />,       bg: 'rgba(96, 165, 250, 0.1)', color: '#60A5FA' },
    { label: 'New',          value: newCount,  icon: <AlertCircle size={18} />, bg: 'rgba(96, 165, 250, 0.2)', color: '#93C5FD' },
    { label: 'Contacted',    value: enquiries.filter(e => e.status === 'contacted').length, icon: <Clock size={18} />, bg: 'rgba(251, 191, 36, 0.1)', color: '#FBBF24' },
    { label: 'Closed',       value: enquiries.filter(e => e.status === 'closed').length,    icon: <CheckCircle size={18} />, bg: 'rgba(52, 211, 153, 0.1)', color: '#34D399' },
  ];

  return (
    <div className="min-h-screen bg-[#081018] text-[#F8FAFC]" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#101827]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#081018] text-sm font-black bg-[#60A5FA]">HT</div>
            <div>
              <div className="font-black text-[13.5px] text-white">Hardik Traders</div>
              <div className="text-[10.5px] font-semibold text-white/50">CRM Dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {newCount > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-bold bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA]">
                <span className="w-2 h-2 rounded-full animate-pulse inline-block bg-[#60A5FA]" />
                {newCount} new
              </div>
            )}
            <button onClick={fetch_enquiries} className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-all" title="Refresh"><RefreshCw size={15} /></button>
            <button onClick={onLogout} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12.5px] font-semibold hover:bg-white/10 text-white/60 hover:text-white transition-all">
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map(({ label, value, icon, bg, color }) => (
            <div key={label} className="bg-[#101827] border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: bg }}>
                <span style={{ color }}>{icon}</span>
              </div>
              <div>
                <div className="text-[22px] font-black leading-none text-white">{value}</div>
                <div className="text-[11px] font-semibold text-white/40">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="bg-[#101827] border border-white/10 rounded-xl p-4 mb-4 flex flex-wrap gap-3 items-center">
          <div className="flex-1 min-w-52 flex items-center gap-2 px-3 py-2 rounded-lg bg-[#081018] border border-white/10">
            <Search size={14} className="text-white/40" />
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search name, phone, company…"
              className="flex-1 bg-transparent text-[13px] text-white outline-none"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            {search && <button onClick={() => setSearch('')}><X size={13} className="text-white/40" /></button>}
          </div>

          <select
            value={statusFilter} onChange={e => setFilter(e.target.value)}
            className="px-3 py-2 bg-[#081018] border border-white/10 text-white rounded-lg text-[13px] font-semibold outline-none focus:border-[#60A5FA] transition-colors"
          >
            <option value="all" className="bg-[#101827]">All Status</option>
            <option value="new" className="bg-[#101827]">New</option>
            <option value="contacted" className="bg-[#101827]">Contacted</option>
            <option value="closed" className="bg-[#101827]">Closed</option>
          </select>

          <button
            onClick={exportCSV}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12.5px] font-bold text-[#081018] bg-[#60A5FA] hover:bg-[#93C5FD] transition-all"
          >
            <Download size={13} /> Export CSV
          </button>
        </div>

        {/* Table */}
        <div className="bg-[#101827] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          {loading ? (
            <div className="flex items-center justify-center py-20 gap-3 text-white/40">
              <RefreshCw size={18} className="animate-spin" /> Loading enquiries…
            </div>
          ) : enquiries.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-2 text-white/40">
              <TrendingUp size={32} style={{ opacity: 0.3 }} />
              <p className="font-semibold">No enquiries found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white/40">
                    {['Name', 'Phone', 'Company', 'Requirement', 'Status', 'Date', 'Actions'].map(h => (
                      <th key={h} className="px-4 py-3 text-[10.5px] font-black uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((e, i) => (
                    <tr
                      key={e._id}
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                      style={{ backgroundColor: e.status === 'new' ? 'rgba(96,165,250,0.03)' : 'transparent' }}
                    >
                      <td className="px-4 py-3">
                        <div className="font-bold text-[13px] text-white">{e.name}</div>
                        <div className="text-[11.5px] text-white/40">{e.email}</div>
                      </td>
                      <td className="px-4 py-3 text-[13px] font-medium whitespace-nowrap text-white/80">{e.phone}</td>
                      <td className="px-4 py-3 text-[12.5px] text-white/60">{e.company || <span className="text-white/20">—</span>}</td>
                      <td className="px-4 py-3 max-w-[220px]">
                        <p className="text-[12px] line-clamp-2 leading-relaxed text-white/60">{e.message}</p>
                      </td>
                      <td className="px-4 py-3"><Badge status={e.status} /></td>
                      <td className="px-4 py-3 text-[11.5px] whitespace-nowrap text-white/40">{fmtDate(e.createdAt)}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => setSelected(e)} title="View / Edit" className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-all">
                            <Eye size={14} />
                          </button>
                          <a href={`tel:${e.phone}`} title="Call" className="p-1.5 rounded-lg hover:bg-[#60A5FA]/10 text-[#60A5FA] transition-all">
                            <Phone size={14} />
                          </a>
                          <a href={`https://wa.me/${e.phone.replace(/[^0-9]/g,'')}`} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="p-1.5 rounded-lg hover:bg-green-500/10 text-[#25D366] transition-all">
                            <MessageCircle size={14} />
                          </a>
                          <button onClick={() => handleDelete(e._id)} disabled={deleting === e._id} title="Delete" className="p-1.5 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-all">
                            <Trash2 size={14} style={{ color: deleting === e._id ? 'rgba(255,255,255,0.2)' : '' }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="px-4 py-3 border-t text-[11.5px] bg-white/5 border-white/10 text-white/40">
            Showing {enquiries.length} of {total} enquiries · Auto-refreshes every 30 seconds
          </div>
        </div>
      </div>

      {selected && (
        <EnquiryModal
          enq={selected}
          onClose={() => setSelected(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}
