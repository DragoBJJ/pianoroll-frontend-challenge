/* eslint-disable react-hooks/exhaustive-deps */

import { memo } from "react";
import { Wrapper } from "./style";
import { PianoRollCard } from "../PianoRoll";
import { PianoSequence } from "@/data/types";
import { NavLink } from "@/components/atoms/Link";

type PianoListType = {
  pianoSequence: PianoSequence[];
};

export const PianoList = memo<PianoListType>(({ pianoSequence }) => {
  return (
    <Wrapper>
      {pianoSequence.length ? (
        pianoSequence.map(({ id, sequence }) => {
          return (
            <NavLink key={id} href={`/piano/${id}`}>
              <PianoRollCard rollID={id} sequence={sequence} />;
            </NavLink>
          );
        })
      ) : (
        <></>
      )}
    </Wrapper>
  );
});
