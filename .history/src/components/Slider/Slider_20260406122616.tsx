"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

// Simulação de API local
function fetchNoticias() {
  return Promise.resolve([
    {
      title: "Máquinas de venda em todo lugar",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      url: "/noticia/maquinas",
    },
    {
      title: "Trens extremamente pontuais",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
      url: "/noticia/trens",
    },
    {
      title: "Hotéis cápsula únicos",
      image: "https://images.unsplash.com/photo-1551887373-1d0f6e3e3f3f",
      url: "/noticia/capsula",
    },
    {
      title: "Cultura do silêncio em público",
      image: "https://images.unsplash.com/photo-1526481280690-8fcc13fd8c12",
      url: "/noticia/silencio",
    },
    {
      title: "Banheiros tecnológicos",
      image: "https://images.unsplash.com/photo-1582582494700-8f7c6d6d3e2f",
      url: "/noticia/banheiros",
    },
    {
      title: "Ilhas com animais livres",
      image: "https://images.unsplash.com/photo-1501706362039-c6e80948bb0e",
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
    <div className="w-full max-w-6xl mx-auto">
      {/* NAV */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="px-4 py-2 bg-black text-white rounded-xl"
        >
          Prev
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="px-4 py-2 bg-black text-white rounded-xl"
        >
          Next
        </button>
      </div>

      {/* CAROUSEL */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {noticias.map((item, index) => (
            <div
              key={index}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.33%] p-3"
            >
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4 flex flex-col justify-between flex-1">
                  <h2 className="text-lg font-bold mb-3">{item.title}</h2>

                  <button
                    onClick={() => (window.location.href = item.url)}
                    className="mt-auto bg-red-500 text-white py-2 px-4 rounded-xl hover:opacity-80"
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
