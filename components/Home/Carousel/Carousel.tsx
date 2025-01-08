"use client";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useState } from "react";
import Slide from "./Slide";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
    console.log(current);
  };
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className=" w-1/2 mx-12">
      <div className="w-full overflow-hidden relative">
        <div
          className={"flex h-[500px] w-full transition ease-out duration-500"}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s, i) => {
            return <Slide key={"slide-" + i} s={s} i={i} />;
          })}
        </div>
        <div className="flex absolute top-0 h-full w-full justify-between items-center text-white px-10 text-2xl">
          <button onClick={previousSlide}>
            <FaArrowCircleLeft />
          </button>
          <button onClick={nextSlide}>
            <FaArrowCircleRight />
          </button>
        </div>
        <div className="absolute bottom-0 py-4 flex justify-center items-start gap-2 w-full">
          {slides.map((s, i) => {
            return (
              <button
                onClick={() => {
                  setCurrent(i);
                }}
                key={"dot-" + i}
              >
                <div
                  className={`rounded-full w-2 h-2 ${
                    i == current ? "bg-white" : "bg-gray-400"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
