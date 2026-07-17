import Image from "next/image";
import Header from "./Header";

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
    <>
      {/* ================= MOBILE ================= */}
      <div className="space-y-3 md:hidden">
        {/* Imagem principal */}
        <div className="relative aspect-video">
          <Image
            src={tours[0].src}
            alt=""
            fill
            priority
            className="rounded-xl object-cover"
          />
        </div>

        {/* Masonry */}
        <div className="flex items-start gap-3">
          {/* Coluna esquerda */}
          <div className="flex w-1/2 flex-col gap-3">
            <div className="relative h-[260px]">
              <Image
                src={tours[1].src}
                alt=""
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <div className="relative h-[420px]">
              <Image
                src={tours[3].src}
                alt=""
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Coluna direita */}
          <div className="flex w-1/2 flex-col gap-3">
            <div className="relative h-[400px]">
              <Image
                src={tours[2].src}
                alt=""
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <div className="relative h-[240px]">
              <Image
                src={tours[4].src}
                alt=""
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="max-md:hidden md:grid md:grid-cols-2 md:gap-2 md:mx-auto md:h-[700px]">
        <div className="relative w-full">
          <Image
            src={tours[0].src}
            alt=""
            fill
            priority
            className="rounded-xl object-cover w-full"
          />
        </div>

        <div className="grid h-full grid-cols-2 grid-rows-2 gap-3">
          {tours.slice(1).map((tour) => (
            <div key={tour.id} className="relative min-h-0">
              <Image
                src={tour.src}
                alt=""
                fill
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
