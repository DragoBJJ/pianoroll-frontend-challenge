import PianoRoll from "@/data/pianoroll";
import { Sequence } from "@/data/types";
import { memo, useEffect, useRef } from "react";

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
      <div className="piano-roll-card">
        <div className="description">This is a piano roll number {rollId}</div>
        <svg
          className="piano-roll-svg"
          width="80%"
          height="150"
          ref={saveRef}
        />
      </div>
    );
  }
);
