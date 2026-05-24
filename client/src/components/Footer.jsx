import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = {
    Learn: [
      { label: 'Subjects',  to: '/subjects' },
      { label: 'Notes',     to: '/notes'    },
      { label: 'PYQ',       to: '/pyq'      },
      { label: 'Labs',      to: '/labs'     },
      { label: 'Projects',  to: '/projects' },
    ],
    Resources: [
      { label: 'Web Dev',      to: '/subjects' },
      { label: 'AI / ML',      to: '/subjects' },
      { label: 'Data Science', to: '/subjects' },
      { label: 'Cloud & CN',   to: '/subjects' },
    ],
    Account: [
      { label: 'Sign Up',    to: '/signup'    },
      { label: 'Login',      to: '/login'     },
      { label: 'Dashboard',  to: '/dashboard' },
    ],
  };

  return (
    <footer style={{ background: 'linear-gradient(180deg, #0a0a1a 0%, #050510 100%)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #06b6d4)' }}>H</div>
              <span className="font-heading font-bold text-2xl gradient-text">Hey-Buddy</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              The ultimate B.Tech e-learning platform. From Year 1 to Year 4, covering all subjects, projects, notes and more — with AI-powered guidance.
            </p>
            <div className="flex space-x-3">
              {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
                <a key={s} href="#" className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white transition-all no-underline"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-heading font-semibold text-white mb-4 text-sm">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-slate-400 hover:text-indigo-400 text-sm no-underline transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2025 Hey-Buddy. Built for B.Tech students, by Raj.</p>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <span>Powered by</span>
            <span className="gradient-text font-semibold"> Raj INC </span>
            <span>🤖</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;