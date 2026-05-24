import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    icon: '📖',
    title: 'Subjects',
    description: 'All B.Tech subjects from Year 1–4. Core, programming, electives — structured semester-wise with practical focus.',
    link: '/subjects',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['C/C++', 'Java', 'Python', 'DBMS', 'OS'],
    count: '40+ Subjects',
  },
  {
    id: 2,
    icon: '📝',
    title: 'Notes',
    description: 'Concise, exam-ready notes for every subject. Handwritten and digital formats, topic-wise organized.',
    link: '/notes',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['Handwritten', 'Digital', 'Topic-wise'],
    count: '200+ Notes',
  },
  {
    id: 3,
    icon: '📋',
    title: 'Previous Year Papers',
    description: 'Last 10 years of university question papers with solutions. Pattern analysis and important questions.',
    link: '/pyq',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['University PYQs', 'Solutions', 'Pattern'],
    count: '100+ Papers',
  },
  {
    id: 4,
    icon: '🔬',
    title: 'Lab Manuals',
    description: 'Step-by-step lab experiments for DS, OS, CN, DBMS, Web Dev and more with expected outputs.',
    link: '/labs',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    tags: ['DS Lab', 'OS Lab', 'CN Lab', 'Web Lab'],
    count: '50+ Experiments',
  },
  {
    id: 5,
    icon: '💡',
    title: 'Key Concepts',
    description: 'Core concepts of AI/ML, Data Science, Cloud Computing, CN, and Web Dev explained practically.',
    link: '/subjects',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tags: ['AI/ML', 'Data Science', 'Cloud', 'CN'],
    count: '30+ Topics',
  },
  {
    id: 6,
    icon: '🚀',
    title: 'Projects',
    description: 'Real-world B.Tech projects with full source code, documentation and deployment guides.',
    link: '/projects',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    tags: ['Web Dev', 'ML', 'IoT', 'Android'],
    count: '50+ Projects',
  },
  {
    id: 7,
    icon: '🤖',
    title: 'AI Chatbot',
    description: 'Ask Hey-Buddy anything! Powered by Claude AI to answer your B.Tech doubts 24/7 instantly.',
    link: '/signup',
    gradient: 'linear-gradient(135deg, #fd7043 0%, #ff8a65 100%)',
    tags: ['Claude AI', '24/7', 'Instant Help'],
    count: 'AI Powered',
  },
];

const ServiceCard = ({ service, index }) => (
  <div
    className="glass-card p-6 flex flex-col h-full animate-slide-up"
    style={{ animationDelay: `${index * 0.1}s` }}>

    {/* Icon + Count */}
    <div className="flex items-start justify-between mb-4">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
        style={{ background: service.gradient }}>
        {service.icon}
      </div>
      <span className="text-xs font-medium px-2 py-1 rounded-full"
        style={{ background: 'rgba(79,70,229,0.2)', color: '#818cf8', border: '1px solid rgba(79,70,229,0.3)' }}>
        {service.count}
      </span>
    </div>

    {/* Title */}
    <h3 className="font-heading font-bold text-xl text-white mb-3">{service.title}</h3>

    {/* Description */}
    <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-4">{service.description}</p>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5 mb-5">
      {service.tags.map(tag => (
        <span key={tag} className="text-xs px-2 py-0.5 rounded text-slate-300"
          style={{ background: 'rgba(255,255,255,0.08)' }}>
          {tag}
        </span>
      ))}
    </div>

    {/* CTA */}
    <Link to={service.link}
      className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white no-underline transition-all hover:opacity-90"
      style={{ background: service.gradient }}>
      Explore {service.title} →
    </Link>
  </div>
);

const Services = () => (
  <section className="py-24 px-4" style={{ background: 'linear-gradient(180deg, #0a0a1a 0%, #0f0c29 100%)' }}>
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          style={{ background: 'rgba(79,70,229,0.2)', color: '#818cf8', border: '1px solid rgba(79,70,229,0.3)' }}>
          🎓 Everything You Need
        </div>
        <h2 className="section-title gradient-text">Our Services</h2>
        <p className="section-subtitle text-slate-400">
          A complete ecosystem for B.Tech students — from first-year fundamentals to final-year projects.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.slice(0, 4).map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
        {services.slice(4).map((s, i) => <ServiceCard key={s.id} service={s} index={i + 4} />)}
      </div>
    </div>
  </section>
);

export default Services;