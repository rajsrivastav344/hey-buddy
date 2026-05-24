import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { user, logout }          = useAuth();
  const navigate                  = useNavigate();
  const location                  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/');
  };

  const navLinks = [
    { path: '/subjects', label: 'Subjects' },
    { path: '/notes',    label: 'Notes'    },
    { path: '/pyq',      label: 'PYQ'      },
    { path: '/labs',     label: 'Labs'     },
    { path: '/projects', label: 'Projects' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'navbar-glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 no-underline">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #06b6d4)' }}>
              H
            </div>
            <span className="font-heading font-bold text-xl gradient-text">Hey-Buddy</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline
                  ${isActive(link.path)
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <Link to="/dashboard" className="flex items-center space-x-2 no-underline">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
                    {user.name[0].toUpperCase()}
                  </div>
                  <span className="text-slate-300 text-sm">{user.name.split(' ')[0]}</span>
                </Link>
                <button onClick={handleLogout} className="btn-secondary text-sm py-2 px-4">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login"  className="btn-secondary text-sm py-2 px-4 no-underline">Login</Link>
                <Link to="/signup" className="btn-primary  text-sm py-2 px-4 no-underline">Sign Up</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden navbar-glass border-t border-white/10 px-4 py-4 space-y-2 animate-fade-in">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium no-underline transition-all
                ${isActive(link.path) ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-white/10'}`}>
              {link.label}
            </Link>
          ))}
          <div className="flex space-x-3 pt-2">
            {user ? (
              <button onClick={handleLogout} className="btn-secondary text-sm py-2 px-4 w-full">Logout</button>
            ) : (
              <>
                <Link to="/login"  onClick={() => setMenuOpen(false)} className="btn-secondary text-sm py-2 px-4 no-underline flex-1 text-center">Login</Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)} className="btn-primary  text-sm py-2 px-4 no-underline flex-1 text-center">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;