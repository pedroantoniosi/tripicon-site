//Import Properties
import type { CSSProperties } from "react";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

interface SliderStyle extends CSSProperties {
  "--slides"?: number;
  "--gap"?: string;
}

//Import Components
import Plans from "@/components/plans/plans";

//Import API's
import tours from "@/api/tours";

// Import Styles
import "./index.css";
import "./slider.css";
import Testimonials from "@/components/testimonials/testimonials";

// Sli8der Multiplier Size
const sliderStyle: SliderStyle = {
  "--slides": 1.2,
  "--gap": "1rem",
};

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-4">
        {/* Hero Section */}
        <section className="hero h-svh p-1"></section>
        {/* Popular Places */}
        <section className="p-2">
          <h2 className="font-bold text-xl py-4">
            Conehça lugares sensacionais
          </h2>
          <div className="flex flex-col gap-2">
            <div className="relative w-full h-[200px]">
              <Image
                src="/assets/img/home/0.jfif"
                alt=""
                fill
                sizes="auto"
                className="object-cover rounded-xl"
              />
            </div>

            <div className="w-full">
              <div className="relative float-left w-[48%] h-[260px]">
                <Image
                  src="/assets/img/home/1.jfif"
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="relative float-right w-[48%] h-[400px]">
                <Image
                  src="/assets/img/home/2.jfif"
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="relative float-left clear-left w-[48%] h-[450px] mt-4">
                <Image
                  src="/assets/img/home/3.jfif"
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="relative float-right w-[48%] h-[310px] mt-4">
                <Image
                  src="/assets/img/home/4.jfif"
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="clear-both" />
            </div>
          </div>
        </section>
        {/* Principais Tours */}
        <section className="p-2">
          <h2 className="font-bold text-xl py-4">Nossos Tours</h2>
          <div className="sliderContainer">
            <div className="slider-content" style={sliderStyle}>
              {tours.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col  gap-2 slide  rounded-xl relative"
                >
                  <div className="flex w-full ">
                    <img
                      src={item.image}
                      alt=""
                      className="object-cover rounded-xl w-full aspect-[9/16] rounded-xl opacity-[0.9]"
                    />
                  </div>
                  <h2 className="flex flex-col justify-end text-white font-semibold text-xl h-[300px] absolute w-full bottom-0 p-4 bg-gradient-to-b from-neutral-900/0 to-neutral-900">
                    {item.city}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Planos */}
        <div className="p-6">
          <Plans />
        </div>

        {/* Testimonials */}
        <div className="p-6">
          <Testimonials />
        </div>
      </main>
    </div>
  );
}
