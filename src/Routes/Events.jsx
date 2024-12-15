import React, { useState } from 'react';
import "./Events.css";

const eventsData = [
  {
    title: "PROBLEM STATEMENTS BY INDUSTRY",
    image: "https://via.placeholder.com/400",
    description: "Every industry faces unique challenges that demand innovative solutions. From digital transformation in tech to streamlining operations in manufacturing, businesses must adapt to constant change. Retail struggles with customer retention, healthcare with data security, and finance with compliance. By addressing these pain points, we help industries embrace innovation and unlock new opportunities for growth.",
    formLink: "#",
  },
  {
    title: "3 MINUTE THESIS",
    image: "https://via.placeholder.com/400",
    description: "3 Minute Thesis (3MT) is a dynamic competition where researchers present their work in just three minutes. The challenge is to explain complex ideas in a clear, engaging way using only one static slide. It's a great opportunity to showcase the diversity of research, refine communication skills, and connect with a broader audience. 3MT is all about making research accessible and inspiring innovative thinking while highlighting its real-world impact.",
    formLink: "#",
  },
  {
    title: "THE B.TECH. PROJECT (BTP)",
    image: "https://via.placeholder.com/400",
    description: "The B.Tech Project (BTP) is a platform for final-year students to showcase the skills and knowledge they've developed during their undergraduate journey. It allows students to dive deep into their chosen fields, tackling real-world problems and exploring innovative solutions. BTPs highlight creativity, technical expertise, and a hands-on approach to learning. This initiative not only helps students refine their problem-solving abilities but also provides a chance to present their work to peers, mentors, and industry professionals.",
    formLink: "#",
  },
  {
    title: "PROJECT SHOWCASE",
    image: "https://via.placeholder.com/400",
    description: "Project Showcase is an event where students and professionals present their innovative projects, demonstrating creativity and technical skills. It's an opportunity to share solutions to real-world challenges, highlight hands-on learning, and inspire others. The showcase brings together diverse projects, encouraging collaboration and feedback while offering a platform for participants to gain recognition for their hard work and creativity.",
    formLink: "#",
  },
  {
    title: "SCIENTIFIC QUIZ",
    image: "https://via.placeholder.com/400",
    description: "Scientific Quiz is a fun and engaging event that challenges participants to test their knowledge across a wide range of scientific topics. It's a great way to sharpen your critical thinking, stay updated on the latest discoveries, and engage with like-minded individuals. By joining, you not only get to compete in an intellectually stimulating environment but also enhance your understanding of science, build your problem-solving skills, and gain recognition for your expertise. It's an opportunity to learn, network, and challenge yourself in a competitive yet collaborative setting.",
    formLink: "#",
  },
  {
    title: "STARTUP EXPO",
    image: "https://via.placeholder.com/400",
    description: "Startup Expo is an exciting event that brings together innovative startups to showcase their groundbreaking ideas and products. It is an opportunity to connect with entrepreneurs, industry leaders, and investors, while exploring the latest trends and technologies. By participating, you can gain valuable exposure for your startup, receive feedback, and expand your network. The Expo provides a platform to share your vision, attract potential partners, and unlock new opportunities, all while being part of a dynamic and inspiring entrepreneurial community.",
    formLink: "#",
  },
  {
    title: "POSTER , MODEL , ORAL PRESENTATION",
    image: "https://via.placeholder.com/400",
    description: "Get ready for an exciting event at our college that will ignite creativity and innovation! The upcoming event will feature a dynamic combination of Poster, Model, and Oral Presentations, offering participants the chance to showcase their unique ideas and research. Students will design eye-catching posters, build intricate models, and present their work to a panel of judges and peers. This event promises to be a thrilling experience, where creativity meets critical thinking, and communication skills take center stage. Don't miss out on this opportunity to be inspired, learn, and connect with bright minds from across the college!",
    formLink: "#",
  },
  {
    title: "MODEL EXHIBITION FOR SCHOOLS",
    image: "https://via.placeholder.com/400",
    description: "Our college is excited to host a Model Exhibition for schools, where young minds can showcase their creativity and innovation! This event will feature a wide variety of student-built models, ranging from scientific inventions to architectural designs. It's a fantastic opportunity for students to demonstrate their problem-solving skills and explore new ideas. With schools participating from all around, this exhibition promises to be an inspiring platform for learning, networking, and sparking curiosity. Join us for a day of creativity, exploration, and hands-on learning!",
    formLink: "#",
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
                <div className="event-image-container">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="event-image"
                  />
                </div>
                <div className="event-front-content">
                  <h3 className="event-name">{event.title}</h3>
                </div>
              </div>
              <div className="event-back">
                <p className="event-description">{event.description}</p>
                <a href={event.formLink} className="event-register-btn">
                  Register Here
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};