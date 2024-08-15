import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello, Welcome to my page.<br />
          Good to see you.<br />
          For now, There is nothing,<br />
          but soon you will see something.
        </p>
      </div>
    </main>
  );
}
