"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

// Estrutura única esperada (independente da API)
export type CarouselItem = {
  id: string | number;
  title: string;
  image: string;
  url: string;
};

type Props = {
  items: CarouselItem[]; // já vem pronto de fora
};

export default function SimpleCarousel({ items }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col w-100svh border-2 border-red-600 p-4 overflow-hidden">
      {/* NAV */}
      <div className="flex justify-between mb-4">
        <button
          onClick={scrollPrev}
          className="px-4 py-2 bg-black text-white rounded-xl"
        >
          <i className="bi bi-arrow-left-circle-fill"></i>
        </button>

        <button
          onClick={scrollNext}
          className="px-4 py-2 bg-black text-white rounded-xl"
        >
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>

      {/* CAROUSEL */}
      <section className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.33%]"
            >
              <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col h-full">
                <img src={item.image} alt={item.title} />

                <div className="p-3 flex flex-col justify-between flex-1">
                  <h2 className="text-lg font-bold mb-3">{item.title}</h2>

                  <button
                    onClick={() => window.open(item.url, "_blank")}
                    className="rounded-md max-w-[150px] bg-orange-400 text-white py-2 px-4 hover:opacity-80 cursor-pointer"
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

// ================= EXEMPLO DE USO =================

/*

// Você prepara os dados fora (API, server, etc)
const data = [
  {
    id: 1,
    title: "Curiosidade do Japão",
    image: "/img/japan1.jpg",
    url: "/post/1",
  },
];

<SimpleCarousel items={data} />;

*/
