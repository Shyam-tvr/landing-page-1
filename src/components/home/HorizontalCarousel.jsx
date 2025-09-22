import React, { useState, useEffect, useRef } from "react";

export default function HorizontalCarousel({ items, autoRotateInterval = 1500 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const startX = useRef(null);

  const total = items.length;

  // Auto rotate
  useEffect(() => {
    if (isPaused || total === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [isPaused, autoRotateInterval, total]);

  if (total === 0) {
    return (
      <div className="flex items-center justify-center h-[20rem] text-muted-foreground">
        No items to display
      </div>
    );
  }

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  // --- Swipe Handlers ---
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % total);
      } else {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
      }
    }
    startX.current = null;
    setIsPaused(false);
  };

  // Mouse drag (optional for desktop)
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    setIsPaused(true);
  };

  const handleMouseUp = (e) => {
    if (startX.current === null) return;
    const endX = e.clientX;
    const diff = startX.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % total);
      } else {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
      }
    }
    startX.current = null;
    setIsPaused(false);
  };

  return (
    <div className="w-full">
      {/* Carousel */}
      <div
        className="relative w-full h-[20rem] mx-auto overflow-hidden flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {/* Previous Item */}
        <div
          className="absolute left-6 top-1/2 -translate-y-1/2 w-1/4 h-[10rem] transition-all duration-700 ease-in-out transform cursor-pointer scale-90 opacity-40 hover:scale-95 hover:opacity-60"
          onClick={() => setCurrentIndex(prevIndex)}
        >
          <img
            src={items[prevIndex].src}
            alt={items[prevIndex].alt}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg" />
        </div>

        {/* Current Item */}
        <div className="relative w-1/2 h-[14rem] z-10 transition-all duration-700 ease-in-out transform cursor-pointer scale-105">
          <img
            src={items[currentIndex].src}
            alt={items[currentIndex].alt}
            className="w-full h-full object-cover rounded-lg shadow-xl ring-2 ring-primary/30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-lg" />
        </div>

        {/* Next Item */}
        <div
          className="absolute right-6 top-1/2 -translate-y-1/2 w-1/4 h-[10rem] transition-all duration-700 ease-in-out transform cursor-pointer scale-90 opacity-40 hover:scale-95 hover:opacity-60"
          onClick={() => setCurrentIndex(nextIndex)}
        >
          <img
            src={items[nextIndex].src}
            alt={items[nextIndex].alt}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg" />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-gray-200" : "bg-gray-200/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}