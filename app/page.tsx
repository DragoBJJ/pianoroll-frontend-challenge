"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { PianoRollsTemplate } from "@/components/templates/PianoRolls/PianoRollsTemplate";
import { PianoRollDisplay } from "@/data/app";
import { useEffect, useState } from "react";
import { Piano } from "@/components/molecules/PianoRoll";
import PianoRoll from "@/data/pianoroll";

export default function Home() {
  const [pianoRools, setPianoRools] = useState<PianoRoll[]>();

  useEffect(() => {
    const getPianoRollData = async () => {
      const csvToSvg = new PianoRollDisplay();
      const pianoRools = await csvToSvg.generateSVGs();
      setPianoRools(pianoRools);
    };
    getPianoRollData();
  }, []);

  console.log("pianoRools", pianoRools);
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
      <PianoRollsTemplate>
        {pianoRools ? (
          pianoRools.map((pianoRoll, index) => {
            const pianoData = pianoRoll.getPianoData();
            return <Piano key={index} pianoData={pianoData} />;
          })
        ) : (
          <></>
        )}
      </PianoRollsTemplate>
    </main>
  );
}
