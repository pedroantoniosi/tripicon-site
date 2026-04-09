import styles from "./page.module.css";
import Searchbar from "@/components/searchbar/searchbar";

export default function Home() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={`${styles.heroCaption} col gap-2`}>
          <h1 className="text-6xl text-center">
            {" "}
            Viaje com propósito. Explore com liberdade
          </h1>
          <p className="text-2xl text-center m-[3rem]">
            Experiências únicas, roteiros inteligentes e viagens planejadas nos
            mínimos detalhes.
          </p>
          <Searchbar />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-[2rem] p-[2rem]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="card">
            <img src="" alt="" />
            <div className="caption">
              <h2 className="font-bold font">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="max-w-[450px]">
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
