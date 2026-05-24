import React, { useState } from 'react';
import Footer from '../components/Footer';

const sampleLabs = [
  { id: 1, title: 'DS Lab - Binary Search Tree', subject: 'Data Structures Lab', year: 2, experiments: 12, icon: '🌳', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
  { id: 2, title: 'OS Lab - Process Scheduling', subject: 'OS Lab', year: 3, experiments: 10, icon: '🐧', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
  { id: 3, title: 'CN Lab - Socket Programming', subject: 'CN Lab', year: 3, experiments: 8, icon: '🌐', gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
  { id: 4, title: 'DBMS Lab - SQL Queries', subject: 'DBMS Lab', year: 2, experiments: 15, icon: '🗄️', gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' },
  { id: 5, title: 'Web Dev Lab - React Projects', subject: 'Web Dev Lab', year: 3, experiments: 10, icon: '🕸️', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { id: 6, title: 'ML Lab - Sklearn Experiments', subject: 'ML Lab', year: 4, experiments: 12, icon: '🧠', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
  { id: 7, title: 'C Programming Lab', subject: 'C Lab', year: 1, experiments: 20, icon: '💻', gradient: 'linear-gradient(135deg, #fd7043, #ff8a65)' },
  { id: 8, title: 'Python Lab - Data Science', subject: 'Python Lab', year: 3, experiments: 14, icon: '🐍', gradient: 'linear-gradient(135deg, #4facfe, #43e97b)' },
];

const Labs = () => {
  const [year, setYear]     = useState('All');
  const [search, setSearch] = useState('');

  const filtered = sampleLabs.filter(l =>
    (year === 'All' || l.year === year) &&
    l.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: '#0a0a1a' }}>
      <div className="pt-24 pb-12 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63)' }}>
        <h1 className="font-heading font-black text-4xl md:text-5xl gradient-text mb-4">Lab Manuals</h1>
        <p className="text-slate-400 text-lg">Step-by-step experiments with expected outputs — ready to submit.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="glass-card p-5 mb-8 flex flex-col md:flex-row gap-4">
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search lab manuals..." className="form-input flex-1" />
          <div className="flex gap-2 flex-wrap">
            {['All',1,2,3,4].map(y => (
              <button key={y} onClick={() => setYear(y)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${year === y ? 'text-white' : 'text-slate-400'}`}
                style={year === y ? { background: 'linear-gradient(135deg, #43e97b, #38f9d7)' } : { background: 'rgba(255,255,255,0.05)' }}>
                {y === 'All' ? 'All' : `Year ${y}`}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((lab, i) => (
            <div key={lab.id} className="glass-card p-6 flex flex-col animate-slide-up"
              style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ background: lab.gradient }}>
                {lab.icon}
              </div>
              <h3 className="font-heading font-bold text-white text-sm mb-1 flex-grow">{lab.title}</h3>
              <p className="text-slate-500 text-xs mb-4">{lab.experiments} Experiments</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-indigo-400">Year {lab.year}</span>
                <button className="text-xs px-3 py-1.5 rounded-lg text-white transition-all hover:opacity-80"
                  style={{ background: lab.gradient }}>
                  Open Lab →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Labs;