import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './Gallery.css';

const YearGallery = ({ images, year }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const containerRef = useRef(null);

  const handleWheel = (event) => {
    // Prevent page scrolling while inside gallery
    event.preventDefault();
    event.stopPropagation();

    const direction = event.deltaY > 0 ? 1 : -1;
    const nextIndex = imageIndex + direction;

    if (nextIndex >= 0 && nextIndex < images.length) {
      setImageIndex(nextIndex);
    }
  };

  useEffect(() => {
    const currentRef = containerRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [imageIndex]);

  const navigatePrevious = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const navigateNext = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div 
      className="year-column" 
      ref={containerRef}
    >
      <h3 className="year-heading">{year}</h3>
      
      {/* Previous Button over the image */}
      {imageIndex > 0 && (
        <button className="gallery-nav-button top-nav" onClick={navigatePrevious}>
          <ChevronUp size={24} />
        </button>
      )}
      
      <div className="image-container">
        <img 
          src={images[imageIndex]} 
          alt={`Image ${imageIndex + 1}`} 
        />
      </div>
      
      {/* Next Button over the image */}
      {imageIndex < images.length - 1 && (
        <button className="gallery-nav-button bottom-nav" onClick={navigateNext}>
          <ChevronDown size={24} />
        </button>
      )}
    </div>
  );
};

export const GalleryPage = () => {
  const years = {
    2024: [
      "/images/2024-1.JPG", 
      "/images/2024-2.JPG",
      "/images/2024-3.JPG",
      "/images/2024-4.JPG", 
      "/images/2024-5.JPG",
      "/images/2024-6.JPG", 
      "/images/2024-7.JPG",
      "/images/2024-8.JPG", 
      "/images/2024-9.JPG",
      "/images/2024-10.JPG"
    ],
    2023: [
      "/images/2023-1.png", 
      "/images/2023-2.png",
      "/images/2023-3.png",
      "/images/2023-4.png", 
      "/images/2023-5.png",
      "/images/2023-6.png", 
      "/images/2023-7.png",
      "/images/2023-8.png",
      "/images/2023-9.png"
    ]
  };

  return (
    <div className="gallery-container">
      <div className="gallery-title">Gallery</div>
      <div className="gallery-columns">
        <YearGallery images={years[2024]} year="2024" />
        <YearGallery images={years[2023]} year="2023" />
      </div>
    </div>
  );
};

export default GalleryPage;
