import React, { useState, useEffect, useRef } from "react";
import "./Cards.css";

const Card = ({ dataImage, header, content }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const cardRef = useRef(null);

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
  };

  const cardBgStyle = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      className="card-wrap"
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
      header: "Amazon Rainforest",
      content:
        "Discover the wonders of the Amazon Rainforest, home to diverse wildlife and vibrant greenery.",
    },
    {
      image: "https://images.pexels.com/photos/87419/canyon-gorge-antelope-canyon-tourist-attraction-87419.jpeg",
      header: "Grand Canyon",
      content:
        "Experience the breathtaking views of the Grand Canyon, one of the Seven Natural Wonders of the World.",
    },
    {
      image: "https://images.pexels.com/photos/2525899/pexels-photo-2525899.jpeg",
      header: "Maldives",
      content:
        "Relax on the pristine beaches of the Maldives, renowned for their crystal-clear waters and luxurious resorts.",
    },
    {
      image: "https://images.pexels.com/photos/6942667/pexels-photo-6942667.jpeg",
      header: "Amazon Rainforest",
      content:
        "Discover the wonders of the Amazon Rainforest, home to diverse wildlife and vibrant greenery.",
    },
    {
      image: "https://images.pexels.com/photos/87419/canyon-gorge-antelope-canyon-tourist-attraction-87419.jpeg",
      header: "Grand Canyon",
      content:
        "Experience the breathtaking views of the Grand Canyon, one of the Seven Natural Wonders of the World.",
    },
    {
      image: "https://images.pexels.com/photos/2525899/pexels-photo-2525899.jpeg",
      header: "Maldives",
      content:
        "Relax on the pristine beaches of the Maldives, renowned for their crystal-clear waters and luxurious resorts.",
    }
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          dataImage={card.image}
          header={card.header}
          content={card.content}
        />
      ))}
    </div>
  );
};

export { Cards };