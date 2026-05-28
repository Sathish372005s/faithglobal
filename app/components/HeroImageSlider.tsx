"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SliderImage {
  src: string;
  alt: string;
}

const IMAGES: SliderImage[] = [
  {
    src: "/images/hero_logistics.png",
    alt: "Modern cargo terminal logistics"
  },
  {
    src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
    alt: "Global air freight transport cargo plane"
  },
  {
    src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80",
    alt: "Premium international sea freight container cargo ship"
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Secure trucking and regional transportation"
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "Climate-regulated secure warehousing storage hub"
  }
];

export default function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 2000); // Change photo every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Slides */}
      {IMAGES.map((image, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[4000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* Static Overlays to darken and blend images seamlessly with content overlay */}
      <div className="absolute inset-0 bg-navy/30 z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light/40 via-navy to-navy-dark pointer-events-none z-20" />
    </div>
  );
}
