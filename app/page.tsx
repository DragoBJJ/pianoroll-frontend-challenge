"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { PianoRollsTemplate } from "@/components/templates/PianoRolls/PianoRollsTemplate";
import { PianoRollDisplay, PianoRollType } from "@/data/app";
import { use, useEffect, useState } from "react";
import { Piano } from "@/components/molecules/PianoRoll";

export default function Home() {
  const [rollData, setRollData] = useState<any[]>();

  const getPianoRollData = async () => {
    const csvToSvg = new PianoRollDisplay();
    const rollData = await csvToSvg.generateSVGs();
    setRollData(rollData);
  };

  useEffect(() => {
    getPianoRollData();
  }, []);

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
        {/* {rollData &&
          rollData.map((roll, index) => {
            return (
              <Piano
                key={index}
                id={index}
                svgElement={roll.svgElement}
                partData={roll.partData}
              />
            );
          })} */}
      </PianoRollsTemplate>
    </main>
  );
}
