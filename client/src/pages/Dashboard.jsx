import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const Dashboard = () => {
  const { user } = useAuth();

  const quickLinks = [
    { label: 'Subjects', to: '/subjects', icon: '📖', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { label: 'Notes',    to: '/notes',    icon: '📝', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { label: 'PYQs',     to: '/pyq',      icon: '📋', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    { label: 'Labs',     to: '/labs',     icon: '🔬', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
    { label: 'Projects', to: '/projects', icon: '🚀', gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' },
  ];

  const stats = [
    { label: 'Branch',  value: user?.branch || 'CSE', icon: '🎓' },
    { label: 'Year',    value: `Year ${user?.year || 1}`, icon: '📅' },
    { label: 'Role',    value: user?.role === 'admin' ? 'Admin' : 'Student', icon: '👤' },
    { label: 'Status',  value: 'Active', icon: '✅' },
  ];

  const recentActivity = [
    { action: 'Downloaded', item: 'OS Notes', time: '2 hrs ago', icon: '📥' },
    { action: 'Viewed',     item: 'DBMS PYQ 2023', time: '5 hrs ago', icon: '👁️' },
    { action: 'Bookmarked', item: 'ML Final Year Project', time: '1 day ago', icon: '🔖' },
    { action: 'Asked',      item: 'About CN OSI Model', time: '2 days ago', icon: '🤖' },
  ];

  return (
    <div style={{ background: '#0a0a1a' }}>
      {/* Header */}
      <div className="pt-24 pb-12 px-4"
        style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
              {user?.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <h1 className="font-heading font-black text-3xl text-white">
                Hey, {user?.name?.split(' ')[0]}! 👋
              </h1>
              <p className="text-slate-400 text-sm">{user?.email} · {user?.branch} · Year {user?.year}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-slate-400 text-sm">Member since</div>
            <div className="text-white font-medium">
              {new Date(user?.createdAt || Date.now()).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map(s => (
            <div key={s.label} className="glass-card p-5 text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-heading font-bold text-white text-lg">{s.value}</div>
              <div className="text-slate-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h2 className="font-heading font-bold text-xl text-white mb-5">Quick Access</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {quickLinks.map(q => (
                <Link key={q.label} to={q.to} className="glass-card p-5 text-center no-underline hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3"
                    style={{ background: q.gradient }}>
                    {q.icon}
                  </div>
                  <div className="text-white text-xs font-medium">{q.label}</div>
                </Link>
              ))}
            </div>

            {/* AI Chatbot Promo */}
            <div className="glass-card p-6 mt-6"
              style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.2), rgba(124,58,237,0.2))', border: '1px solid rgba(79,70,229,0.3)' }}>
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">🤖</span>
                <div>
                  <h3 className="font-heading font-bold text-white">Hey-Buddy AI is ready!</h3>
                  <p className="text-slate-400 text-sm">Click the 🤖 button in the bottom-right to start chatting.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Explain OS scheduling', 'Python code help', 'Project ideas', 'Exam tips'].map(prompt => (
                  <span key={prompt} className="text-xs px-3 py-1.5 rounded-full text-indigo-300 cursor-pointer hover:bg-indigo-500/30 transition-all"
                    style={{ background: 'rgba(79,70,229,0.2)', border: '1px solid rgba(79,70,229,0.3)' }}>
                    {prompt}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="font-heading font-bold text-xl text-white mb-5">Recent Activity</h2>
            <div className="glass-card p-5 space-y-4">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex items-center space-x-3 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="text-xl flex-shrink-0">{act.icon}</div>
                  <div className="flex-grow">
                    <div className="text-white text-sm font-medium">{act.action}</div>
                    <div className="text-slate-400 text-xs">{act.item}</div>
                  </div>
                  <div className="text-slate-600 text-xs flex-shrink-0">{act.time}</div>
                </div>
              ))}
            </div>

            {/* Profile Card */}
            <div className="glass-card p-5 mt-5">
              <h3 className="font-heading font-semibold text-white mb-4 text-sm">Your Profile</h3>
              <div className="space-y-3">
                {[
                  { label: 'Name',   value: user?.name },
                  { label: 'Email',  value: user?.email },
                  { label: 'Branch', value: user?.branch },
                  { label: 'Year',   value: `Year ${user?.year}` },
                ].map(item => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;