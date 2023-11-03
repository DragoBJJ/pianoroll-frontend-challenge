import PianoRoll from "@/data/pianoroll";
import { Sequence } from "@/data/types";
import { RefObject, memo, useEffect, useState } from "react";
import { Init } from "v8";

type InitializeSequenceType = {
  svgRef: RefObject<SVGSVGElement>;
  sequence: Sequence;
  rollID: number;
};

export const UseInitializeSequence = ({
  svgRef,
  sequence,
  rollID,
}: InitializeSequenceType) => {
  const [piano, setPiano] = useState<PianoRoll>();
  useEffect(() => {
    if (!svgRef.current || !sequence.length) return;
    const piano = new PianoRoll(rollID, svgRef.current, sequence);
    setPiano(piano);
  }, [rollID, sequence, svgRef]);
  return piano;
};
