import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', branch: 'CSE', year: 1 });
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw]   = useState(false);
  const { signup }   = useAuth();
  const navigate     = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return toast.error('Please fill all fields');
    if (form.password.length < 6) return toast.error('Password must be at least 6 characters');
    setLoading(true);
    try {
      await signup(form);
      toast.success('Welcome to Hey-Buddy! 🎉');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const branches = ['CSE', 'IT', 'ECE', 'ME', 'CE', 'EE', 'Other'];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}>

      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', filter: 'blur(50px)' }} />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 no-underline">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #06b6d4)' }}>H</div>
            <span className="font-heading font-bold text-3xl gradient-text">Hey-Buddy</span>
          </Link>
          <p className="text-slate-400 mt-2 text-sm">Join 10,000+ B.Tech students 🎓</p>
        </div>

        <div className="glass-card p-8">
          <h2 className="font-heading font-bold text-2xl text-white mb-6 text-center">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required
                placeholder="Your full name" className="form-input" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required
                placeholder="your@email.com" className="form-input" />
            </div>

            {/* Password */}
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">Password</label>
              <div className="relative">
                <input type={showPw ? 'text' : 'password'} name="password" value={form.password}
                  onChange={handleChange} required placeholder="Min 6 characters"
                  className="form-input pr-12" />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-sm">
                  {showPw ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Branch + Year */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1.5">Branch</label>
                <select name="branch" value={form.branch} onChange={handleChange}
                  className="form-input" style={{ appearance: 'none' }}>
                  {branches.map(b => <option key={b} value={b} style={{ background: '#0f0f2a' }}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1.5">Year</label>
                <select name="year" value={form.year} onChange={handleChange}
                  className="form-input" style={{ appearance: 'none' }}>
                  {[1,2,3,4].map(y => <option key={y} value={y} style={{ background: '#0f0f2a' }}>Year {y}</option>)}
                </select>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading} className="btn-primary w-full py-3 text-base disabled:opacity-70 mt-2">
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span>Creating Account...</span>
                </span>
              ) : 'Join Hey-Buddy 🚀'}
            </button>
          </form>

          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="px-3 text-slate-500 text-xs">Already have an account?</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <Link to="/login" className="block text-center text-indigo-400 hover:text-indigo-300 text-sm font-medium no-underline transition-colors">
            Sign in →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;