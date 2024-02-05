import styles from "./page.module.scss";
import { Services, Hero, Recenzie } from "./components";

export default function Home() {
    return (
        <main className={styles.main}>
            <Hero />
            <Services />
            <Recenzie />
        </main>
    );
}
