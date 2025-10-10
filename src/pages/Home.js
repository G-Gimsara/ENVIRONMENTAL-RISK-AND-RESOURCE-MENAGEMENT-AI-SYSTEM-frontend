import React, { useState, useEffect } from 'react';
import { 
  Droplets, Thermometer, AlertTriangle, Car, ArrowRight, 
  Star, Award, Users, TrendingUp, Brain, Cpu, Database, Shield 
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigationCards = [
    {
      title: 'AI & IoT Marine Monitoring',
      description: 'Real-time water quality monitoring using AI and IoT sensors.',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-400',
      features: ['Real-time Monitoring', 'AI Analysis', 'IoT Sensors']
    },
    {
      title: 'Urban Heat Island Prediction',
      description: 'Deep learning models forecast urban heat with smart alerts.',
      icon: Thermometer,
      color: 'from-red-400 to-orange-300',
      features: ['Heat Prediction', 'Alert System', 'Urban Planning']
    },
    {
      title: 'Flood Risk Prediction',
      description: 'Flood monitoring with early warning and comprehensive risk assessment.',
      icon: AlertTriangle,
      color: 'from-blue-600 to-gray-400',
      features: ['Flood Prediction', 'Early Warning', 'Risk Assessment']
    },
    {
      title: 'Vehicle Air Quality Monitoring',
      description: 'Mobile air quality analysis with AI-powered real-time insights.',
      icon: Car,
      color: 'from-green-400 to-teal-300',
      features: ['Mobile Monitoring', 'AI Analysis', 'Real-time Data']
    }
  ];

  const stats = [
    { icon: Brain, value: 'AI-Powered', label: 'Machine Learning' },
    { icon: Cpu, value: 'Real-time', label: 'Processing' },
    { icon: Database, value: 'IoT', label: 'Integration' },
    { icon: Shield, value: 'Secure', label: 'Data Protection' }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-gradient-background"></div>
      <div className="absolute inset-0">
        {/* Floating shapes */}
        <div className="absolute w-40 h-40 bg-blue-500/10 rounded-full blur-3xl top-10 left-20 animate-pulse-slow"></div>
        <div className="absolute w-32 h-32 bg-pink-400/10 rounded-full blur-2xl top-64 right-20 animate-pulse-slow delay-500"></div>
        <div className="absolute w-48 h-48 bg-green-400/10 rounded-full blur-3xl bottom-20 left-1/3 animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <header className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-6 py-24 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 mx-auto shadow-md">
              <Star className="w-4 h-4 text-white mr-2" />
              <span className="text-white/90 text-sm font-medium">Final Year Research Project</span>
              <Award className="w-4 h-4 text-white ml-2" />
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Environmental Risk & Resource Management AI System
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              AI-powered environmental monitoring integrating IoT sensors and machine learning for real-time analytics, risk assessment, and resource optimization.
            </p>

            {/* Hero Buttons */}
            <div className="flex justify-center gap-6">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium shadow-lg transition-all">
                Explore Modules
              </button>
              <button className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-full text-white font-medium transition-all">
                Learn More
              </button>
            </div>

            {/* Status Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-sm">
                <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
                <span className="text-white font-medium">AI System Active</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-sm">
                <Users className="w-4 h-4 text-white mr-2" />
                <span className="text-white font-medium">Research Team</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-sm">
                <TrendingUp className="w-4 h-4 text-white mr-2" />
                <span className="text-white font-medium">Advanced Analytics</span>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-6 mb-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Modules */}
        <section className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-6 pb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">Research Modules</h2>
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-12">
              Comprehensive AI-powered environmental monitoring and risk assessment systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {navigationCards.map((card, idx) => (
                <div key={idx} className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                  <div className={`relative overflow-hidden rounded-3xl backdrop-blur-md border border-white/20 bg-white/5 p-8 h-full shadow-lg hover:shadow-xl transition-all`}>
                    <div className={`inline-flex p-4 rounded-2xl ${card.color} mb-6 items-center justify-center shadow-md`}>
                      <card.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-white/70 mb-4 text-sm">{card.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {card.features.map((f, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white/80">
                          {f}
                        </span>
                      ))}
                    </div>
                    <button className="mt-auto inline-flex items-center text-sm font-medium text-white group-hover:text-blue-300 transition-all">
                      <span className="mr-2">View Module</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Stats */}
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70">Continuous Monitoring</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-white mb-2">AI-Powered</div>
              <div className="text-white/70">Risk Assessment</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-white mb-2">Real-time</div>
              <div className="text-white/70">Data Analytics</div>
            </div>
          </div>
        </section>
      </div>

      {/* Additional Styles for Animations */}
      <style>{`
        @keyframes gradient-background {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-background {
          background: linear-gradient(270deg, #1e3a8a, #0ea5e9, #22c55e, #f59e0b);
          background-size: 800% 800%;
          animation: gradient-background 20s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse 6s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
