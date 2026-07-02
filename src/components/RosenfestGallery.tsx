"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "IMG_3014.jpg", "IMG_3019.jpg", "IMG_3029.jpg", "IMG_3043.jpg",
  "IMG_3045.jpg", "IMG_3116.jpg", "IMG_3135.jpg", "IMG_3145.jpg",
  "IMG_3146.jpg", "IMG_3155.jpg", "IMG_3165.jpg", "IMG_3166.jpg",
  "IMG_3167.jpg", "IMG_3236.jpg", "IMG_3240.jpg", "IMG_3241.jpg"
];

export default function RosenfestGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 w-full max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedIndex(i)}
            className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-forest/5 cursor-pointer group"
          >
            <img 
              src={`${basePath}/rosenfest/${img}`} 
              alt={`Rosenfest Eindruck ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8">
          
          {/* Close button */}
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-50"
            aria-label="Schließen"
          >
            <X size={28} />
          </button>

          {/* Prev button */}
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-2 sm:left-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-50"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next button */}
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-2 sm:right-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-50"
            aria-label="Nächstes Bild"
          >
            <ChevronRight size={32} />
          </button>

          {/* Main Image */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={() => setSelectedIndex(null)} // Click outside to close
          >
            <img 
              src={`${basePath}/rosenfest/${images[selectedIndex]}`} 
              alt={`Rosenfest Eindruck ${selectedIndex + 1} Groß`} 
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            />
            
            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 bg-black/50 px-4 py-1.5 rounded-full text-sm font-medium">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
