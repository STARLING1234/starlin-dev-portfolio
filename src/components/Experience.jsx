import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ArrowRight, Sparkles, Terminal, Zap, Calendar, MapPin, Building, TrendingUp, Users, Server, Globe } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  
  const achievements = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: '5+ Major Projects Delivered',
      description: 'Successfully delivered complex full-stack applications across healthcare, logistics, and government sectors'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Multi-Role Development',
      description: 'Handled frontend, backend, database design, and deployment responsibilities'
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: 'Production Deployment',
      description: 'Managed Linux server deployments using cPanel and handled production environments'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Real-time Features',
      description: 'Implemented live tracking, push notifications, chat, and video calling capabilities'
    }
  ];

  const responsibilities = [
    'Full-stack application development using React.js, Node.js, and Laravel',
    'Database design and management with PostgreSQL and MySQL',
    'REST API development with authentication and authorization',
    'Real-time feature implementation using Socket.io',
    'Push notification integration (FCM & APNs)',
    'Multi-tenant architecture design and implementation',
    'Production deployment and server maintenance',
    'WordPress customization and CMS management'
  ];

  const technologies = [
    { name: 'Frontend', items: ['React.js', 'JavaScript', 'HTML/CSS', 'Bootstrap'], color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', items: ['Node.js', 'Express.js', 'Laravel', 'PHP'], color: 'from-green-500 to-emerald-500' },
    { name: 'Database', items: ['PostgreSQL', 'MySQL'], color: 'from-purple-500 to-pink-500' },
    { name: 'Tools', items: ['Socket.io', 'FCM', 'APNs', 'cPanel', 'WordPress'], color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
            <Briefcase size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm">Career Journey</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg">2.10 years of full-stack development excellence</p>
        </div>

        {/* Main Experience Card */}
        <div className="relative animate-on-scroll mb-12">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 ml-0 md:ml-4">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="hidden md:block bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl shadow-lg shadow-purple-500/50 animate-pulse-slow">
                <Briefcase size={40} className="text-white" />
              </div>
              
              <div className="flex-1">
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">Full Stack Web Developer</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <Building className="text-gray-400" size={20} />
                        <p className="text-xl text-gray-300">Agnitio Systems</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>March 28, 2023 – January 23, 2026</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 bg-green-900/30 px-4 py-2 rounded-full border border-green-500/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">2.10 Years</span>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['achievements', 'responsibilities', 'technologies'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-full font-medium transition-all capitalize ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                          : 'bg-slate-700/50 text-gray-400 hover:bg-slate-700 hover:text-gray-300 border border-purple-500/20'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="animate-fade-in">
                  {activeTab === 'achievements' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {achievements.map((achievement, i) => (
                        <div key={i} className="bg-slate-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all group">
                          <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg text-white group-hover:scale-110 transition-transform">
                              {achievement.icon}
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-purple-400 mb-2">{achievement.title}</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'responsibilities' && (
                    <div className="space-y-4">
                      {responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300 p-3 rounded-lg hover:bg-purple-900/20">
                          <ChevronRight className="text-purple-400 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" size={20} />
                          <p className="text-gray-300">{resp}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'technologies' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {technologies.map((tech, i) => (
                        <div key={i} className="bg-slate-900/30 p-6 rounded-xl border border-purple-500/20">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`bg-gradient-to-r ${tech.color} p-2 rounded-lg`}></div>
                            <h4 className="text-lg font-semibold text-purple-400">{tech.name}</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {tech.items.map((item, j) => (
                              <span key={j} className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Stats */}
      <div className="grid md:grid-cols-4 gap-6 animate-on-scroll">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-2xl border border-purple-500/30 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
          <p className="text-gray-400">Projects Delivered</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-2xl border border-blue-500/30 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">2.10</div>
          <p className="text-gray-400">Years Experience</p>
        </div>
        <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-2xl border border-green-500/30 text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
          <p className="text-gray-400">Client Satisfaction</p>
        </div>
        <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-6 rounded-2xl border border-orange-500/30 text-center">
          <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
          <p className="text-gray-400">Support Available</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;