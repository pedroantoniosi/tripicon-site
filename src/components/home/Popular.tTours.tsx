import Image from "next/image";

const tours = [
  {
    id: 0,
    src: "/assets/img/home/0.jfif",
    className: "relative w-full h-[200px]",
  },
  {
    id: 1,
    src: "/assets/img/home/1.jfif",
    className: "relative float-left w-[48%] h-[260px]",
  },
  {
    id: 2,
    src: "/assets/img/home/2.jfif",
    className: "relative float-right w-[48%] h-[400px]",
  },
  {
    id: 3,
    src: "/assets/img/home/3.jfif",
    className: "relative float-left clear-left w-[48%] h-[450px] mt-4",
  },
  {
    id: 4,
    src: "/assets/img/home/4.jfif",
    className: "relative float-right w-[48%] h-[310px] mt-4",
  },
];

export default function PopularTours() {
  return (
    <section className="p-2">
      <h2 className="font-bold text-xl py-4 md:text-center md:text-2xl">
        Conheça lugares sensacionais
      </h2>

      <div className="flex flex-col gap-2 md:max-w-[1024px] md:mx-auto">
        {/* Primeira imagem */}
        <div className={tours[0].className}>
          <Image
            src={tours[0].src}
            alt=""
            fill
            sizes="100vw"
            className="rounded-xl object-cover"
            priority
          />
        </div>

        {/* Demais imagens */}
        <div className="w-full">
          {tours.slice(1).map((tour) => (
            <div key={tour.id} className={tour.className}>
              <Image
                src={tour.src}
                alt=""
                fill
                sizes="(max-width: 768px) 48vw, 500px"
                className="rounded-xl object-cover"
              />
            </div>
          ))}

          <div className="clear-both" />
        </div>
      </div>
    </section>
  );
}
