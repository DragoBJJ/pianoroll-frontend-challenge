"use client";

import { PianoRollsTemplate } from "@/components/templates/PianoRolls/PianoRollsTemplate";
import { PianoRollCard } from ".";
import { UsePianoContext } from "@/context/pianoContext";
import { Button } from "@/components/atoms/Button";

export const PianoRollContainer = () => {
  const { getPianoSequences, PianoSequence } = UsePianoContext();

  return (
    <>
      <Button handler={getPianoSequences} text="Load Piano rolls !" />
      <PianoRollsTemplate>
        {PianoSequence.length ? (
          PianoSequence.map(({ id, sequence }) => {
            return <PianoRollCard key={id} rollID={id} sequence={sequence} />;
          })
        ) : (
          <></>
        )}
      </PianoRollsTemplate>
    </>
  );
};
