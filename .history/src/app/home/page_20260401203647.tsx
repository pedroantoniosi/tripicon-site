"use client";
import styles from "./page.module.css";
import Searchbar from "@/components/searchbar/searchbar";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Slider from "@/components/Slider/Slider";

const trips = [
  { title: "", image: "/images/banner.png" },
  { title: "", image: "/images/banner.png" },
  { title: "", image: "/images/banner.png" },
];

const reviews = [
  {
    name: "Mariana Souza",
    text: "Viajar para Kyoto sempre foi um sonho, mas eu não fazia ideia de por onde começar. A plataforma montou tudo pra mim e a experiência foi simplesmente perfeita.",
    stars: 5,
  },
  {
    name: "Lucas Ferreira",
    text: "Fiquei impressionado com a organização. Desde Tokyo até Osaka, tudo foi muito bem planejado. Zero dor de cabeça.",
    stars: 5,
  },
  {
    name: "Camila Ribeiro",
    text: "Eu queria uma viagem mais cultural e menos turística, e eles acertaram exatamente no que eu buscava. Kyoto foi o ponto alto da viagem.",
    stars: 5,
  },
  {
    name: "Rafael Martins",
    text: "Foi minha primeira viagem internacional e eu estava inseguro. O suporte foi excelente do começo ao fim, principalmente durante a estadia em Tokyo.",
    stars: 5,
  },
  {
    name: "Juliana Costa",
    text: "Consegui montar um roteiro completo em poucos minutos. A experiência no Monte Fuji foi inesquecível. Recomendo muito.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Sessão Inicial  Principal */}
      <section className={styles.heroContainer}>
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
      </section>

      {/* Sessão de Novidades */}
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-2 p-2 gap-2 lg:p-4 lg:gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex gap-2 lg:flex-col">
              <Image
                className="rounded-2xl"
                src="/images/banner.png"
                alt="Banner"
                width={500}
                height={300}
              />
              <div className="caption md:content-end">
                <h2 className="font-bold font">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="text-neutral-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore vitae similique animi officiis perferendis. Expedita,
                  atque!
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Sessão de planos de viagens */}
        <div className="p-2 lg:p-8">
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
                  className="w-full h-[400px] object-cover"
                />
                <h2 className="p-4 font-bold">{item.title}</h2>
              </div>
            )}
          />
        </div>

        {/* Sessão de planos de viagens */}
        <div className="p-2 lg:p-8 ">
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
                  className="w-full h-[400px] object-cover"
                />
                <h2 className="p-4 font-bold">{item.title}</h2>
              </div>
            )}
          />
        </div>

        {/* Sessão de planos de viagens */}
        <div className="p-2 lg:p-8 ">
          <div className="flex gap-2">
            <Slider
              data={reviews}
              slidesPerView={{
                mobile: 1.2,
                tablet: 2,
                desktop: 3,
              }}
              autoplay
              loop
              renderItem={(item) => (
                <div className="rounded-xl overflow-hidden shadow flex flex-col gap-2 bg-stone-900  p-2 rounded-2xl">
                  <div className="flex gap-1">
                    {Array.from({ length: item.stars }).map((_, index) => (
                      <i
                        key={index}
                        className="bi bi-star-fill text-yellow-300"
                      ></i>
                    ))}
                  </div>
                  <h2 className="font-bold">{item.name}</h2>
                  <p>{item.text}</p>
                </div>
              )}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
