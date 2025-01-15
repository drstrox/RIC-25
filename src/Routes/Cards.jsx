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
      image: "https://images.pexels.com/photos/6942667/pexels-photo-6942667.jpeg",
      header: "Narendra Sarawgi",
      content:
        "Discover the wonders of the Amazon Rainforest, home to diverse wildlife and vibrant greenery.",
    },
    {
      image: "https://images.pexels.com/photos/87419/canyon-gorge-antelope-canyon-tourist-attraction-87419.jpeg",
      header: "Dr. Pronobesh Chattopadhyay ",
      content:
        " PhD, Scientist F, Defence Research Laboratory, DRDO, Ministry of Defence, Tezpur – 784001 ",
    },
    {
      image: "https://images.pexels.com/photos/2525899/pexels-photo-2525899.jpeg",
      header: "Col Pratyush Kumar Singh Gaur",
      content:
        "Chief Executive Officer at Meer Group of Institutions Military Veteran | Ex Vice President Morgan Stanley Operations Management | LSSBB | LSSGB | CSM® ",
    },
    {
      image: "https://images.pexels.com/photos/6942667/pexels-photo-6942667.jpeg",
      header: "Rahul Shivaji Pawar",
      content: "Co-founder and CEO of Banva Technologies"
    },
    {
      image: "/api/placeholder/400/500",
      header: "Shivam Ahuja",
      content: "Founder and CEO of SkillCircle, Founder Delhi Angels"
    }
  ];

  const pastSpeakers = [
    {
      image: "/api/placeholder/400/500",
      header: "Narendra Sarawgi",
      content: "Technology Leader & Innovation Expert"
    },
    {
      image: "https://images.pexels.com/photos/6942667/pexels-photo-6942667.jpeg",
      header: "Shivam Ahuja ",
      content:
        "Founder and CEO of SkillCircle, Founder Delhi Angels ",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#0a192f] py-10">
      <div className="cards - container mx-auto px-2">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Speakers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              dataImage={card.image}
              header={card.header}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
    
  );
};



export {Cards};