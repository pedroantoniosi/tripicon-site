"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";

// Tipo base para qualquer API
export type CarouselItem = {
  id: string | number;
  title: string;
  image: string;
  url: string;
};

// Função para normalizar diferentes APIs
export type NormalizeFn<T> = (data: T) => CarouselItem[];

// Configuração de cada API
export type ApiConfig<T> = {
  fetcher: () => Promise<T>;
  normalize: NormalizeFn<T>;
};

type Props = {
  apis: ApiConfig<any>[]; // múltiplas APIs
};

export default function MultiApiCarousel({ apis }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [items, setItems] = useState<CarouselItem[]>([]);

  // Carregar múltiplas APIs
  useEffect(() => {
    const loadData = async () => {
      try {
        const results = await Promise.all(apis.map((api) => api.fetcher()));

        const normalized = results.flatMap((result, index) =>
          apis[index].normalize(result),
        );

        setItems(normalized);
      } catch (err) {
        console.error("Erro ao carregar APIs:", err);
      }
    };

    loadData();
  }, [apis]);

  // Navegação
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full mx-auto">
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-50 w-full object-cover"
                />

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

import MultiApiCarousel from "./MultiApiCarousel";

const api1 = {
  fetcher: async () => {
    const res = await fetch("/api/japan");
    return res.json();
  },
  normalize: (data: any) =>
    data.map((item: any) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      url: item.url,
    })),
};

const api2 = {
  fetcher: async () => {
    const res = await fetch("/api/news");
    return res.json();
  },
  normalize: (data: any) =>
    data.articles.map((item: any, index: number) => ({
      id: index,
      title: item.headline,
      image: item.cover,
      url: item.link,
    })),
};

<MultiApiCarousel apis={[api1, api2]} />;

*/
