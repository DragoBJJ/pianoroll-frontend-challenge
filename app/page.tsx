"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { PianoRollsTemplate } from "@/components/templates/PianoRolls/PianoRollsTemplate";
import { PianoRollDisplay } from "@/data/app";

export default function Home() {
  const getPianoRollData = () => {
    const csvToSvg = new PianoRollDisplay();
    csvToSvg.generateSVGs();
  };

  return (
    <main className={styles.main}>
      <nav className="navbar">
        <div className="logo-container">
          <Image src="assets/white.svg" width={100} height={100} alt="Logo" />
        </div>
      </nav>

      <h1>Welcome to PianoRoll frontend coding challenge!</h1>

      <div id="buttonContainer" onClick={getPianoRollData}>
        <button id="loadCSV">Load Piano Rolls!</button>
      </div>
      <PianoRollsTemplate />
    </main>
  );
}
