import styles from "./page.module.scss";
import { Services, Hero, Recenzie, Projects } from "./components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
      <Services />
      <Recenzie />
    </main>
  );
}
