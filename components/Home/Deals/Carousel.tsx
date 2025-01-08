"use client";

import { useState } from "react";
import Slide from "./Slide";
import DealDescription from "./DealDescription";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full">
      {/* Gradient Overlay */}
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-black to-transparent pointer-events-none w-2/3"></div>

      {/* Text Overlay */}
      <DealDescription />

      <div className="w-full overflow-hidden relative">
        <div
          className="flex aspect-video w-full transition-transform ease-out duration-500"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s, i) => (
            <Slide key={`slide-${i}`} s={s} i={i} />
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-0 py-4 flex justify-center items-start gap-2 w-full">
          {slides.map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className={`rounded-full w-2 h-2 ${
                  i === current ? "bg-white" : "bg-gray-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
