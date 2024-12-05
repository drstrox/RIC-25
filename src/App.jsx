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
       
 
       <Footer/>
      
    </Router>
  );
}

export default App;

// HomePage Component
import { useEffect, useState, useRef } from 'react';


const HomePage = () => {
  

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
            scene="https://prod.spline.design/7z-xgqEIvhCOPl1E/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      
      <Cards />

      <div className="carousel-wrapper mx-auto mt-12">
        <div className="carousel">
          <div className="item">
            <img
              src="https://logo.clearbit.com/apple.com"
              alt="Apple"
            />
          </div>
          <div className="item">
            <img
              src="https://logo.clearbit.com/google.com"
              alt="Google"
            />
          </div>
          <div className="item">
            <img
              src="https://logo.clearbit.com/amazon.com"
              alt="Amazon"
            />
          </div>
          <div className="item">
            <img
              src="https://logo.clearbit.com/microsoft.com"
              alt="Microsoft"
            />
          </div>
          <div className="item">
            <img
              src="https://logo.clearbit.com/facebook.com"
              alt="Facebook"
            />
          </div>
          <div className="item">
            <img
              src="https://logo.clearbit.com/netflix.com"
              alt="Netflix"
            />
          </div>
          <div className="item">
            <img
              src="https://logo.clearbit.com/tesla.com"
              alt="Tesla"
            />
          </div>
          <div className="item">
            <img
              src="https://logo.clearbit.com/nike.com"
              alt="Nike"
            />
          </div>
          <div className="item">
            <img
              src="https://logo.clearbit.com/adidas.com"
              alt="Adidas"
            />
          </div>
          <div className="item">
            <img
              src="https://logo.clearbit.com/coca-cola.com"
              alt="Coca-Cola"
            />
          </div>
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



