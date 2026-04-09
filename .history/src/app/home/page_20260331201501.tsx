import styles from "./page.module.css";

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
        </div>
      </div>
      <div className="ggrid grid-rows-[repeat(3,minmax(250px,1fr))] gap-4 p-[2rem]">
        <div className="card">
          <img src="" alt="" />
          <div className="caption">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              vitae similique animi officiis perferendis. Expedita, atque!
            </p>
          </div>
        </div>
        <div className="card">
          <img src="" alt="" />
          <div className="caption">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              vitae similique animi officiis perferendis. Expedita, atque!
            </p>
          </div>
        </div>
        <div className="card">
          <img src="" alt="" />
          <div className="caption">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              vitae similique animi officiis perferendis. Expedita, atque!
            </p>
          </div>
        </div>
        <div className="card">
          <img src="" alt="" />
          <div className="caption">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              vitae similique animi officiis perferendis. Expedita, atque!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
