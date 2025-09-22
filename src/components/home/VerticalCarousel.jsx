import { useState, useEffect } from "react";

export default function VerticalCarousel({ items, autoRotateInterval = 1500 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = items.length;

  // Auto-rotate
  useEffect(() => {
    if (isPaused || total === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [isPaused, autoRotateInterval, total]);

  if (total === 0) {
    return (
      <div className="flex items-center justify-center h-[48rem] text-muted-foreground">
        No items to display
      </div>
    );
  }

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  return (
    <div
      className="relative h-[48rem] w-[70%] mx-auto overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Previous Item */}
      <div
        className="absolute top-28 w-3/4 md:w-2/3 h-48 transition-all duration-1000 ease-in-out transform cursor-pointer scale-90 opacity-40 hover:scale-95 hover:opacity-60"
        onClick={() => setCurrentIndex(prevIndex)}
      >
        <img
          src={items[prevIndex].src}
          alt={items[prevIndex].alt}
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl" />
      </div>

      {/* Current Item */}
      <div className="relative w-full max-w-4xl h-56 z-10 transition-all duration-1000 ease-in-out transform cursor-pointer scale-110">
        <img
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          className="w-full h-full object-cover rounded-xl shadow-xl ring-2 ring-primary/30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl" />
      </div>

      {/* Next Item */}
      <div
        className="absolute bottom-28 w-3/4 md:w-2/3 h-48 transition-all duration-1000 ease-in-out transform cursor-pointer scale-90 opacity-40 hover:scale-95 hover:opacity-60"
        onClick={() => setCurrentIndex(nextIndex)}
      >
        <img
          src={items[nextIndex].src}
          alt={items[nextIndex].alt}
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl" />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${
              index === currentIndex
                ? "bg-gray-200 scale-125 shadow-lg"
                : "bg-gray-200/50 hover:bg-muted-foreground/60 hover:scale-110"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Pause Indicator */}
      {isPaused && (
        <div className="absolute top-4 right-4 text-primary/60 text-sm">Paused</div>
      )}
    </div>
  );
}