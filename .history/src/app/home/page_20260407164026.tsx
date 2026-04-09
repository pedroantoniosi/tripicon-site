"use client";
import styles from "./page.module.css";
import Searchbar from "@/components/Searchbar/Searchbar";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Slider from "@/components/Slider/Slider";

// const trips = [
//   { title: "", image: "/images/banner.png" },
//   { title: "", image: "/images/banner.png" },
//   { title: "", image: "/images/banner.png" },
// ];

// const reviews = [
//   {
//     name: "Mariana Souza",
//     text: "Viajar para Kyoto sempre foi um sonho, mas eu não fazia ideia de por onde começar. A plataforma montou tudo pra mim e a experiência foi simplesmente perfeita.",
//     stars: 5,
//   },
//   {
//     name: "Lucas Ferreira",
//     text: "Fiquei impressionado com a organização. Desde Tokyo até Osaka, tudo foi muito bem planejado. Zero dor de cabeça.",
//     stars: 5,
//   },
//   {
//     name: "Camila Ribeiro",
//     text: "Eu queria uma viagem mais cultural e menos turística, e eles acertaram exatamente no que eu buscava. Kyoto foi o ponto alto da viagem.",
//     stars: 5,
//   },
//   {
//     name: "Rafael Martins",
//     text: "Foi minha primeira viagem internacional e eu estava inseguro. O suporte foi excelente do começo ao fim, principalmente durante a estadia em Tokyo.",
//     stars: 5,
//   },
//   {
//     name: "Juliana Costa",
//     text: "Consegui montar um roteiro completo em poucos minutos. A experiência no Monte Fuji foi inesquecível. Recomendo muito.",
//     stars: 5,
//   },
// ];

export default function Home() {
  // Fetch direto no servidor (paralelo = mais performático)
  const [newsData, tripsData] = await Promise.all([fetchNews(), fetchTrips()]);

  const news = mapNewsToCarousel(newsData);
  const trips = mapTripsToCarousel(tripsData);
  return (
    <>
      {/* Sessão Inicial  Principal */}
      <section className={styles.heroContainer}>
        <div className={`${styles.heroCaption} flex flex-col gap-2`}>
          <h1 className="text-4xl  text-center">
            Viaje com propósito. Explore com liberdade
          </h1>
          <p className="text-md lg:text-2xl text-center m-[12]">
            Experiências únicas, roteiros inteligentes e viagens planejadas nos
            mínimos detalhes.
          </p>
          <Searchbar />
        </div>
      </section>

      <Container>
        <section
          className={`${styles.featuresContainer} grid grid-cols-2 lg:grid-cols-4 gap-4`}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={`${styles.card}`}>
              <Image
                className="rounded-2xl"
                src="/images/banner.png"
                alt="Banner"
                width={500}
                height={300}
              />
              <div className={`${styles.caption} p-2`}>
                <h2 className="font-bold font">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className={`${styles.text} text-neutral-400 max-w-[500px]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore vitae similique animi officiis perferendis. Expedita,
                  atque!
                </p>
              </div>
            </div>
          ))}
        </section>

        <section
          className={`${styles.discoverContainer} flex gap-2 justify-around items-center rounded-2xl`}
        >
          <Image src="/images/discover.png" alt="" width={500} height={300} />
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <button className="rounded bg-amber-50 text-black outline-none border-none p-3 max-w-[200px] m-auto w-100 font-bold hover:opacity-80 cursor-pointer">
              Explore
            </button>
          </div>
        </section>
      </Container>
    </>
  );
}
