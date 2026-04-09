"use client";

import Slider from "@/components/Slider";

const trips = [
  { title: "Japão", image: "/images/japan.jpg" },
  { title: "Paris", image: "/images/paris.jpg" },
];

export default function SectionTrips() {
  return (
    <Slider
      data={trips}
      slidesPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
      autoplay
      loop
      renderItem={(item) => (
        <div className="rounded-xl overflow-hidden shadow">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
      )}
    />
  );
}
