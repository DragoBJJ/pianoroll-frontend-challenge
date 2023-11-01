/* eslint-disable react-hooks/exhaustive-deps */

import { memo } from "react";
import { Wrapper } from "./style";
import { PianoRollCard } from "../PianoRoll";

import { PianoSequence } from "@/data/app";

type PianoListType = {
  pianoSequence: PianoSequence[];
};

export const PianoList = memo<PianoListType>(({ pianoSequence }) => {
  return (
    <Wrapper>
      {pianoSequence.length ? (
        pianoSequence.map(({ id, sequence }) => {
          return (
            <PianoRollCard key={id} rollID={id} isSmall sequence={sequence} />
          );
        })
      ) : (
        <></>
      )}
    </Wrapper>
  );
});
