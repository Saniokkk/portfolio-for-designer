import styles from "./page.module.scss";
import { Services, Hero } from "./components";

export default function Home() {
    return (
        <main className={styles.main}>
            <Hero />
            <Services />
        </main>
    );
}
