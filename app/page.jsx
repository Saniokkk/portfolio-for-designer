import styles from "./page.module.scss";
import { Services } from "./components/Services/Services";

export default function Home() {
  return (
    <main className={styles.main}>
      <Services />
    </main>
  );
}
