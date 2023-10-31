import { PianoRollsTemplate } from "@/components/templates/PianoRolls/PianoRollsTemplate";
import { PianoRollDisplay } from "@/data/app";
import { useState } from "react";
import { PianoRollCard } from ".";
import { Sequence } from "@/data/types";

export const PianoRollContainer = () => {
  const [pianoRoolData, setPianoRoolData] = useState<Sequence[]>();

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
        {pianoRoolData ? (
          pianoRoolData.map((sequence, index) => {
            return (
              <PianoRollCard
                key={sequence[0].start}
                rollId={index}
                sequence={sequence}
              />
            );
          })
        ) : (
          <></>
        )}
      </PianoRollsTemplate>
    </>
  );
};
