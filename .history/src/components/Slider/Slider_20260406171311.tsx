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
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      url: "/noticia/trens",
    },
    {
      title: "Hotéis cápsula únicos",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      url: "/noticia/capsula",
    },
    {
      title: "Cultura do silêncio em público",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      url: "/noticia/silencio",
    },
    {
      title: "Banheiros tecnológicos",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      url: "/noticia/banheiros",
    },
    {
      title: "Ilhas com animais livres",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
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
          Prev
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="px-4 py-2 bg-black text-white rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}
