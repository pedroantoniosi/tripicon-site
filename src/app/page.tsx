/* eslint-disable @next/next/no-img-element */
"use client";
//Import Properties
import { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

//Import Components
import Plans from "@/components/plans/plans";
import Slider from "@/components/Slider";
import Container from "@/components/Container";

//Import API's
import tours from "@/api/tours";
import testimonials from "@/api/testimonals";

// Import Styles

import Button from "@/components/Button";
import PopularTours from "@/components/home/PopularTours";
import Header from "@/components/home/Header";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTours = tours.filter((tour) =>
    tour.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="main">
      <main className="flex flex-col gap-4">
        {/* Sessão Inicial */}

        {/* Hero */}
        <section className="p-2 relative flex bg-[url('/assets/img/home/wallpaper.png')] bg-cover bg-no-repeat z-[1]">
          <div className="absolute inset-0 bg-black/20 z-[-1]" />
          <Container className="flex flex-start items-center py-6 h-svh">
            <div className="flex flex-col max-w-xl">
              <span className="inline-flex rounded-full px-4 py-1 text-sm font-medium text-orange-300">
                Explore o mundo
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-neutral-900 text-white">
                Descubra seu
                <span className="block text-blue-400">próximo destino</span>
              </h1>
              <p className="mt-4 text-white leading-7 text-neutral-500">
                Encontre experiências únicas, passeios inesquecíveis e aventuras
                cuidadosamente selecionadas para sua próxima viagem.
              </p>
              {/* Pesquisa */}
              <div className="mt-8 flex items-center gap-3 ">
                <div className="flex h-14 flex-1 items-center rounded-2xl bg-neutral-100 px-4">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar destinos ou tours"
                    className="ml-3 w-full bg-transparent text-base outline-none placeholder:text-neutral-400 outline-none"
                  />
                  <button>
                    <i className="bi bi-search text-lg text-black bg-orange-300 p-2 rounded-full w-10 h-10 flex justify-center items-center md:bg-transparent md:w-auto md:h-auto"></i>
                  </button>
                </div>
              </div>
              {/* Categorias */}
              <div className="max-md:hidden mt-6 md:flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
          </Container>
        </section>
        {/* Lugares Famosos */}
        <section>
          <Container>
            <Header content="Conheça lugares sensacionais" />
            <PopularTours />
          </Container>
        </section>
        {/* Principais Tours */}
        <section>
          <Container>
            <Header content="Principais Tours" />
            <div>
              <Slider desktop={4} mobile={1}>
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
                        className="object-cover w-full aspect-[9/16] rounded-xl opacity-90 md:aspect-[3/4]"
                      />
                      <h2 className="absolute inset-x-0 bottom-0 flex items-end h-full p-4 text-xl font-semibold text-white bg-gradient-to-b from-transparent to-neutral-900 rounded-xl">
                        {item.city}
                      </h2>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </Container>
        </section>

        {/* Planos */}
        <section className="p-6">
          <Container>
            <Header content="Escolha seu Plano" />
            <Plans />
          </Container>
        </section>

        {/* Ofertas */}
        <div>
          <Container className="p-4 flex justify-around items-center gap-4 shadow-xl h-100 border-1 rounded-xl border-neutral-300">
            <h2 className="text-4xl font-semibold max-w-80">
              O seu atalho para encontrar uma ótima oferta
            </h2>
            <Button className="w-50 h-11">Veja Ofertas</Button>
          </Container>
        </div>

        {/* Testimoniais */}
        <section>
          <Container>
            <Header content="Principais Tours" />

            <div>
              <Slider desktop={3} mobile={1}>
                {testimonials.map((item) => (
                  <div key={item.id} className="flex flex-col gap-4">
                    {/* Rating */}
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-xl">
                        {item.rating.toFixed(1)}
                      </span>

                      <div className="relative w-fit">
                        {/* Camada cinza */}
                        <div className="flex text-neutral-500 gap-1">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="bi bi-star-fill"></i>
                          ))}
                        </div>

                        {/* Camada amarela */}
                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{
                            width: `${(item.rating / 5) * 100}%`,
                          }}
                        >
                          <div className="flex text-yellow-400 w-max gap-1">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="bi bi-star-fill"></i>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Trip Location */}
                    <div>
                      <span className="text-2xl font-semibold">
                        {item.trip}
                      </span>
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
                      <h2 className="text-black font-normal text-md">
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
                          <i className="bi bi-square-fill"></i>
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
