import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const MerchPage = () => {
  const [favorites, setFavorites] = useState(new Set());

  const merchItems = [
    {
      id: 'hoodie-01',
      name: 'Signature Windcheater',
      description: 'Embrace innovation with our signature gradient design',
      price: 700,
      originalPrice: 750,
      image: '/merch/edge of brilliance_page-0001.jpg',
      colors: ['Navy', 'Black', 'Deep Blue'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'tshirt-01',
      name: 'Signature Windcheater',
      description: 'Abstract circuitry meets cutting-edge design',
      price: 700,
      originalPrice: 750,
      image: '/merch/elevate every step_page-0001.jpg',
      colors: ['Charcoal', 'White', 'Dark Teal'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 'cap-01',
      name: 'Think Beyond Merch',
      description: 'Sleek cap with embroidered RIC logo',
      price: 300,
      originalPrice: 350,
      image: '/merch/black_page-0001.jpg',
      colors: ['Black', 'Navy', 'Graphite'],
      sizes: ['Adjustable']
    },
    {
      id: 'jacket-01',
      name: 'Windbreaker Merch',
      description: 'Lightweight, water-resistant research gear',
      price: 300,
      originalPrice: 350,
      image: '/merch/beige_page-0001.jpg',
      colors: ['Dark Blue', 'Midnight Black'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'laptop-sleeve-01',
      name: 'RIC Elevate Merch',
      description: 'Premium protection with geometric tech print',
      price: 300,
      originalPrice: 350,
      image: '/merch/brown_page-0001.jpg',
      colors: ['Navy Blue', 'Black'],
      sizes: ['13"', '15"', '16"']
    }
  ];

  const toggleFavorite = (itemId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      newFavorites.has(itemId) 
        ? newFavorites.delete(itemId) 
        : newFavorites.add(itemId);
      return newFavorites;
    });
  };

  const orderFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeD4cHTxcAS44cZDf-cdXjVvW8rpK4b2en4yFNDxF_w3KGn9g/viewform";

  return (
    <div className="bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
            RIC Merchandise
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Wear the spirit of innovation. Limited edition designs celebrating research and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {merchItems.map((item) => (
            <div 
              key={item.id} 
              className="
                bg-[#112240] 
                rounded-xl 
                overflow-hidden 
                shadow-2xl 
                transform 
                transition-all 
                duration-300 
                hover:scale-[1.03]
                border-2 border-transparent 
                hover:border-blue-500/30
              "
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-72 object-cover"
                />
                <button 
                  onClick={() => toggleFavorite(item.id)}
                  className={`
                    absolute top-4 right-4 
                    p-2 rounded-full 
                    transition-colors duration-300
                    ${favorites.has(item.id) 
                      ? 'bg-red-500/30 text-red-300' 
                      : 'bg-black/30 text-white'}
                  `}
                >
                  <Heart className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-blue-300">{item.price}</span>
                    <span className="ml-2 text-sm line-through text-gray-500">{item.originalPrice}</span>
                  </div>
                  
                  <a 
                    href={orderFormLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="
                      bg-blue-600/30 
                      text-blue-300 
                      px-4 py-2 
                      rounded-full 
                      flex items-center 
                      space-x-2
                      transform 
                      transition-all 
                      hover:scale-[1.05]
                      active:scale-95
                    "
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Buy Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href={orderFormLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="
              px-8 py-4 
              bg-blue-600/30 
              backdrop-blur-md 
              text-white 
              rounded-full 
              text-lg 
              font-bold 
              transform 
              transition-all 
              hover:scale-[1.02]
              hover:bg-blue-700/50
            "
          >
            Order Custom Merchandise
          </a>
        </div>
      </div>
    </div>
  );
};

export default MerchPage;
