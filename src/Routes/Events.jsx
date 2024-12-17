import React, { useState } from 'react';
import './Events.css';

const eventsData = [
  {
    title: "PS by Industry",
    image: "event/problem statement.jpg",
    description: "Every industry faces unique challenges that demand innovative solutions. From digital transformation in tech to streamlining operations in manufacturing, businesses must adapt to constant change. Retail struggles with customer retention, healthcare with data security, and finance with compliance.",
  },
  {
    title: "3 MINUTE THESIS",
    image: "https://via.placeholder.com/400",
    description: "3 Minute Thesis (3MT) is a dynamic competition where researchers present their work in just three minutes. The challenge is to explain complex ideas in a clear, engaging way using only one static slide. It's a great opportunity to showcase research diversity and refine communication skills.",
  },
  {
    title: "BTP Showcase",
    image: "event/project.jpg",
    description: "The B.Tech Project (BTP) is a platform for final-year students to showcase the skills and knowledge they've developed during their undergraduate journey. It allows students to dive deep into their chosen fields, tackling real-world problems and exploring innovative solutions.",
  },
  {
    title: "PROJECT SHOWCASE",
    image: "https://via.placeholder.com/400",
    description: "Project Showcase is an event where students and professionals present their innovative projects, demonstrating creativity and technical skills. It's an opportunity to share solutions to real-world challenges, highlight hands-on learning, and inspire others.",
  },
  {
    title: "SCIENTIFIC QUIZ",
    image: "https://via.placeholder.com/400",
    description: "Scientific Quiz is a fun and engaging event that challenges participants to test their knowledge across a wide range of scientific topics. By joining, you not only get to compete in an intellectually stimulating environment but also enhance your understanding of science.",
  },
  {
    title: "STARTUP EXPO",
    image: "event/startup.jpg",
    description: "Startup Expo brings together innovative startups to showcase groundbreaking ideas and products. It is an opportunity to connect with entrepreneurs, industry leaders, and investors while exploring the latest trends and technologies.",
  },
  {
    title: "POSTER, MODEL, ORAL PRESENTATION",
    image: "https://via.placeholder.com/400",
    description: "An exciting event featuring a dynamic combination of Poster, Model, and Oral Presentations. Students will design eye-catching posters, build intricate models, and present their work to a panel of judges and peers.",
  },
  {
    title: "MODEL EXHIBITION FOR SCHOOLS",
    image: "https://via.placeholder.com/400",
    description: "A Model Exhibition where young minds can showcase their creativity and innovation. This event will feature a wide variety of student-built models, ranging from scientific inventions to architectural designs.",
  },
];

export const Events = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="events-section container">
      <h2 className="events-title">OUR EVENTS</h2>
      <div className="events-grid">
        {eventsData.map((event, index) => (
          <div 
            className={`event-card ${activeCard === index ? 'active' : ''}`} 
            key={index}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="event-card-inner">
              <div className="event-front">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="event-image"
                />
              </div>
              <div className="event-back">
                <h3 className="event-name">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <a href="#" className="event-register-btn">Register Here</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};