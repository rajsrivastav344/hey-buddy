import React from "react";
import founderImg from "../assets/founder.jpeg";

const About = () => {
    return (
        <div className="about-bg min-h-screen px-6 py-12 flex justify-center">

            {/* Glass Container */}
            <div className="relative z-10 max-w-5xl w-full bg-white/10 backdrop-blur-xl shadow-lg rounded-2xl p-8 border border-white/20">

                {/* ===================== */}
                {/* TITLE */}
                {/* ===================== */}
                <h1 className="text-4xl font-bold text-center text-white mb-8">
                    About Hey Buddy 🚀
                </h1>

                {/* ===================== */}
                {/* ABOUT WEBSITE */}
                {/* ===================== */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold text-white mb-3">
                        📘 About the Website
                    </h2>

                    <p className="text-gray-200 text-lg leading-7 mb-4">
                        <strong>Hey Buddy</strong> is a student-focused learning platform
                        designed to simplify academic life and make studying more efficient.
                        It brings together all essential study materials in one place.
                    </p>

                    <p className="text-gray-200 text-lg leading-7">
                        Students can access notes, previous year questions (PYQs),
                        lab files, ready-made projects, and an AI chatbot for instant help.
                        The goal is to reduce confusion and improve learning speed.
                    </p>
                </div>

                {/* ===================== */}
                {/* FEATURES */}
                {/* ===================== */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-3">
                        🚀 Key Features
                    </h2>

                    <ul className="list-disc pl-6 text-gray-200 space-y-2">
                        <li>Subject-wise Notes</li>
                        <li>Previous Year Questions (PYQs)</li>
                        <li>Ready-made Projects</li>
                        <li>Lab Assignments</li>
                        <li>AI Chatbot Assistance</li>
                        <li>Secure Authentication System</li>
                    </ul>
                </div>

                {/* ===================== */}
                {/* FOUNDER SECTION */}
                {/* ===================== */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 border border-white/20">

                    {/* Founder Image */}
                    <img
                        src={founderImg}
                        alt="Founder"
                        className="w-36 h-36 rounded-full object-cover border-4 border-indigo-400 shadow-lg"
                    />

                    {/* Founder Details */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            👨‍💻 Founder
                        </h2>

                        <p className="text-gray-200 text-lg leading-7">
                            <strong>Raj Srivastav</strong> is the founder and developer of Hey Buddy.
                            He is passionate about full-stack development, system design,
                            and building tools that help students learn more effectively.
                        </p>

                        <p className="text-gray-300 mt-3">
                            Built using MERN Stack (MongoDB, Express, React, Node.js) and deployed
                            on modern cloud platforms like Vercel and Render.
                        </p>
                    </div>
                </div>

                {/* ===================== */}
                {/* FOOTER */}
                {/* ===================== */}
                <div className="text-center text-gray-300 mt-10 text-sm">
                    © {new Date().getFullYear()} Hey Buddy. All rights reserved.
                </div>

            </div>
        </div>
    );
};

export default About;