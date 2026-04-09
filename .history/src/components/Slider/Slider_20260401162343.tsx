"use client";

import Slider from "./Slider";

export default function TripsSlider({ data }) {
  return (
    <Slider
      data={data}
      autoplay
      loop
      slidesPerView={{
        mobile: 1,
        tablet: 2,
        desktop: 4,
      }}
      renderItem={(item) => (
        <div className="rounded-xl overflow-hidden shadow">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
      )}
    />
  );
}
