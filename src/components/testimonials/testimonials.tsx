import React from "react";
import testimonials from "@/api/testimonals";

export default function Testimonials() {
  return (
    <div className="sliderContainer">
      <div className="slider-content">
        {testimonials.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 min-h-[500px] p-2">
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <span>{item.rating}</span>
              <p className="font-bold text-2xl">{item.trip}</p>
            </div>
            {/* Images */}
            <div className="flex flex-row gap-2">
              {item.images.map((image, index) => (
                <div
                  key={index}
                  className="w-50 h-[300px] rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${item.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div>
              <h2 className="text-black font-semibold text-xl">
                {`"${item.text}"`}
              </h2>
            </div>

            {/* Info */}
            <div className="flex flex-row">
              <div className="flex flex-col gap-2">
                <h2 className="text-black font-semibold text-xl">
                  {item.name}
                </h2>

                <div className="flex flex-row gap-2">
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
