"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

// Simulação de API local
function fetchNoticias() {
  return Promise.resolve([
    {
      title: "Máquinas de venda em todo lugar",
      image: "/images/banner.png",
      url: "/noticia/maquinas",
    },
    {
      title: "Trens extremamente pontuais",
      image: "/images/banner.png",
      url: "/noticia/trens",
    },
    {
      title: "Hotéis cápsula únicos",
      image: "/images/banner.png",
      url: "/noticia/capsula",
    },
    {
      title: "Cultura do silêncio em público",
      image: "/images/banner.png",
      url: "/noticia/silencio",
    },
    {
      title: "Banheiros tecnológicos",
      image: "/images/banner.png",
      url: "/noticia/banheiros",
    },
    {
      title: "Ilhas com animais livres",
      image: "/images/banner.png",
      url: "/noticia/ilhas",
    },
  ]);
}

export default function JapanCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [noticias, setNoticias] = useState<any[]>([]);

  useEffect(() => {
    fetchNoticias().then(setNoticias);
  }, []);

  return (
    <div className="w-full mx-auto">
      {/* NAV */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="px-4 py-2 bg-black text-white rounded-xl"
        >
          <i className="bi bi-arrow-left-circle-fill"></i>
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="px-4 py-2 bg-black text-white rounded-xl"
        >
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>

      {/* CAROUSEL */}
      <section className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-4">
          {noticias.map((item, index) => (
            <div
              key={index}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.33%]"
            >
              <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover rounded-2xl"
                />

                <div className="p-3 flex flex-col justify-around flex-1">
                  <h2 className="text-lg font-bold mb-3">{item.title}</h2>

                  <button
                    onClick={() => (window.location.href = item.url)}
                    className="rounded-md w-100 max-w-[150px] bg-orange-400 text-white py-2 px-4  hover:opacity-80 cursor-pointer"
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
