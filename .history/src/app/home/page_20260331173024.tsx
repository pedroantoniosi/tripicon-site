import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.heroCaption} col gap-2`}>
        <h2 className={`text text-center text-4xl font-bold`}>
          Viaje com propósito. Explore com liberdade
        </h2>
        <p className="text text-center text-2xl">
          Experiências únicas, roteiros inteligentes e viagens planejadas nos
          mínimos detalhes.
        </p>
      </div>
    </div>
  );
}
