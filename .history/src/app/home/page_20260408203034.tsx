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

      <Container>
        <Slider items={news} />
        <Slider items={trips} />
        <section
          className={`bg-amber-500 flex flex-col lg:flex-row justify-around gap-4 `}
        >
          <Image
            src="/images/discover.png"
            alt=""
            width={300}
            height={0}
            className="mx-auto lg:mx-[unset]"
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl  lg:text-4xl  text-center">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <button className="rounded bg-amber-50 text-black outline-none border-none p-3 max-w-[200px]  w-full font-bold hover:opacity-80 cursor-pointer">
              Explore
            </button>
          </div>
        </section>
      </Container>

      <Container className="flex flex-col gap-2">
        {/* <section className={`${styles.featuresContainer} grid  gap-4`}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={`${styles.card}`}>
              <Image
                className="rounded-2xl brightness-75"
                src="/images/banner.png"
                alt="Banner"
                width={500}
                height={300}
              />
              <div className={`${styles.caption} p-2`}>
                <h2 className="font-bold xl:text-xl">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
              </div>
            </div>
          ))}
        </section> 
        */}
      </Container>
    </>
  );
}
