import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = Array.from({ length: 80 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.5,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
            opacity: Math.random() * 0.6 + 0.2,
        }));

        let animId;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(129,140,248,${p.opacity})`;
                ctx.fill();
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        window.addEventListener('resize', resize);
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
    }, []);

    const stats = [
        { value: '500+', label: 'Study Materials' },
        { value: '4 Years', label: 'B.Tech Coverage' },
        { value: '50+', label: 'Projects' },
        { value: 'AI', label: 'Powered Chatbot' },
    ];

    const techBadges = ['Python', 'React', 'ML/AI', 'Cloud', 'DSA', 'DBMS', 'CN', 'Web Dev'];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}>

            {/* Particle Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-20 animate-pulse-slow"
                style={{ background: 'radial-gradient(circle, #4f46e5, transparent)', filter: 'blur(60px)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 animate-pulse-slow"
                style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', filter: 'blur(80px)', animationDelay: '2s' }} />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center ">




                {/* Heading */}
                <h1 className="hero-title font-heading font-black mb-6 animate-slide-up"
                    style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.1, animationDelay: '0.1s' }}>
                    Learn Smarter with{' '}
                    <span className="gradient-text">Hey-Buddy</span>
                </h1>

                <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up"
                    style={{ animationDelay: '0.2s' }}>
                    The ultimate e-learning platform for B.Tech students — covering all subjects from Year 1 to Year 4,
                    with practical projects, notes, PYQs, lab manuals, and an AI-powered study assistant.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap justify-center gap-2 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    {techBadges.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#cbd5e1' }}>
                            {t}
                        </span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <Link to="/signup" className="btn-primary text-base px-8 py-4 no-underline inline-block">
                        🚀 Get Started Free
                    </Link>
                    <Link to="/subjects" className="btn-secondary text-base px-8 py-4 no-underline inline-block">
                        📚 Browse Subjects
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
                    {stats.map(s => (
                        <div key={s.label} className="glass-card p-4 text-center">
                            <div className="font-heading font-bold text-2xl gradient-text">{s.value}</div>
                            <div className="text-slate-400 text-xs mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
                    <div className="w-1 h-2 bg-white/60 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;