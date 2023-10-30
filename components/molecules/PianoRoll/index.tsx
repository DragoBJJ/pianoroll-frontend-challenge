"use-client";

import { Wrapper, Text } from "./style";

type PianoRollType = {
  id: number;
  svgElement: SVGElement;
};

export const PianoRoll = ({ id, svgElement }: PianoRollType) => {
  console.log("svgElement", svgElement);
  return (
    <Wrapper className="piano-roll-card">
      <Text>This is a piano roll number {id}</Text>
    </Wrapper>
  );
};
