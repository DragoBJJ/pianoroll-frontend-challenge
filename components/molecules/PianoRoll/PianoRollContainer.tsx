import { PianoRollsTemplate } from "@/components/templates/PianoRolls/PianoRollsTemplate";
import { PianoRollDisplay } from "@/data/app";
import { useEffect, useState } from "react";
import { PianoRollCard } from "./PianoRollCard";
import { Sequence } from "@/data/types";

export const PianoRollContainer = () => {
  const [pianoRoolData, setPianoRoolData] = useState<Sequence[]>();

  const getPianoRollData = async () => {
    const pianoRollFacotry = new PianoRollDisplay();
    setPianoRoolData(await pianoRollFacotry.getPartData());
  };

  useEffect(() => {
    getPianoRollData();
  }, []);

  return (
    <PianoRollsTemplate>
      {pianoRoolData ? (
        pianoRoolData.map((sequence, index) => {
          return (
            <PianoRollCard key={index} rollId={index} sequence={sequence} />
          );
        })
      ) : (
        <></>
      )}
    </PianoRollsTemplate>
  );
};
