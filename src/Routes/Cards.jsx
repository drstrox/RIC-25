import React, { useState, useEffect, useRef } from "react";
import "./Cards.css";

const Card = ({ dataImage, header, content }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const { offsetWidth, offsetHeight } = cardRef.current;
    setDimensions({ width: offsetWidth, height: offsetHeight });
  }, []);

  const handleMouseMove = (e) => {
    const { left, top } = cardRef.current.getBoundingClientRect();
    setMouseX(e.clientX - left - dimensions.width / 2);
    setMouseY(e.clientY - top - dimensions.height / 2);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  };

  const mousePX = mouseX / dimensions.width;
  const mousePY = mouseY / dimensions.height;

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.8s ease-in-out, transform 0.8s cubic-bezier(0.445, 0.05, 0.55, 0.95)",
    transformOrigin: "center center",
    transformStyle: "preserve-3d",
  };

  const cardBgStyle = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      className={`card-wrap ${isVisible ? 'visible' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={cardBgStyle}></div>
        <div className="card-info">
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
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
      content:
        "Co-founder and CEO of Banva Technologies Service Pvt. Ltd. ",
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

export { Cards };