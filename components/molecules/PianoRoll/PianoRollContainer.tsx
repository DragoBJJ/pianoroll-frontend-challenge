"use client";

import { PianoRollsTemplate } from "@/components/templates/PianoRolls/PianoRollsTemplate";
import { PianoRollCard } from ".";
import { UsePianoContext } from "@/context/pianoContext";
import { Button } from "@/components/atoms/Button";
import { NavLink } from "@/components/atoms/Link";

export const PianoRollContainer = () => {
  const { getPianoSequences, PianoSequence } = UsePianoContext();

  return (
    <>
      <Button handler={getPianoSequences} text="Load Piano rolls !" />
      <PianoRollsTemplate>
        {PianoSequence.length ? (
          PianoSequence.map(({ id, sequence }) => {
            return (
              <NavLink key={id} href={`/piano/${id}`}>
                <PianoRollCard rollID={id} sequence={sequence} hasBorder />;
              </NavLink>
            );
          })
        ) : (
          <></>
        )}
      </PianoRollsTemplate>
    </>
  );
};
