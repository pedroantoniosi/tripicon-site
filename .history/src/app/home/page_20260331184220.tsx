import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.heroCaption} col gap-2`}>
        <h1 className="text-6xl text-center">
          {" "}
          Viaje com propósito. Explore com liberdade
        </h1>
        <p className="text-xl text-center m-[3rem]">
          Experiências únicas, roteiros inteligentes e viagens planejadas nos
          mínimos detalhes.
        </p>
      </div>
    </div>
  );
}
