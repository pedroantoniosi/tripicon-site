import React from "react";
import Testimonials from "@/api/testimonals";

export default function testimonials() {
  return (
    <>
      <div className="sliderContainer">
        <div className="slider-content">
          {Testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-8 min-h-[500px] p-2"
            >
              {/* Images */}
              <div className="flex flex-row gap-2">
                <div className="w-50 bg-red-500 h-[300px] rounded"></div>
                <div className="w-50 bg-red-500 h-[300px] rounded"></div>
              </div>
              {/* Text */}
              <div>
                <h2 className="text-white font-semibold text-xl">
                  {`"${item.text}"`}
                </h2>
              </div>
              {/* Info */}
              <div className="flex flex-row">
                <div className="flex flex-col gap-2">
                  <h2 className="text-white font-semibold text-xl">
                    {item.name}
                  </h2>
                  <div className="flex flex-row gap-2">
                    <span>{item.rating}</span>
                    <span>{item.plan}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
