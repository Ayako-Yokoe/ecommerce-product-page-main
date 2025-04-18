import React, { useState } from "react";
import { heroImages } from "../data";

const MobileGallery = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex === 0 ? heroImages.length - 1 : slideIndex - 1);
    } else if (direction === "right") {
      setSlideIndex(slideIndex === heroImages.length - 1 ? 0 : slideIndex + 1);
    }
  };

  return (
    <section
      className="mb-6 relative overflow-hidden"
      role="region"
      aria-label="Image carousel"
    >
      <div
        className="h-[320px] flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        aria-label="Previous image"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full w-[36px] h-[36px] ml-4 flex items-center justify-center cursor-pointer"
        onClick={() => handleSlide("left")}
      >
        <img
          src="/images/icon-previous.svg"
          alt="previous button"
          className="w-[10px]"
        />
      </button>
      {/* Previous Button */}

      {/* Next Button */}
      <button
        aria-label="Next image"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full w-[36px] h-[36px] mr-4 flex items-center justify-center cursor-pointer"
        onClick={() => handleSlide("right")}
      >
        <img
          src="/images/icon-next.svg"
          alt="next button"
          className="w-[10px]"
        />
      </button>
      {/* Next Button */}
    </section>
  );
};

export default MobileGallery;
