"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { PianoRollContainer } from "@/components/molecules/PianoRoll/PianoRollContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className="navbar">
        <div className="logo-container">
          <Image src="assets/white.svg" width={100} height={100} alt="Logo" />
        </div>
      </nav>
      <h1>Welcome to PianoRoll frontend coding challenge!</h1>
      <div id="buttonContainer">
        <button id="loadCSV">Load Piano Rolls!</button>
      </div>
      <PianoRollContainer />
    </main>
  );
}
