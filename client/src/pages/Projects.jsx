import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

const sampleProjects = [
  { _id: '1', title: 'Student Result Management System', category: 'Web Dev', year: 2, difficulty: 'Beginner', techStack: ['HTML', 'CSS', 'PHP', 'MySQL'], description: 'Full-stack web app to manage student results, generate reports and track grades.', likes: 42, githubUrl: '#' },
  { _id: '2', title: 'Movie Recommendation using ML', category: 'AI/ML', year: 3, difficulty: 'Intermediate', techStack: ['Python', 'Pandas', 'Sklearn', 'Flask'], description: 'Collaborative filtering-based movie recommendation engine with a Flask API.', likes: 87, githubUrl: '#' },
  { _id: '3', title: 'IoT Smart Home Dashboard', category: 'IoT', year: 3, difficulty: 'Advanced', techStack: ['React', 'Node.js', 'MQTT', 'Arduino'], description: 'Real-time smart home monitoring dashboard with sensor data visualization.', likes: 65, githubUrl: '#' },
  { _id: '4', title: 'Expense Tracker App', category: 'Web Dev', year: 2, difficulty: 'Beginner', techStack: ['React', 'Node.js', 'MongoDB', 'Express'], description: 'MERN stack expense tracker with charts, categories, and monthly summaries.', likes: 31, githubUrl: '#' },
  { _id: '5', title: 'Face Recognition Attendance', category: 'AI/ML', year: 4, difficulty: 'Advanced', techStack: ['Python', 'OpenCV', 'DeepFace', 'Django'], description: 'Automated attendance system using facial recognition with a web dashboard.', likes: 124, githubUrl: '#' },
  { _id: '6', title: 'E-Commerce Platform', category: 'Web Dev', year: 4, difficulty: 'Advanced', techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'], description: 'Full-featured e-commerce platform with payments, cart and admin panel.', likes: 98, githubUrl: '#' },
  { _id: '7', title: 'Chat Application (Socket.io)', category: 'Web Dev', year: 3, difficulty: 'Intermediate', techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'], description: 'Real-time multi-room chat app with authentication and message history.', likes: 73, githubUrl: '#' },
  { _id: '8', title: 'Spam Email Classifier', category: 'AI/ML', year: 3, difficulty: 'Intermediate', techStack: ['Python', 'NLTK', 'Sklearn', 'Streamlit'], description: 'Naive Bayes-based email spam classifier with Streamlit dashboard.', likes: 56, githubUrl: '#' },
  { _id: '9', title: 'Library Management System', category: 'Web Dev', year: 2, difficulty: 'Beginner', techStack: ['Java', 'MySQL', 'JDBC', 'Swing'], description: 'Desktop app for library book management with issue/return tracking.', likes: 28, githubUrl: '#' },
  { _id: '10', title: 'Blockchain Voting System', category: 'Blockchain', year: 4, difficulty: 'Advanced', techStack: ['Solidity', 'React', 'Web3.js', 'Ethereum'], description: 'Decentralized voting system on Ethereum blockchain with MetaMask integration.', likes: 109, githubUrl: '#' },
  { _id: '11', title: 'Data Analysis Dashboard', category: 'Data Science', year: 3, difficulty: 'Intermediate', techStack: ['Python', 'Dash', 'Plotly', 'Pandas'], description: 'Interactive data analysis dashboard for visualizing CSV datasets.', likes: 62, githubUrl: '#' },
  { _id: '12', title: 'Android Weather App', category: 'Android', year: 3, difficulty: 'Intermediate', techStack: ['Android', 'Java', 'OpenWeatherAPI', 'Retrofit'], description: 'Android weather application with 7-day forecast and location detection.', likes: 47, githubUrl: '#' },
];

const categoryColors = {
  'Web Dev':     'linear-gradient(135deg, #667eea, #764ba2)',
  'AI/ML':       'linear-gradient(135deg, #43e97b, #38f9d7)',
  'Data Science':'linear-gradient(135deg, #a18cd1, #fbc2eb)',
  'IoT':         'linear-gradient(135deg, #4facfe, #00f2fe)',
  'Android':     'linear-gradient(135deg, #43e97b, #06b6d4)',
  'Blockchain':  'linear-gradient(135deg, #f093fb, #f5576c)',
  'Cloud':       'linear-gradient(135deg, #fd7043, #ff8a65)',
  'CN':          'linear-gradient(135deg, #fa709a, #fee140)',
};

const difficultyColor = { Beginner: 'text-green-400', Intermediate: 'text-yellow-400', Advanced: 'text-red-400' };

const Projects = () => {
  const [category, setCategory] = useState('All');
  const [year, setYear]         = useState('All');
  const [difficulty, setDiff]   = useState('All');
  const [search, setSearch]     = useState('');

  const categories  = ['All', 'Web Dev', 'AI/ML', 'Data Science', 'IoT', 'Android', 'Blockchain', 'Cloud'];
  const years       = ['All', 1, 2, 3, 4];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filtered = sampleProjects.filter(p => {
    return (category === 'All' || p.category === category) &&
           (year === 'All' || p.year === year) &&
           (difficulty === 'All' || p.difficulty === difficulty) &&
           (p.title.toLowerCase().includes(search.toLowerCase()) || p.techStack.some(t => t.toLowerCase().includes(search.toLowerCase())));
  });

  return (
    <div style={{ background: '#0a0a1a' }}>
      <div className="pt-24 pb-12 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63)' }}>
        <h1 className="font-heading font-black text-4xl md:text-5xl gradient-text mb-4">B.Tech Projects</h1>
        <p className="text-slate-400 text-lg">Real-world projects with source code, for every year and domain.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filters */}
        <div className="glass-card p-6 mb-10 space-y-4">
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search by title or tech stack..."
            className="form-input w-full" />
          <div className="flex flex-wrap gap-2">
            <span className="text-slate-500 text-sm self-center">Category:</span>
            {categories.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${category === c ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                style={category === c ? { background: categoryColors[c] || 'linear-gradient(135deg, #4f46e5, #7c3aed)' } : { background: 'rgba(255,255,255,0.05)' }}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-slate-500 text-sm self-center">Year:</span>
            {years.map(y => (
              <button key={y} onClick={() => setYear(y)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${year === y ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                style={year === y ? { background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' } : { background: 'rgba(255,255,255,0.05)' }}>
                {y === 'All' ? 'All' : `Year ${y}`}
              </button>
            ))}
            <span className="text-slate-500 text-sm self-center ml-4">Level:</span>
            {difficulties.map(d => (
              <button key={d} onClick={() => setDiff(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${difficulty === d ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                style={difficulty === d ? { background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' } : { background: 'rgba(255,255,255,0.05)' }}>
                {d}
              </button>
            ))}
          </div>
        </div>

        <p className="text-slate-500 text-sm mb-6">{filtered.length} projects found</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((project, i) => (
            <div key={project._id} className="glass-card p-5 flex flex-col animate-slide-up"
              style={{ animationDelay: `${i * 0.05}s` }}>
              {/* Top */}
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-medium px-2 py-1 rounded-lg text-white"
                  style={{ background: categoryColors[project.category] || 'rgba(79,70,229,0.5)' }}>
                  {project.category}
                </span>
                <span className={`text-xs font-medium ${difficultyColor[project.difficulty]}`}>
                  {project.difficulty}
                </span>
              </div>

              <h3 className="font-heading font-bold text-white text-sm mb-2 flex-grow leading-snug">
                {project.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.techStack.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded text-cyan-300"
                    style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.2)' }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-slate-500 text-xs">Year {project.year}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-400">❤️ {project.likes}</span>
                  <a href={project.githubUrl}
                    className="text-xs px-2.5 py-1 rounded-lg text-white no-underline transition-all hover:opacity-80"
                    style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
                    Code →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;