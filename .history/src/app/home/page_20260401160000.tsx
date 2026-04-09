import styles from "./page.module.css";
import Searchbar from "@/components/searchbar/searchbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4] p-[2]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex gap-2">
            <Image
              className="max-w-[25] lg:max-w-[20vw]"
              src="/images/banner.png"
              alt=""
            />
            <div className="caption md:content-end">
              <h2 className="font-bold font">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className=" bg-red-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                vitae similique animi officiis perferendis. Expedita, atque!
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
