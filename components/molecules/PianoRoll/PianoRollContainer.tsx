"use client";

import { PianoRollsTemplate } from "@/components/templates/PianoRolls/PianoRollsTemplate";
import { PianoRollCard } from ".";
import { UsePianoContext } from "@/app/context/pianoContext";
import { Button } from "@/components/atoms/Button";

export const PianoRollContainer = () => {
  const { getPianoSequences, pianoSequenceData } = UsePianoContext();

  return (
    <>
      <Button handler={getPianoSequences} text="Load Piano rolls !" />
      <PianoRollsTemplate>
        {pianoSequenceData.length ? (
          pianoSequenceData.map(({ id, sequence }) => {
            return <PianoRollCard key={id} rollID={id} sequence={sequence} />;
          })
        ) : (
          <></>
        )}
      </PianoRollsTemplate>
    </>
  );
};
