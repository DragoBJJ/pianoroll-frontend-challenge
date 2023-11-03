import { ReactNode, memo } from "react";
import { PianoRollsWrapper } from "./style";

type PianoRollsTemplateType = {
  children: ReactNode;
};

export const PianoRollsTemplate = memo<PianoRollsTemplateType>(
  ({ children }) => {
    return (
      <PianoRollsWrapper id="pianoRollContainer">{children}</PianoRollsWrapper>
    );
  }
);
