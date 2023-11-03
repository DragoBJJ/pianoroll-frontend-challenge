/* eslint-disable react-hooks/exhaustive-deps */

import PianoRoll from "@/data/pianoroll";
import { Sequence, SvgEventType } from "@/data/types";
import { memo, useEffect, useRef, useState } from "react";
import { Text, Wrapper, SvgWrapper } from "./style";

import { Svg } from "@/components/atoms/Svg/Svg";
import { SelectedArea } from "@/components/atoms/Svg/style";
import {
  calculatingDistance,
  calculatingSequenceIndex,
} from "@/app/utils/calculatingFunction";

type PianoRollCardType = {
  rollID: number;
  sequence: Sequence;
  isLarge?: boolean;
};

export const PianoRollCard = memo<PianoRollCardType>(
  ({ rollID, sequence, isLarge }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    const [isSelecting, setIsSelecting] = useState(false);
    const [startPoint, setStartPoint] = useState<number>();
    const [startIndex, setStartIndex] = useState<number>();

    const selectedArea = document.getElementById("selected-area");

    useEffect(() => {
      if (!svgRef.current || !sequence.length) return;
      new PianoRoll(rollID, svgRef.current, sequence);
    }, [rollID, sequence]);

    const handleMouseDown = (e: SvgEventType) => {
      if (!isLarge) return;
      setIsSelecting(true);
      const percent = calculatingDistance(e);
      const startIndex = calculatingSequenceIndex(percent, sequence.length);

      setStartPoint(percent);
      setStartIndex(startIndex);
      if (selectedArea) {
        selectedArea.style.width = `0%`;
        selectedArea.style.left = `${percent}%`;
      }
      console.log("startPoint", percent);
    };

    const handleMouseUp = (e: SvgEventType) => {
      setIsSelecting(false);
      const percet = calculatingDistance(e);
      const endIndex = calculatingSequenceIndex(percet, sequence.length);
      const newSequence = sequence.slice(startIndex, endIndex);

      console.log("StartIndex", startIndex);
      console.log("endIndex", endIndex);
      console.log("newSequence", newSequence);
    };

    const handleMouseMove = (e: SvgEventType) => {
      if (!isSelecting || !isLarge) return;
      const percent = calculatingDistance(e);
      calculatingSequenceIndex(percent, sequence.length);
      if (selectedArea && startPoint) {
        const move = percent - startPoint;
        selectedArea.style.width = `${move}%`;
      }
    };

    return (
      <Wrapper $large={isLarge}>
        <Text>This is a piano roll number {rollID}</Text>
        <SvgWrapper>
          <SelectedArea id="selected-area" />
          <Svg
            handleMouseDown={handleMouseDown}
            handleMouseMove={handleMouseMove}
            handleMouseUp={handleMouseUp}
            height="100%"
            width="100%"
            ref={svgRef}
          />
        </SvgWrapper>
      </Wrapper>
    );
  }
);
