import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const MerchPage = () => {
  const [favorites, setFavorites] = useState(new Set());

  const merchItems = [
    {
      id: 'hoodie-01',
      name: 'RIC Gradient Hoodie',
      description: 'Embrace innovation with our signature gradient design',
      price: 45.99,
      originalPrice: 59.99,
      image: '/api/placeholder/400/500',
      colors: ['Navy', 'Black', 'Deep Blue'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'tshirt-01',
      name: 'Techno Research Tee',
      description: 'Abstract circuitry meets cutting-edge design',
      price: 29.99,
      originalPrice: 39.99,
      image: '/api/placeholder/400/500',
      colors: ['Charcoal', 'White', 'Dark Teal'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 'cap-01',
      name: 'Innovation Snapback',
      description: 'Sleek cap with embroidered RIC logo',
      price: 24.99,
      originalPrice: 34.99,
      image: '/api/placeholder/400/500',
      colors: ['Black', 'Navy', 'Graphite'],
      sizes: ['Adjustable']
    },
    {
      id: 'jacket-01',
      name: 'Tech Pioneer Windbreaker',
      description: 'Lightweight, water-resistant research gear',
      price: 79.99,
      originalPrice: 99.99,
      image: '/api/placeholder/400/500',
      colors: ['Dark Blue', 'Midnight Black'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'laptop-sleeve-01',
      name: 'Digital Research Sleeve',
      description: 'Premium protection with geometric tech print',
      price: 34.99,
      originalPrice: 44.99,
      image: '/api/placeholder/400/500',
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
          
          {/* Countdown Banner */}
          <div className="bg-blue-900/30 backdrop-blur-md rounded-lg p-4 mt-6 max-w-md mx-auto">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Holiday Special Ends:</span>
              <div className="text-lg font-bold text-blue-300">
                25th December, 2024
              </div>
            </div>
          </div>
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
                    <span className="text-2xl font-bold text-blue-300">${item.price}</span>
                    <span className="ml-2 text-sm line-through text-gray-500">${item.originalPrice}</span>
                  </div>
                  
                  <button 
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchPage;