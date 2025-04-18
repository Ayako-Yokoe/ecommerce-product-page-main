import React, { useState } from "react";
import { heroImages } from "../data";

const DesktopGallery = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex === 0 ? heroImages.length - 1 : slideIndex - 1);
    } else if (direction === "right") {
      setSlideIndex(slideIndex === heroImages.length - 1 ? 0 : slideIndex + 1);
    }
  };

  return (
    <section className="mb-5 relative overflow-hidden">
      <div className="overflow-hidden rounded-xl">
        <div
          className="h-[500px] flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto flex-shrink-0 object-cover"
              onClick={() => setIsLightboxOpen(true)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-6 mt-6">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`relative rounded-xl cursor-pointer overflow-hidden ${
              index === slideIndex
                ? "border-3 border-orange"
                : "border border-transparent"
            } `}
            onClick={() => setSlideIndex(index)}
          >
            {index === slideIndex ? (
              <div className="absolute inset-0 bg-white opacity-70"></div>
            ) : (
              <div className="absolute inset-0 transition-all duration-300 hover:bg-white hover:opacity-40"></div>
            )}
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
      {/* Thumbnails */}

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 h-screen flex items-center justify-center">
          <div className="flex flex-col justify-center max-w-[500px] mx-auto">
            {/* Close Button */}
            <button
              aria-label="Close menu"
              aria-expanded="true"
              className="mb-4 flex justify-end cursor-pointer"
              onClick={() => setIsLightboxOpen(false)}
            >
              <div
                className="w-5 h-5 bg-white transition-all duration-300 hover:bg-orange"
                style={{
                  WebkitMaskImage: "url(/images/icon-close.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskImage: "url(/images/icon-close.svg)",
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                }}
              ></div>
            </button>
            {/* Close Button */}

            <div className="mb-6 relative">
              <div className="relative overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${slideIndex * 100}%)`,
                  }}
                >
                  {heroImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto flex-shrink-0"
                      onClick={() => setIsLightboxOpen(true)}
                    />
                  ))}
                </div>
              </div>

              {/* Previous Button */}
              <button
                aria-label="Previous image"
                className="group absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
                onClick={() => handleSlide("left")}
              >
                <div
                  className="w-4 h-4 bg-very-dark-blue transition-all duration-300 group-hover:bg-orange"
                  style={{
                    WebkitMaskImage: "url(/images/icon-previous.svg)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskImage: "url(/images/icon-previous.svg)",
                    maskRepeat: "no-repeat",
                    maskSize: "contain",
                  }}
                ></div>
              </button>
              {/* Previous Button */}

              {/* Next Button */}
              <button
                aria-label="Next image"
                className="group absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer pl-1"
                onClick={() => handleSlide("right")}
              >
                <div
                  className="w-4 h-4 bg-very-dark-blue transition-all duration-300 group-hover:bg-orange"
                  style={{
                    WebkitMaskImage: "url(/images/icon-next.svg)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskImage: "url(/images/icon-next.svg)",
                    maskRepeat: "no-repeat",
                    maskSize: "contain",
                  }}
                ></div>
              </button>
              {/* Next Button */}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mx-12">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl cursor-pointer overflow-hidden ${
                    index === slideIndex
                      ? "border-3 border-orange"
                      : "border border-transparent"
                  } `}
                  onClick={() => setSlideIndex(index)}
                >
                  {index === slideIndex ? (
                    <div className="absolute inset-0 bg-white opacity-70"></div>
                  ) : (
                    <div className="absolute inset-0 transition-all duration-300 hover:bg-white hover:opacity-40"></div>
                  )}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto hover:bg-white"
                  />
                </div>
              ))}
            </div>
            {/* Thumbnails */}
          </div>
        </div>
      )}
    </section>
  );
};

export default DesktopGallery;
