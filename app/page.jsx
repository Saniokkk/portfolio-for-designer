import styles from "./page.module.scss";
import { Services, Hero, About, Recenzie } from "./components";

export default function Home() {
    return (
        <main className={styles.main}>
            <Hero />
            <About />
            <Services />
            <Recenzie />
        </main>
    );
}
