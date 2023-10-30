"use-client";
import PianoRoll from "../../../data/pianoroll";
import { Wrapper, Text } from "./style";
import SvgIcon from "../../atoms/Svg";
import { useEffect } from "react";
import { Sequence } from "@/data/types";

type PianoRollType = {
  id: number;
  svgElement: SVGElement;
  partData: Sequence;
};

export const Piano = ({ id, svgElement, partData }: PianoRollType) => {
  useEffect(() => {
    new PianoRoll(svgElement, partData);
  }, [partData, svgElement]);

  return (
    <Wrapper className="piano-roll-card">
      <Text>This is a piano roll number {id}</Text>
      {/* <SvgIcon /> */}
    </Wrapper>
  );
};
