import Image from "next/image";
import styles from "./page.module.css";
import { PianoRollContainer } from "@/components/molecules/PianoRoll/PianoRollContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to PianoRoll frontend coding challenge!</h1>
      <PianoRollContainer />
    </main>
  );
}
