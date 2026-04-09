"use client";
import styles from "./page.module.css";
import Searchbar from "@/components/searchbar/searchbar";
import Image from "next/image";
import Slider from "@/components/Slider/Slider";

const trips = [
  { title: "Japão", image: "/images/banner.png" },
  { title: "Paris", image: "/images/banner.png" },
  { title: "Brasil", image: "/images/banner.png" },
];

export default function Home() {
  return (
    <>
      {/* Sessão Inicial  Principal */}
      <div className={styles.heroContainer}>
        <div className={`${styles.heroCaption} col gap-2`}>
          <h1 className="text-4xl  text-center">
            {" "}
            Viaje com propósito. Explore com liberdade
          </h1>
          <p className="text-md lg:text-2xl text-center m-[12]">
            Experiências únicas, roteiros inteligentes e viagens planejadas nos
            mínimos detalhes.
          </p>
          <Searchbar />
        </div>
      </div>

      {/* Sessão de Novidades */}
      <div className="grid grid-cols-1 md:grid-cols p-2 gap-2 lg:p-4 lg:gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex gap-2">
            <Image
              className="max-w-[250px]"
              src="/images/banner.png"
              alt="Banner"
              width={500}
              height={300}
            />
            <div className="caption md:content-end">
              <h2 className="font-bold font">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                vitae similique animi officiis perferendis. Expedita, atque!
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Sessão de planos de viagens */}
      <div className="p-8">
        <Slider
          data={trips}
          slidesPerView={{
            mobile: 1,
            tablet: 2,
            desktop: 3,
          }}
          autoplay
          loop
          renderItem={(item) => (
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />
              <h2 className="p-4 font-bold">{item.title}</h2>
            </div>
          )}
        />
      </div>
    </>
  );
}
