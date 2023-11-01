/* eslint-disable react-hooks/exhaustive-deps */

import PianoRoll from "@/data/pianoroll";
import { Sequence } from "@/data/types";
import { memo, useEffect, useRef } from "react";
import { Text, Wrapper } from "./style";

import Link from "next/link";
import { Svg } from "@/components/atoms/Svg/Svg";

export const PianoRollCard = memo(
  ({ rollID, sequence }: { rollID: number; sequence: Sequence }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
      if (!svgRef.current || !sequence.length) return;
      new PianoRoll(rollID, svgRef.current, sequence);
    }, [rollID, sequence]);

    return (
      <Link
        href={`/piano/${rollID}`}
        style={{
          textDecoration: "none",
        }}
      >
        <Wrapper className="piano-roll-card">
          <Text>This is a piano roll number {rollID}</Text>
          <Svg height="150px" width="80%" ref={svgRef} />
        </Wrapper>
      </Link>
    );
  }
);
