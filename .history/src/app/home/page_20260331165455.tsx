import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.heroCaption} col gap-2`}>
        <h2 className={`${styles.heroTitle} hero-title m-{50px}`}>
          Viaje com propósito. Explore com liberdade
        </h2>
        <p className="text text-center">
          <i className="bi bi-0-circle"></i>
          Experiências únicas, roteiros inteligentes e viagens planejadas nos
          mínimos detalhes.
        </p>
        <h1 className="text-red-500 text-4xl font-bold">
          Tailwind funcionando
        </h1>
      </div>
    </div>
  );
}
