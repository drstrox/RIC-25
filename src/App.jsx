import React from 'react';
import { 
  Home, Users, ShoppingBag, 
  Github, Instagram, Linkedin, Twitter,
  ArrowRight, Zap, Lightbulb, Award 
} from 'lucide-react';
import Spline from '@splinetool/react-spline';

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'Innovative Robotics',
    description: 'Cutting-edge robotic solutions for industrial automation',
    icon: Zap,
    gradient: 'from-blue-600 to-purple-700'
  },
  {
    id: 2,
    title: 'AI Research Nexus',
    description: 'Breakthrough artificial intelligence applications',
    icon: Lightbulb,
    gradient: 'from-green-600 to-teal-700'
  },
  {
    id: 3,
    title: 'Sustainable Tech',
    description: 'Eco-friendly technological innovations',
    icon: Award,
    gradient: 'from-yellow-600 to-orange-700'
  }
];

const NAVIGATION_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#team', label: 'Team' }
];

const RICWebsite = () => {
  return (
    <div className="bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#112240]/80 backdrop-blur-xl shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-blue-300 tracking-wider">
              RIC
              <span className="text-xs ml-2 bg-blue-500 text-white px-2 py-1 rounded-full">
                IIT Indore
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <a 
                key={href} 
                href={href} 
                className="nav-link group"
              >
                {label}
                <span className="nav-underline"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition"
            >
              Connect
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-24 md:flex items-center min-h-screen relative">
        <div className="md:w-1/2 space-y-6 z-10 relative">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Research & Industrial Conclave
          </h1>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Pioneering interdisciplinary research and bridging the gap between 
            academic innovation and industrial implementation at IIT Indore.
          </p>
          
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full hover:scale-105 transform transition">
              Explore Research
            </button>
            <button className="px-6 py-3 border border-blue-300 text-blue-300 rounded-full hover:bg-blue-300 hover:text-[#0a192f] transition">
              Join Our Network
            </button>
          </div>
        </div>

        {/* Spline Element */}
        <div className="md:w-1/2 h-[500px] md:h-[600px] absolute right-0 top-1/2 transform -translate-y-1/2">
          <Spline 
            scene="https://prod.spline.design/DjL6R785oPYTASzy/scene.splinecode" 
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Our Breakthrough Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id}
                className={`p-6 rounded-2xl bg-gradient-to-br ${project.gradient} transform hover:-translate-y-4 transition-all duration-300 shadow-2xl`}
              >
                <Icon className="mb-4 text-white" size={36} />
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <a href="#" className="flex items-center text-white hover:text-white/80">
                  Learn More <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#112240] py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">RIC</h3>
            <p className="text-gray-300">
              Driving innovation at the intersection of research and industry.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-4">Quick Links</h4>
            <div className="space-y-2">
              {NAVIGATION_LINKS.map(({ href, label }) => (
                <a 
                  key={href} 
                  href={href} 
                  className="block hover:text-blue-300 transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[Github, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-blue-300 transition"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 border-t border-gray-700 pt-4">
          © 2024 Research and Industrial Conclave, IIT Indore
        </div>
      </footer>
    </div>
  );
};

export default RICWebsite;