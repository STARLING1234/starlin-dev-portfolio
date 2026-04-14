import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ArrowRight, Sparkles, Terminal, Zap } from 'lucide-react';

const Skills = () => {
  const technicalSkills = {
    'Programming Languages': { items: ['HTML', 'CSS', 'JavaScript'], color: 'from-blue-500 to-cyan-500' },
    'Frameworks & Libraries': { items: ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'Laravel', 'Redux', 'Socket.io'], color: 'from-green-500 to-emerald-500' },
    'Databases': { items: ['PostgreSQL', 'MySQL'], color: 'from-purple-500 to-pink-500' },
    'Real-Time & Notifications': { items: ['FCM (Firebase Cloud Messaging)', 'APN (Apple Push Notification)'], color: 'from-orange-500 to-red-500' },
    'CMS & Deployment': { items: ['WordPress', 'cPanel', 'Linux Server Deployment'], color: 'from-pink-500 to-purple-500' },
    'Other': { items: ['REST APIs', 'Authentication & Authorization', 'Role-Based Access Control'], color: 'from-indigo-500 to-blue-500' }
  };

  const softSkills = [
    'Team Collaboration',
    'Time Management',
    'Problem Solving',
    'Adaptability & Flexibility',
    'Willingness to Learn'
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
            <Terminal size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm">Expertise</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technicalSkills).map(([category, data], index) => (
            <div key={category} className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`bg-gradient-to-r ${data.color} p-3 rounded-lg`}>
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {data.items.map((skill, i) => (
                  <span key={i} className="group bg-slate-900/50 hover:bg-slate-900/80 text-purple-200 px-4 py-2 rounded-lg text-sm border border-purple-500/30 hover:border-purple-500 transition-all hover:scale-105 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8 animate-on-scroll">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Soft Skills
            </h3>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 animate-on-scroll">
            <div className="flex flex-wrap gap-4 justify-center">
              {softSkills.map((skill, i) => (
                <div key={i} className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 hover:border-purple-500/60 rounded-lg px-6 py-3 transition-all hover:scale-105 group">
                  <span className="text-purple-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;