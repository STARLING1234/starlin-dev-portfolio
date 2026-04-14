import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ArrowRight, Sparkles, Terminal, Zap, ExternalLink, Calendar, Users, Shield, Database, MessageSquare, Video, MapPin, Bell } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: 'Nurture',
      tech: 'React.js + Node.js',
      description: 'Developed a hospital management system with modules for Physicians, Parents, and Admins.',
      details: 'Implemented appointment scheduling and real-time communication features.',
      icon: <Users className="w-6 h-6" />,
      features: [
        { icon: <Users className="w-4 h-4" />, text: 'Physicians Module' },
        { icon: <Users className="w-4 h-4" />, text: 'Parents Portal' },
        { icon: <Shield className="w-4 h-4" />, text: 'Admin Dashboard' },
        { icon: <Calendar className="w-4 h-4" />, text: 'Appointment Scheduling' },
        { icon: <MessageSquare className="w-4 h-4" />, text: 'Real-time Communication' }
      ],
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
    },
    {
      name: 'PickupDrop',
      tech: 'React.js + Node.js',
      description: 'Developed real-time task assignment, chat, voice calls, and live driver–customer tracking.',
      details: 'Integrated FCM and APNs for push notifications. Built secure REST APIs using Node.js and Express.js for admin and driver workflows.',
      icon: <MapPin className="w-6 h-6" />,
      features: [
        { icon: <MapPin className="w-4 h-4" />, text: 'Live Driver Tracking' },
        { icon: <MessageSquare className="w-4 h-4" />, text: 'Real-time Chat' },
        { icon: <Video className="w-4 h-4" />, text: 'Voice Calls' },
        { icon: <Bell className="w-4 h-4" />, text: 'FCM & APN Push Notifications' },
        { icon: <Database className="w-4 h-4" />, text: 'Secure REST APIs' }
      ],
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20'
    },
    {
      name: '11Systems',
      tech: 'React.js + Node.js',
      description: 'Built physician, patient, and admin portals.',
      details: 'Implemented appointment management, patient monitoring, chat, and video call features.',
      icon: <Users className="w-6 h-6" />,
      features: [
        { icon: <Users className="w-4 h-4" />, text: 'Physician Portal' },
        { icon: <Users className="w-4 h-4" />, text: 'Patient Portal' },
        { icon: <Shield className="w-4 h-4" />, text: 'Admin Portal' },
        { icon: <Calendar className="w-4 h-4" />, text: 'Appointment Management' },
        { icon: <Video className="w-4 h-4" />, text: 'Video Calls' }
      ],
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
    },
    {
      name: 'Swim School',
      tech: 'Laravel',
      description: 'Designed a multi-tenant architecture where Super Admin creates client portals with separate databases.',
      details: 'Developed modules for students, coaches, programs, levels, skills, and attendance. Implemented secure role-based access control.',
      icon: <Database className="w-6 h-6" />,
      features: [
        { icon: <Database className="w-4 h-4" />, text: 'Multi-tenant Architecture' },
        { icon: <Users className="w-4 h-4" />, text: 'Student Management' },
        { icon: <Users className="w-4 h-4" />, text: 'Coach Management' },
        { icon: <Calendar className="w-4 h-4" />, text: 'Attendance Tracking' },
        { icon: <Shield className="w-4 h-4" />, text: 'Role-based Access Control' }
      ],
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-500/20 to-red-500/20'
    },
    {
      name: 'TNFD Application',
      tech: 'Laravel',
      description: 'Developed a multi-role login platform for the Tamil Nadu Forest Department.',
      details: 'Streamlined application processing, workflow management, and department-level operations.',
      icon: <Shield className="w-6 h-6" />,
      features: [
        { icon: <Shield className="w-4 h-4" />, text: 'Multi-role Login' },
        { icon: <Users className="w-4 h-4" />, text: 'Department Management' },
        { icon: <Calendar className="w-4 h-4" />, text: 'Application Processing' },
        { icon: <Database className="w-4 h-4" />, text: 'Workflow Management' },
        { icon: <Shield className="w-4 h-4" />, text: 'Secure Operations' }
      ],
      color: 'from-indigo-500 to-purple-500',
      gradient: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
            <Zap size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm">Portfolio</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Click on any project to explore detailed features and implementation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Project Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`bg-gradient-to-br ${project.color} p-3 rounded-xl group-hover:scale-110 transition-transform shadow-lg`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.name}</h3>
                  </div>
                  <div className="text-purple-400 group-hover:rotate-180 transition-transform duration-500">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Tech Stack Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30 hover:border-purple-500/60 transition-colors">
                    {project.tech}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-500 ${selectedProject === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pt-4 border-t border-purple-500/20">
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.details}</p>
                    
                    {/* Features Grid */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors p-2 rounded-lg hover:bg-purple-900/30">
                            <div className={`text-purple-400 group-hover:text-purple-300 transition-colors`}>
                              {feature.icon}
                            </div>
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* View More Button */}
                <button className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium group">
                  <span>{selectedProject === index ? 'Show Less' : 'View Details'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedProject === index ? 'rotate-90' : ''}`} />
                </button>
              </div>
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;