/* eslint-disable react-hooks/exhaustive-deps */

import PianoRoll from "@/data/pianoroll";
import { Sequence } from "@/data/types";
import { memo, useEffect, useRef } from "react";
import { Text, Wrapper } from "./style";

import Link from "next/link";
import { Svg } from "@/components/atoms/Svg/Svg";

type PianoRollCardType = {
  rollID: number;
  sequence: Sequence;
  isLarge?: boolean;
  isSmall?: boolean;
};

export const PianoRollCard = memo<PianoRollCardType>(
  ({ rollID, sequence, isLarge, isSmall }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
      if (!svgRef.current || !sequence.length) return;
      const piano = new PianoRoll(rollID, svgRef.current, sequence);

      console.log("Piano", piano);
    }, [rollID, sequence]);

    return (
      <Link
        href={`/piano/${rollID}`}
        style={{
          textDecoration: "none",
          color: "#1d1d1d",
        }}
      >
        <Wrapper $large={isLarge} $small={isSmall}>
          <Text>This is a piano roll number {rollID}</Text>
          <Svg height="80%" width="80%" ref={svgRef} />
        </Wrapper>
      </Link>
    );
  }
);
