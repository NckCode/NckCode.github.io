import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Jordan from '../assets/Jordan.JPG';
import Ronaldo from '../assets/Ronaldo.JPG';
import Steve from '../assets/Steve.JPG';

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showName, setShowName] = useState(false);
  const imageRef = useRef(null);
  const nameRef = useRef(null);

  const images = [
    { src: Jordan, name: 'Michael Jordan' },
    { src: Ronaldo, name: 'Cristiano Ronaldo' },
    { src: Steve, name: 'Steve Jobs' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate image change
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(imageRef.current, {
          opacity: 1,
          duration: 0.3
        });
      }
    });
  }, [currentImageIndex]);

  const handleMouseEnter = () => {
    setShowName(true);
    gsap.to(imageRef.current, {
      scale: 1.1,
      filter: 'brightness(0.75)',
      duration: 0.5,
      ease: 'power2.out'
    });
    if (nameRef.current) {
      gsap.fromTo(nameRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }
      );
    }
  };

  const handleMouseLeave = () => {
    setShowName(false);
    gsap.to(imageRef.current, {
      scale: 1,
      filter: 'brightness(1)',
      duration: 0.5,
      ease: 'power2.out'
    });
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  };

  return (
    <div className="relative aspect-[3/4] overflow-hidden group">
      <div
        className="w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].name}
          className="w-full h-full object-cover"
        />
        {showName && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent">
            <h3 
              ref={nameRef}
              className="text-white text-3xl font-bold drop-shadow-lg"
            >
              {images[currentImageIndex].name}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel; 