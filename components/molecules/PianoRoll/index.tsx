import { SvgIcon } from "@/components/atoms/Svg";
import PianoRoll from "@/data/pianoroll";
import { Sequence } from "@/data/types";
import { memo, useEffect, useRef } from "react";
import { Text, Wrapper } from "./style";
import { UsePianoContext } from "@/app/context/pianoContext";

export const PianoRollCard = memo(
  ({ rollID, sequence }: { rollID: number; sequence: Sequence }) => {
    const svgRef = useRef<SVGSVGElement>();
    const saveRef = (ref: SVGSVGElement | null) => {
      if (!ref) return;
      svgRef.current = ref;
    };

    const { addPiano, pianoRollsData } = UsePianoContext();
    console.log("sequence", sequence);
    useEffect(() => {
      if (svgRef.current && sequence.length > 0) {
        const piano = new PianoRoll(rollID, svgRef.current, sequence);
        // console.log("piano", piano);
      }
    }, []);

    return (
      <Wrapper className="piano-roll-card">
        <Text>This is a piano roll number {rollID}</Text>
        <SvgIcon saveRef={saveRef} />
      </Wrapper>
    );
  }
);
