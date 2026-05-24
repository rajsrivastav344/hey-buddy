import React, { useState } from 'react';
import Footer from '../components/Footer';

const samplePYQ = [
  { id: 1, title: 'DBMS End Semester 2023', subject: 'DBMS', year: 2, semester: 3, examYear: '2023', downloads: 612 },
  { id: 2, title: 'Data Structures Mid Sem 2023', subject: 'Data Structures', year: 2, semester: 3, examYear: '2023', downloads: 543 },
  { id: 3, title: 'OS End Semester 2023', subject: 'Operating Systems', year: 3, semester: 5, examYear: '2023', downloads: 489 },
  { id: 4, title: 'CN End Semester 2022', subject: 'Computer Networks', year: 3, semester: 5, examYear: '2022', downloads: 421 },
  { id: 5, title: 'ML End Semester 2023', subject: 'Machine Learning', year: 4, semester: 7, examYear: '2023', downloads: 731 },
  { id: 6, title: 'C Programming 2022', subject: 'C Programming', year: 1, semester: 1, examYear: '2022', downloads: 398 },
  { id: 7, title: 'Mathematics I Mid Sem 2023', subject: 'Mathematics I', year: 1, semester: 1, examYear: '2023', downloads: 345 },
  { id: 8, title: 'Software Engg 2022', subject: 'Software Engineering', year: 3, semester: 6, examYear: '2022', downloads: 312 },
];

const PYQ = () => {
  const [year, setYear]     = useState('All');
  const [search, setSearch] = useState('');

  const filtered = samplePYQ.filter(p =>
    (year === 'All' || p.year === year) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.subject.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ background: '#0a0a1a' }}>
      <div className="pt-24 pb-12 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63)' }}>
        <h1 className="font-heading font-black text-4xl md:text-5xl gradient-text mb-4">Previous Year Papers</h1>
        <p className="text-slate-400 text-lg">Last 10 years of university question papers with solutions.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="glass-card p-5 mb-8 flex flex-col md:flex-row gap-4">
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search PYQs..." className="form-input flex-1" />
          <div className="flex gap-2 flex-wrap">
            {['All',1,2,3,4].map(y => (
              <button key={y} onClick={() => setYear(y)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${year === y ? 'text-white' : 'text-slate-400'}`}
                style={year === y ? { background: 'linear-gradient(135deg, #4facfe, #00f2fe)' } : { background: 'rgba(255,255,255,0.05)' }}>
                {y === 'All' ? 'All' : `Year ${y}`}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((pyq, i) => (
            <div key={pyq.id} className="glass-card p-5 flex flex-col animate-slide-up"
              style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>📋</div>
              <h3 className="font-heading font-bold text-white text-sm mb-2 flex-grow">{pyq.title}</h3>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <span>{pyq.subject}</span>
                <span>{pyq.examYear}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">📥 {pyq.downloads}</span>
                <button className="text-xs px-3 py-1.5 rounded-lg text-white"
                  style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>
                  Download
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

export default PYQ;