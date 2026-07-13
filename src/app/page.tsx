/* eslint-disable @next/next/no-img-element */
"use client";
//Import Properties
import { useState } from "react";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

//Import Components
import Plans from "@/components/plans/plans";
import Testimonials from "@/components/home//Testimonials";

//Import API's
import tours from "@/api/tours";

// Import Styles
import Slider from "@/components/Slider";

import Button from "@/components/Button";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTours = tours.filter((tour) =>
    tour.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="main">
      <main className="flex flex-col gap-4">
        {/* Sessão Inicial */}
        <section className="p-6 flex flex-col gap-4">
          <h2 className="text-black font-semibold text-4xl max-w-[250px]">
            Descubra seu nono destino:
          </h2>
          <div className="flex flex-row gap-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="placeholder-neutral-500 bg-neutral-200 rounded-full px-4 py-2 w-full outline-none"
              placeholder="Procure por tours"
            />
            <button className="bg-primary p-2 rounded-full w-[50px] text-white">
              <i className="bi bi-sliders"></i>
            </button>
          </div>
          <div className="hero-content flex flex-row flex-wrap gap-4">
            {filteredTours.map((item) => (
              <Link
                key={item.id}
                href={`/tours/${item.slug}`}
                className="bg-neutral-200 px-2 rounded-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link href={`/explore`} className="w-full flex">
            <Button className="w-full py-3"> Veja Todas Tours</Button>
          </Link>
        </section>
        {/* Lugares Famosos */}
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
          <h2 className="font-bold text-xl py-4">Principais Tours</h2>

          <Slider>
            {filteredTours.map((item) => (
              <Link
                key={item.id}
                href={`/tours/${item.slug}`}
                className="slide flex flex-col gap-2 rounded-xl relative"
              >
                <div className="w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full aspect-[9/16] rounded-xl opacity-90"
                  />

                  <h2 className="absolute inset-x-0 bottom-0 flex items-end h-full p-4 text-xl font-semibold text-white bg-gradient-to-b from-transparent to-neutral-900 rounded-xl">
                    {item.city}
                  </h2>
                </div>
              </Link>
            ))}
          </Slider>
        </section>

        {/* Planos */}
        <div className="p-6">
          <Plans />
        </div>

        {/* Testimoniais */}
        <div className="p-6">
          <Testimonials />
        </div>
      </main>
    </div>
  );
}
