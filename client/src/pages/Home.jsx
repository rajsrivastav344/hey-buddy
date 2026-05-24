import React from 'react';
import { Link } from 'react-router-dom';
import Hero     from '../components/Hero';
import Services from '../components/Services';
import Footer   from '../components/Footer';

const FeatureRow = ({ icon, title, desc, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-12`}>
    <div className="flex-1 text-center">
      <div className="text-8xl mb-4 animate-float" style={{ animationDelay: '0.5s' }}>{icon}</div>
    </div>
    <div className="flex-1">
      <h3 className="font-heading font-bold text-2xl text-white mb-4">{title}</h3>
      <p className="text-slate-400 text-lg leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Home = () => {
  const yearCards = [
    { year: '1st Year', color: 'linear-gradient(135deg, #667eea, #764ba2)', subjects: ['C Programming', 'Maths I & II', 'Physics', 'Engineering Drawing', 'Basic Electronics'] },
    { year: '2nd Year', color: 'linear-gradient(135deg, #4facfe, #00f2fe)', subjects: ['Data Structures', 'OOP (Java/C++)', 'DBMS', 'Digital Electronics', 'Discrete Maths'] },
    { year: '3rd Year', color: 'linear-gradient(135deg, #43e97b, #38f9d7)', subjects: ['OS', 'Computer Networks', 'Software Engineering', 'Web Development', 'Theory of Computation'] },
    { year: '4th Year', color: 'linear-gradient(135deg, #fa709a, #fee140)', subjects: ['AI & ML', 'Cloud Computing', 'Data Science', 'Compiler Design', 'Project Work'] },
  ];

  const techTopics = [
    { icon: '🌐', label: 'Web Dev', desc: 'HTML, CSS, JS, React, Node, MongoDB' },
    { icon: '🤖', label: 'AI / ML', desc: 'Supervised, Unsupervised, Deep Learning' },
    { icon: '📊', label: 'Data Science', desc: 'Pandas, NumPy, Matplotlib, Sklearn' },
    { icon: '☁️', label: 'Cloud',    desc: 'AWS, GCP, Azure, Docker, K8s' },
    { icon: '🔗', label: 'CN',       desc: 'TCP/IP, OSI, HTTP, DNS, Protocols' },
    { icon: '🌥️', label: 'Claude AI', desc: 'LLM concepts, Prompt Eng, Claude API' },
  ];

  return (
    <div style={{ background: '#0a0a1a' }}>
      <Hero />

      {/* Overview Section */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #0f0c29 0%, #0a0a1a 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">What is Hey-Buddy?</h2>
            <p className="section-subtitle text-slate-400">
              A one-stop learning platform designed specifically for B.Tech students — practical, structured, and powered by AI.
            </p>
          </div>
          <FeatureRow icon="📚" title="All 4 Years Covered" desc="Every subject from Semester 1 to Semester 8 — organized, practical, and exam-ready. Never miss a concept again." />
          <FeatureRow icon="🤖" title="AI Study Buddy" desc="Ask our Claude-powered chatbot anything — get instant explanations, code help, concept breakdowns and career advice." reverse />
          <FeatureRow icon="🚀" title="Real Projects" desc="Build your portfolio with real-world projects across Web Dev, ML, IoT, Android, Cloud and more. With full source code." />
        </div>
      </section>

      {/* Year-wise Coverage */}
      <section className="py-20 px-4" style={{ background: '#0a0a1a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-text">Year-by-Year Coverage</h2>
            <p className="section-subtitle text-slate-400">Every year, every semester — fully covered.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {yearCards.map((yc, i) => (
              <div key={yc.year} className="glass-card p-6 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-full py-2 rounded-xl text-center font-heading font-bold text-white text-lg mb-4"
                  style={{ background: yc.color }}>
                  {yc.year}
                </div>
                <ul className="space-y-2">
                  {yc.subjects.map(s => (
                    <li key={s} className="flex items-center space-x-2 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: yc.color.split(',')[0].slice(25) }}></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Tech Topics */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #0a0a1a 0%, #0f0c29 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-text">Trending Tech Concepts</h2>
            <p className="section-subtitle text-slate-400">Learn in-demand topics in a practical, industry-ready format.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techTopics.map((t, i) => (
              <div key={t.label} className="glass-card p-5 text-center animate-slide-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="text-4xl mb-3">{t.icon}</div>
                <div className="font-heading font-bold text-white text-sm mb-1">{t.label}</div>
                <div className="text-slate-500 text-xs">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.2), rgba(124,58,237,0.2))', border: '1px solid rgba(79,70,229,0.3)' }}>
            <h2 className="font-heading font-black text-4xl text-white mb-4">
              Ready to Ace Your B.Tech? 🎓
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join thousands of students already learning smarter with Hey-Buddy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="btn-primary text-base px-8 py-4 no-underline inline-block">
                🚀 Start Learning Free
              </Link>
              <Link to="/projects" className="btn-secondary text-base px-8 py-4 no-underline inline-block">
                💡 View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Footer />
    </div>
  );
};

export default Home;