import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.heroCaption} col gap-2`}>
        <h1 className="text-8xl text-red-500">
          {" "}
          Viaje com propósito. Explore com liberdade
        </h1>
        <h2 className={`font-bold text-8xl text-center`}>
          Viaje com propósito. Explore com liberdade
        </h2>
        <p className="text-[44px]">
          Experiências únicas, roteiros inteligentes e viagens planejadas nos
          mínimos detalhes.
        </p>
      </div>
    </div>
  );
}
