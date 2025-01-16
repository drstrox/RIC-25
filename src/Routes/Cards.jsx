import React, { useState, useEffect, useRef } from "react";

const Card = ({ dataImage, header, content }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
      const { offsetWidth, offsetHeight } = cardRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - dimensions.width / 2,
      y: e.clientY - rect.top - dimensions.height / 2
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const mousePX = mousePosition.x / dimensions.width;
  const mousePY = mousePosition.y / dimensions.height;

  return (
    <div
      ref={cardRef}
      className={`group relative w-full aspect-[3/4] rounded-xl transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-sm transform transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${mousePX * 20}deg) rotateX(${mousePY * -20}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center rounded-xl transform transition-transform duration-300"
          style={{
            backgroundImage: `url(${dataImage || '/api/placeholder/400/500'})`,
            transform: `translateX(${mousePX * -20}px) translateY(${mousePY * -20}px)`,
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/40 rounded-xl">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{header}</h3>
            <p className="text-sm opacity-90">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeakerGrid = ({ speakers = [], title = "Speakers" }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#0a192f] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          {title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              dataImage={speaker.image}
              header={speaker.header}
              content={speaker.content}
            />
          ))}
        </div>
      </div>
    </div>
    
  );
};


const Cards = () => {
  const currentSpeakers = [
    {
      image: "https://th.bing.com/th/id/OIP.m2aDtE-s-hqIIE4y2L2riwAAAA?rs=1&pid=ImgDetMain",
      header: "Narendra Sarawgi",
      content: "Technology Leader & Innovation Expert"
    },
    {
      image: "/speakers/pronobesh.jpg",
      header: "Dr. Pronobesh Chattopadhyay",
      content: "PhD, Scientist F, Defence Research Laboratory, DRDO"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5603AQFKo4PU4e0mkA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677787905638?e=1742428800&v=beta&t=9PNG2xfdHsZyFb5vsLctIa8pB-NuMswf9RsVnPHNnpM",
      header: "Col Pratyush Kumar Singh Gaur",
      content: "CEO at Meer Group of Institutions, Military Veteran"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5603AQGboezFv6fq-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681050938039?e=1742428800&v=beta&t=GyGV3fyJoR1EA4Jr-6jhaXlRFtjohdbtE5pXvhnTftM",
      header: "Rahul Shivaji Pawar",
      content: "Co-founder and CEO of Banva Technologies"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/C5103AQGIY_zJMv5o2Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517044712571?e=1742428800&v=beta&t=95jb9l-oVZFk1NJ9ENFM0HyLw-ZOZEsKlBwef6rlc9w",
      header: "Shivam Ahuja",
      content: "Founder and CEO of SkillCircle, Founder Delhi Angels"
    }
  ];

  const pastSpeakers = [
    {
      image: "https://th.bing.com/th/id/OIP.-s2E25mBHuW1AClLfVgzpQHaHa?rs=1&pid=ImgDetMain",
      header: "Anita Gupta",
      content: "Head of Innovation and Enterpreneurship, Department of SnT"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/C4E03AQEyfNTpsY6CXQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516871993784?e=1742428800&v=beta&t=TpqO9FGndDw-Fo62EfPyKRX2pyJyXVbtAsPUzqZJE88",
      header: "Dr. Philip Josh",
      content: "Head of Product Development, Mahindra Last Mile Mobility Ltd."
    },
    {
      image: "https://th.bing.com/th/id/OIP.rVJbRkordzkVL9Qo8MOGmwAAAA?rs=1&pid=ImgDetMain",
      header: "Dr R Umamaheswarar",
      content: "Director, Human Space Flight Centre, Bangalore"
    },
    {
      image: "https://rndesignleadersummit.com/vhost/rndesignleadersummit.com/images/speaker/133348410235265980.jpg",
      header: "Mr. Sant Ranjan",
      content: "Chairman, Smart India Hackathon"
    },
    {
      image: "https://th.bing.com/th/id/OIP.NByFyfB1VQHtmMxCPIpzCQHaFj?w=230&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      header: "Mr. Gaurav Seth",
      content: "CEO, Pier Sight Space"
    }
  ];

  return (
    <div>
      <SpeakerGrid speakers={currentSpeakers} title="Current Speakers" />
      {pastSpeakers.length > 0 && (
        <SpeakerGrid speakers={pastSpeakers} title="Past Speakers" />
      )}
    </div>
  );
};



export { Cards };

