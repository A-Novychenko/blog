import {Welcome} from "@/components/Welcome/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
    </main>
  );
}
