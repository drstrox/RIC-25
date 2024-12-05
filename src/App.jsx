import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { IconNameNavbar } from './Routes/Nav';
import { ArrowRight } from 'react-feather'; // Assuming you're using `react-feather` for icons
import { Footer } from './Routes/Footer';
import { Cards } from './Routes/Cards';


function App() {
  return (
    <Router>
     
      <IconNameNavbar />

      {/* Main content and routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
       
      <Cards />
       <Footer/>
      
    </Router>
  );
}

export default App;

// HomePage Component
import { useEffect, useState, useRef } from 'react';


const HomePage = () => {
  const FEATURED_PROJECTS = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1.',
      icon: 'https://images.pexels.com/photos/6942667/pexels-photo-6942667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-teal-400 to-blue-500',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2.',
      icon: 'https://example.com/icon2.svg',
      gradient: 'from-purple-600 to-pink-500',
    },
    // Add more projects as needed
  ];

  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set(prev).add(entry.target));
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-24 md:flex items-center min-h-screen relative">
        <div className="md:w-1/2 space-y-6 z-10 relative">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Research & Industrial Conclave
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Pioneering interdisciplinary research and bridging the gap between academic innovation and industrial implementation at IIT Indore.
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
          {FEATURED_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`p-6 rounded-2xl bg-gradient-to-br ${project.gradient} transform transition-all duration-700 ${
                visibleProjects.has(projectRefs.current[index])
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } shadow-2xl`}
            >
              <img
                src={project.icon}
                alt={project.title}
                className="mb-4 text-white"
                style={{ width: '36px', height: '36px' }}
              />
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              <a
                href="#"
                className="flex items-center text-white hover:text-white/80"
              >
                Learn More <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



// Other pages (for routing purposes)
const ProjectsPage = () => <div>Projects Page</div>;
const TeamPage = () => <div>Team Page</div>;
const SettingsPage = () => <div>Settings Page</div>;
const CalendarPage = () => <div>Calendar Page</div>;



// // Projects and Social Links for reference
// const FEATURED_PROJECTS = [
//   {
//     id: 1,
//     title: 'Innovative Robotics',
//     description: 'Cutting-edge robotic solutions for industrial automation',
//     icon: Zap,
//     gradient: 'from-blue-600 to-purple-700',
//   },
//   {
//     id: 2,
//     title: 'AI Research Nexus',
//     description: 'Breakthrough artificial intelligence applications',
//     icon: Lightbulb,
//     gradient: 'from-green-600 to-teal-700',
//   },
//   {
//     id: 3,
//     title: 'Sustainable Tech',
//     description: 'Eco-friendly technological innovations',
//     icon: Award,
//     gradient: 'from-yellow-600 to-orange-700',
//   },
// ];


// export default RICWebsite;
