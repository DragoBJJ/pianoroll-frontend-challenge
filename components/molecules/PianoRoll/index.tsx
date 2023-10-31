"use-client";
import { Wrapper, Text } from "./style";
import { PianoRollData } from "@/data/app";

type PianoRollType = {
  pianoData: PianoRollData;
};

export const Piano = ({ pianoData }: PianoRollType) => {
  const svg = pianoData.svgElement;
  console.log("svg", pianoData);
  return (
    <Wrapper className="piano-roll-card">
      <svg />
      <Text>This is a piano roll number {pianoData.start}</Text>
    </Wrapper>
  );
};
