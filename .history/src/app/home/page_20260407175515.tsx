import styles from "./page.module.css";
import Searchbar from "@/components/Searchbar/Searchbar";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Slider from "@/components/Slider/Slider";
import { fetchNews } from "@/app/home/api/News";
import { fetchTrips } from "@/app/home/api/Trips";
import { mapNewsToCarousel, mapTripsToCarousel } from "@/lib/index";

export default async function Home() {
  const [newsData, tripsData] = await Promise.all([fetchNews(), fetchTrips()]);

  const news = mapNewsToCarousel(newsData);
  const trips = mapTripsToCarousel(tripsData);

  return (
    <>
      <section className={styles.heroContainer}>
        <div className={`${styles.heroCaption} flex flex-col gap-2`}>
          <h1 className="text-4xl text-center">
            Viaje com propósito. Explore com liberdade
          </h1>
          <p className="text-md lg:text-2xl text-center m-[12]">
            Experiências únicas, roteiros inteligentes e viagens planejadas.
          </p>
          <Searchbar />
        </div>
      </section>

      <Container className="flex flex-col gap-2">
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

        <section>
          <h1 className="text-2xl font-bold mb-4">Notícias</h1>
          <Slider items={news} />
        </section>

        <section>
          <h1 className="text-2xl font-bold mb-4">Viagens</h1>
          <Slider items={trips} />
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
