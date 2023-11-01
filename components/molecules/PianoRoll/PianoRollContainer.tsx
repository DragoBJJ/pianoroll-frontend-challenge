"use client";

import { PianoRollsTemplate } from "@/components/templates/PianoRolls/PianoRollsTemplate";
import { PianoRollDisplay } from "@/data/app";
import { useState } from "react";
import { PianoRollCard } from ".";
import { Sequence } from "@/data/types";
import { UsePianoContext } from "@/app/context/pianoContext";

export const PianoRollContainer = () => {
  const [pianoRoolData, setPianoRoolData] = useState<Sequence[]>();

  const context = UsePianoContext();

  const getPianoRollData = async () => {
    const pianoRollFacotry = new PianoRollDisplay();
    setPianoRoolData(await pianoRollFacotry.getPartData());
  };

  return (
    <>
      <div id="buttonContainer" onClick={getPianoRollData}>
        <button id="loadCSV">Load Piano Rolls!</button>
      </div>
      <PianoRollsTemplate>
        {pianoRoolData && pianoRoolData.length > 0 ? (
          pianoRoolData.map((sequence, index) => {
            return (
              <PianoRollCard key={index} rollID={index} sequence={sequence} />
            );
          })
        ) : (
          <></>
        )}
      </PianoRollsTemplate>
    </>
  );
};
