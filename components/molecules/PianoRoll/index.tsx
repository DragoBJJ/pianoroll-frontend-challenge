/* eslint-disable react-hooks/exhaustive-deps */

import PianoRoll from "@/data/pianoroll";
import { Sequence } from "@/data/types";
import { memo, useEffect, useRef } from "react";
import { Text, Wrapper } from "./style";
import { UsePianoContext } from "@/app/context/pianoContext";
import Link from "next/link";
import { Svg } from "@/components/atoms/Svg";

export const PianoRollCard = memo(
  ({ rollID, sequence }: { rollID: number; sequence: Sequence }) => {
    const svgRef = useRef<SVGSVGElement>();

    const { addPiano, removePiano } = UsePianoContext();
    useEffect(() => {
      if (!svgRef.current || !sequence.length) return;
      const piano = new PianoRoll(rollID, svgRef.current, sequence);
      addPiano(piano);

      return () => removePiano(piano._id);
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
          <Svg ref={svgRef} />
        </Wrapper>
      </Link>
    );
  }
);
