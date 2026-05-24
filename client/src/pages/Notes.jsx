// Notes.jsx
import React, { useState } from 'react';
import Footer from '../components/Footer';

const sampleNotes = [
  { id: 1, title: 'Data Structures Complete Notes', subject: 'Data Structures', year: 2, semester: 3, type: 'Notes', downloads: 342, rating: 4.8, tags: ['Arrays', 'Linked List', 'Trees', 'Graphs'] },
  { id: 2, title: 'DBMS Unit-wise Notes', subject: 'DBMS', year: 2, semester: 3, type: 'Notes', downloads: 289, rating: 4.7, tags: ['SQL', 'Normalization', 'Transactions'] },
  { id: 3, title: 'Operating Systems Handwritten', subject: 'OS', year: 3, semester: 5, type: 'Notes', downloads: 415, rating: 4.9, tags: ['Process', 'Memory', 'File System'] },
  { id: 4, title: 'CN Quick Revision Notes', subject: 'Computer Networks', year: 3, semester: 5, type: 'Notes', downloads: 267, rating: 4.6, tags: ['TCP/IP', 'OSI', 'HTTP', 'DNS'] },
  { id: 5, title: 'Machine Learning Full Notes', subject: 'ML', year: 4, semester: 7, type: 'Notes', downloads: 521, rating: 4.9, tags: ['Supervised', 'Unsupervised', 'Neural Net'] },
  { id: 6, title: 'Web Dev React Notes', subject: 'Web Development', year: 3, semester: 5, type: 'Notes', downloads: 388, rating: 4.8, tags: ['HTML', 'CSS', 'React', 'Node'] },
];

const Notes = () => {
  const [year, setYear]     = useState('All');
  const [search, setSearch] = useState('');

  const filtered = sampleNotes.filter(n =>
    (year === 'All' || n.year === year) &&
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: '#0a0a1a' }}>
      <div className="pt-24 pb-12 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63)' }}>
        <h1 className="font-heading font-black text-4xl md:text-5xl gradient-text mb-4">Study Notes</h1>
        <p className="text-slate-400 text-lg">Curated notes for every subject — concise, complete, exam-ready.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="glass-card p-5 mb-8 flex flex-col md:flex-row gap-4">
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search notes..." className="form-input flex-1" />
          <div className="flex gap-2 flex-wrap">
            {['All',1,2,3,4].map(y => (
              <button key={y} onClick={() => setYear(y)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${year === y ? 'text-white' : 'text-slate-400'}`}
                style={year === y ? { background: 'linear-gradient(135deg, #f093fb, #f5576c)' } : { background: 'rgba(255,255,255,0.05)' }}>
                {y === 'All' ? 'All Years' : `Year ${y}`}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((note, i) => (
            <div key={note.id} className="glass-card p-5 flex flex-col animate-slide-up"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs px-2 py-1 rounded-lg text-white"
                  style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>
                  {note.subject}
                </span>
                <span className="text-xs text-yellow-400">⭐ {note.rating}</span>
              </div>
              <h3 className="font-heading font-bold text-white text-sm mb-3 flex-grow">{note.title}</h3>
              <div className="flex flex-wrap gap-1 mb-4">
                {note.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded text-slate-300"
                    style={{ background: 'rgba(255,255,255,0.07)' }}>{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-slate-500 text-xs">📥 {note.downloads} downloads</span>
                <button className="text-xs px-3 py-1.5 rounded-lg text-white"
                  style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>
                  Download PDF
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

export default Notes;