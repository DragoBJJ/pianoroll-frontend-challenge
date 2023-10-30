"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { PianoRollsTemplate } from "@/components/templates/PianoRolls/PianoRollsTemplate";
import { PianoRollDisplay, PianoRollType } from "@/data/app";
import { useEffect, useState } from "react";
import { PianoRoll } from "@/components/molecules/PianoRoll";

export default function Home() {
  const [rollData, setRollData] = useState<PianoRollType[]>();

  useEffect(() => {
    const getPianoRollData = async () => {
      const csvToSvg = new PianoRollDisplay();
      await csvToSvg.generateSVGs();
      const rollData = csvToSvg.getRollData();
      setRollData(rollData);
    };
    getPianoRollData();
  }, []);

  console.log("rollData", rollData);
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

      {rollData && rollData?.length > 0 ? (
        <PianoRollsTemplate>
          {rollData.map((roll, index) => {
            return (
              <PianoRoll key={index} id={index} svgElement={roll.svgElement} />
            );
          })}
        </PianoRollsTemplate>
      ) : (
        <></>
      )}
    </main>
  );
}
