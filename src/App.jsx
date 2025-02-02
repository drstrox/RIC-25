import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { IconNameNavbar } from './Routes/Nav';
import { Footer } from './Routes/Footer';
import { Cards } from './Routes/Cards';
import { GalleryPage } from './Routes/Gallery';
import {Events} from './Routes/Events';
import Teams from './Routes/Teams';
import Merch from './Routes/Merch' ;
import Sponsers from './Routes/Sponsers' ;

function App() {
  return (
    <Router>

      <IconNameNavbar />
      
      

      <div className="bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/sponsers" element={<Sponsers />} />
      </Routes>
      </div>

      <Footer />
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
            setVisibleProjects((prev) => new Set([...prev, entry.target.dataset.id]));
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
      
      <div className="relative bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white min-h-screen overflow-hidden">
        {/* Full-Screen Spline Background */}
        <div className="absolute inset-0 z-0">
          <Spline
            scene="https://prod.spline.design/7z-xgqEIvhCOPl1E/scene.splinecode"
            className="w-full h-full "
          />
        </div>

        {/* Hero Section with Animated Text */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex items-center min-h-screen">
          <div className="max-w-full md:max-w-xl lg:w-1/2 space-y-4 sm:space-y-6">
            {/* Responsive Text Sizing */}
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text animate-line-draw">
                Research
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text animate-line-draw">
                &amp;
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-5.5xl font-bold gradient-text animate-line-draw">
                Industrial Conclave
              </h1>
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4 sm:mt-6">
              Pioneering interdisciplinary research and bridging the gap between
              academic innovation and industrial implementation at IIT Indore.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
              <a
                href="https://rnd.iiti.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="
      w-full sm:w-auto 
      px-6 py-3 
      bg-opacity-30 backdrop-blur-md bg-[#0a192f] shadow-lg
      rounded-full 
      text-white 
      relative 
      overflow-hidden 
      transform transition-all duration-300 
      hover:scale-[1.02]
      active:translate-y-1
      shadow-xl
      hover:shadow-2xl
      before:absolute 
      before:inset-0 
      before:bg-white 
      before:opacity-0 
      before:transition-opacity 
      hover:before:opacity-10
      3d-button
    "
              >
                <span className="relative z-10">Explore Research</span>
              </a>

              {/* Join Our Network Button */}
              <a
                href="https://www.instagram.com/ric.iiti/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full sm:w-auto 
                  px-6 py-3 
                  border border-blue-300 
                  text-blue-300 
                  rounded-full 
                  relative 
                  overflow-hidden 
                  transform transition-all duration-300 
                  hover:scale-[1.02]
                  active:translate-y-1
                  shadow-xl
                  hover:shadow-2xl
                  before:absolute 
                  before:inset-0 
                  before:bg-white 
                  before:opacity-0 
                  before:transition-opacity 
                  hover:before:opacity-10
                  threed-button
                "
                onClick={() => navigate('/network')}
              >
                <span className="relative z-10">Join Our Network</span>
              </a>
            </div>

          </div>
        </div>

        {/* Mobile Background Overlay */}
        <div className="absolute inset-0 bg-black/40 md:hidden z-5"></div>
      </div>
      
            <Cards/>

    </div>
  );
};



// Other pages (for routing purposes)
const ProjectsPage = () => <div>Projects Page</div>;

const SettingsPage = () => <div>Settings Page</div>;
const CalendarPage = () => <div>Calendar Page</div>;



