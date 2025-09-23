"use client";
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

  const getIndex = (offset) => (currentIndex + offset + total) % total;

  // Swipe handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    setIsPaused(true);
  };
  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (Math.abs(diff) > 50) {
      setCurrentIndex((prev) => (diff > 0 ? (prev + 1) % total : (prev - 1 + total) % total));
    }
    startX.current = null;
    setIsPaused(false);
  };
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    setIsPaused(true);
  };
  const handleMouseUp = (e) => {
    if (startX.current === null) return;
    const endX = e.clientX;
    const diff = startX.current - endX;
    if (Math.abs(diff) > 50) {
      setCurrentIndex((prev) => (diff > 0 ? (prev + 1) % total : (prev - 1 + total) % total));
    }
    startX.current = null;
    setIsPaused(false);
  };

  // Style classes
  const positionClasses = [
    "w-1/4 opacity-40 scale-90", // far left
    "w-1/4 opacity-70 scale-95", // left
    "w-1/3 opacity-100 scale-105 z-10", // center (bigger)
    "w-1/4 opacity-70 scale-95", // right
    "w-1/4 opacity-40 scale-90", // far right
  ];

  return (
    <div className="w-full">
      <div
        className="relative w-full h-[20rem] mx-auto overflow-hidden flex items-center justify-center gap-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {[getIndex(-2), getIndex(-1), currentIndex, getIndex(1), getIndex(2)].map(
          (idx, pos) => (
            <div
              key={idx}
              className={`transition-all duration-700 ease-in-out transform cursor-pointer ${positionClasses[pos]}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <img
                src={items[idx].src}
                alt={items[idx].alt}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
