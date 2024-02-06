import styles from "./page.module.scss";
import { Services, Hero, Recenzie, Projects, About } from "./components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Recenzie />
    </main>
  );
}
