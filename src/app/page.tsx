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
      <main className="flex flex-col gap-4 md:max-w-[1400px] md:mx-auto">
        {/* Sessão Inicial */}
        {/* Hero */}
        <section className="px-6 pt-8 pb-12">
          <div className="mx-auto max-w-md">
            <span className="inline-flex rounded-full px-4 py-1 text-sm font-medium">
              Explore o mundo
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-neutral-900">
              Descubra seu
              <span className="block text-primary">próximo destino</span>
            </h1>

            <p className="mt-4 text-base leading-7 text-neutral-500">
              Encontre experiências únicas, passeios inesquecíveis e aventuras
              cuidadosamente selecionadas para sua próxima viagem.
            </p>

            {/* Pesquisa */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-14 flex-1 items-center rounded-2xl bg-neutral-100 px-4">
                <i className="bi bi-search text-lg text-neutral-400"></i>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar destinos ou tours"
                  className="bg-red-500 ml-3 w-full bg-transparent text-base outline-none placeholder:text-neutral-400 outline-none"
                />
              </div>
            </div>

            {/* Categorias */}
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {filteredTours.map((item) => (
                <Link
                  key={item.id}
                  href={`/tours/${item.slug}`}
                  className="shrink-0 rounded-full border border-neutral-200 bg-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-orange-300hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link href="/explore" className="mt-8 block">
              <Button className="py-3">
                Explorar todos os tours
                <i className="bi bi-arrow-right ml-2"></i>
              </Button>
            </Link>
          </div>
        </section>
        {/* Lugares Famosos */}
        <section className="p-2">
          <h2 className="font-bold text-xl py-4 md:text-center md:text-2xl">
            Conehça lugares sensacionais
          </h2>
          <div className="flex flex-col gap-2 md:max-w-[1024px] md:mx-auto">
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
