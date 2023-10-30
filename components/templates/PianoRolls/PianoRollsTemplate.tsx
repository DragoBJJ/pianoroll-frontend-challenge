"use-client";

import { ReactNode } from "react";
import { PianoRollsWrapper } from "./style";

export const PianoRollsTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <PianoRollsWrapper id="pianoRollContainer">{children}</PianoRollsWrapper>
  );
};
