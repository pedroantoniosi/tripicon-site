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
    <div className="bg-zinc-100">
      <main className="flex flex-col gap-4">
        {/* Sessão Inicial */}

        {/* Hero */}
        <section className="p-2 relative flex bg-[url('/assets/img/home/wallpaper.png')] bg-cover bg-no-repeat z-[1]">
          <Container className="flex flex-col justify-center items-start py-6 h-svh">
            {/* Caption */}
            <div className="flex flex-col gap-4 max-w-xl">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 text-white">
                Descubra seu
                <span className="block text-primary">próximo destino</span>
              </h1>
              <p className="mt-4 text-white leading-7 text-neutral-500">
                Encontre experiências únicas, passeios inesquecíveis e aventuras
                cuidadosamente selecionadas para sua próxima viagem.
              </p>

              {/* Pesquisa */}
              <div className=" flex items-center gap-3 ">
                <div className="flex h-14 flex-1 items-center rounded-2xl bg-neutral-100 px-4">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar destinos ou tours"
                    className="w-full bg-transparent text-base outline-none placeholder:text-neutral-400 outline-none"
                  />
                  <button>
                    <i className="bi bi-search text-lg text-black bg-orange-300 p-2 rounded-full w-10 h-10 flex justify-center items-center md:bg-transparent md:w-auto md:h-auto"></i>
                  </button>
                </div>
              </div>

              <div className="w-full min-w-0 overflow-hidden  max-sm:max-w-80">
                <Slider mobile={2.5} tablet={3.5} desktop={4}>
                  {filteredTours.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center rounded-xl bg-white shadow-sm overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.location.city}
                        className="w-10 h-10 object-cover flex-shrink-0"
                      />

                      <Link
                        href={`/tours/${item.slug}`}
                        className="px-3 py-2 text-sm font-medium truncate"
                      >
                        {item.location.city}
                      </Link>
                    </div>
                  ))}
                </Slider>
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
                {filteredTours.slice(0, 4).map((item) => (
                  <Link
                    key={item.id}
                    href={`/tours/${item.slug}`}
                    className="relative flex aspect-[9/16] md:aspect-[3/4] overflow-hidden rounded-2xl"
                  >
                    {/* Imagem */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 h-full w-full object-cover scale-[2] z-0"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-neutral-900 z-10" />

                    {/* Conteúdo */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end gap-2 p-4   text-white">
                      <h2 className="text-3xl font-semibold">
                        {item.location.city}
                      </h2>

                      <p className="text-sm font-thin text-zinc-200">
                        {item.description}
                      </p>

                      <div className="flex items-end justify-between text-sm">
                        <span>{item.duration}</span>

                        <span className="flex items-end gap-2">
                          <span>a partir de</span>
                          <span className="text-xl">R$ {item.price}</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </Container>
        </section>

        {/* Planos */}
        <section className="py-6">
          <Container>
            <Header content="Escolha seu Plano" />
            <Plans />
          </Container>
        </section>

        {/* Ofertas */}
        <section className="p-4">
          <Container
            className="
      relative
      h-100
      p-4
      shadow-xl
      border
      border-neutral-300
      rounded-xl
      bg-[url('/assets/img/home/offers.png')]
      bg-cover
      bg-center
      bg-no-repeat
      overflow-hidden
    "
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Conteúdo */}
            <div className="relative z-10 flex max-sm:flex-col justify-around items-center gap-4 h-full">
              <h2 className="flex flex-col gap-4 max-w-150 text-4xl max-sm:text-2xl font-semibold text-white">
                O seu atalho para encontrar uma ótima oferta
                <span className="max-w-fit px-4 py-1 bg-primary rounded-xl text-white">
                  com até 30% OFF
                </span>
              </h2>

              <Button className="max-w-50 h-11">Veja Ofertas</Button>
            </div>
          </Container>
        </section>

        {/* Testimoniais */}
        <section>
          <Container>
            <Header content="Principais Tours" />

            <div>
              <Slider desktop={3} mobile={1}>
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-8 p-4 rounded-2xl bg-white h-full border-2 shadow-lg border-zinc-200"
                  >
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
                    <div className="flex items-center justify-between">
                      <h2 className="text-black font-semibold text-lg text-neutral-500">
                        {item.name}
                      </h2>
                      <span className="text-xl font-semibold max-w-35 text-neutral-500">
                        {item.trip}
                      </span>
                    </div>

                    {/* Text */}
                    <div>
                      <h2 className="text-black text-2xl font-semibold">
                        {`"${item.text}"`}
                      </h2>
                    </div>

                    {/* Images */}
                    <div className="flex flex-row gap-2 mt-auto">
                      {item.images.slice(0, 1).map((image, index) => (
                        <>
                          <img
                            src={image}
                            alt={`${item.name} ${index + 1}`}
                            className="w-full aspect-square rounded-lg object-cover"
                          />
                        </>
                      ))}
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
