"use client";

import { UsePianoContext } from "@/app/context/pianoContext";
import { Wrapper, Text } from "@/components/molecules/PianoRoll/style";
import { useEffect } from "react";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const { pianoRollsData, getPianoRollByID } = UsePianoContext();

  useEffect(() => {
    const piano = getPianoRollByID(Number(id));
    const pianoData = piano?.getPianoData();
    const svg = pianoData?.svgElement;
  }, []);
  console.log("pianoRollsData", pianoRollsData);
  return (
    <Wrapper className="piano-roll-card">
      <Text>This is a piano roll number {id}</Text>
    </Wrapper>
  );
};

export default Page;
