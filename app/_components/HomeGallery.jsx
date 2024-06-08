"use client"
import React, { useState } from 'react';

export function HomeGallery() {
  const data = [
    {
      imageLink:
        "/Emily/1.jpeg",
    },
    {
      imageLink:
        "/Lauren/5.jpeg",
    },
    {
      imageLink:
        "/Steven/7.jpeg",
    },
    {
      imageLink:
        "/Iain/9.jpeg",
    },
    
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="bg-gray-800">
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
          <div className="relative">
            <img src={selectedImage} alt="Enlarged gallery" className="max-w-3xl max-h-2xl rounded-lg" />
            <button className="absolute top-2 right-2 text-white text-2xl" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 bg-tealGreen-500">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-40 w-full max-w-3xl rounded-lg object-cover object-center cursor-pointer"
              src={imageLink}
              alt="gallery-photo"
              onClick={() => handleImageClick(imageLink)}
            />
          </div>
        ))}
      </div>
      </div>
  );
}

export default HomeGallery;
