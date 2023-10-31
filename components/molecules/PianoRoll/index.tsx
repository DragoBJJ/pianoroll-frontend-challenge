import { SvgIcon } from "@/components/atoms/Svg";
import PianoRoll from "@/data/pianoroll";
import { Sequence } from "@/data/types";
import { memo, useEffect, useRef } from "react";
import { Text, Wrapper } from "./style";

export const PianoRollCard = memo(
  ({ rollId, sequence }: { rollId: number; sequence: Sequence }) => {
    const svgRef = useRef<SVGSVGElement>();

    const saveRef = (ref: SVGSVGElement | null) => {
      if (!ref) return;
      svgRef.current = ref;
    };

    useEffect(() => {
      if (svgRef.current && sequence.length > 0) {
        new PianoRoll(svgRef.current, sequence);
      }
    }, [sequence]);

    return (
      <Wrapper className="piano-roll-card">
        <Text>This is a piano roll number {rollId}</Text>
        <SvgIcon saveRef={saveRef} />
      </Wrapper>
    );
  }
);
