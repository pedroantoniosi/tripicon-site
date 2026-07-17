import React from "react";
import useEmblaCarousel from "embla-carousel-react";

type SliderProps = {
  children?: React.ReactNode;
  mobile?: number;
  tablet?: number;
  desktop?: number;
  gap?: number;
};

export default function Slider({
  children,
  mobile = 1,
  tablet = 2,
  desktop = 3,
  gap = 16,
}: SliderProps) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  return (
    <div className="relative w-full overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="slider-item"
              style={
                {
                  "--mobile-size": `${100 / mobile}%`,
                  "--tablet-size": `${100 / tablet}%`,
                  "--desktop-size": `${100 / desktop}%`,
                } as React.CSSProperties
              }
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .slider-item {
            flex: 0 0 calc(var(--mobile-size) - ${gap}px);
          }

          @media (min-width: 640px) {
            .slider-item {
              flex: 0 0 calc(var(--tablet-size) - ${gap}px);
            }
          }

          @media (min-width: 1024px) {
            .slider-item {
              flex: 0 0 calc(var(--desktop-size) - ${gap}px);
            }
          }
        `}
      </style>
    </div>
  );
}
