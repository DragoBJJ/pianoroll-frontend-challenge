/* eslint-disable react-hooks/exhaustive-deps */

import PianoRoll from "@/data/pianoroll";
import { Sequence, SvgEventType } from "@/data/types";
import { memo, useEffect, useRef, useState } from "react";
import { Text, Wrapper, SvgWrapper, SelectedLine, SelectedArea } from "./style";

import { Svg } from "@/components/atoms/Svg";

import {
  calculatingDistance,
  calculatingSequenceIndex,
} from "@/app/utils/calculatingFunction";

type PianoRollCardType = {
  rollID: number;
  sequence: Sequence;
  isDetailPage?: boolean;
  $hasBorder?: boolean;
};

export const PianoRollCard = memo<PianoRollCardType>(
  ({ rollID, sequence, isDetailPage, $hasBorder }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    const [isSelecting, setIsSelecting] = useState(false);
    const [startPoint, setStartPoint] = useState<number>();
    const [startIndex, setStartIndex] = useState<number>();

    const selectedArea = document.getElementById("selected-area");
    const selectedLine = document.getElementById("selected-line");

    useEffect(() => {
      if (!svgRef.current || !sequence.length) return;
      new PianoRoll(rollID, svgRef.current, sequence);
    }, [rollID, sequence]);

    const handleMouseDown = (e: SvgEventType) => {
      if (!isDetailPage) return;
      setIsSelecting(true);
      const distancePercent = calculatingDistance(e);
      const startIndex = calculatingSequenceIndex(
        distancePercent,
        sequence.length
      );

      setStartPoint(distancePercent);
      setStartIndex(startIndex);
      if (selectedArea) {
        selectedArea.style.width = `0%`;
        selectedArea.style.left = `${distancePercent}%`;
      }
      console.log("startPoint", distancePercent);
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
      if (!selectedLine) return;
      const distancePercent = calculatingDistance(e);
      selectedLine.style.left = `${distancePercent}%`;
      if (!isSelecting || !isDetailPage) return;

      calculatingSequenceIndex(distancePercent, sequence.length);
      if (selectedArea && startPoint) {
        const move = distancePercent - startPoint;
        selectedArea.style.width = `${move}%`;
      }
    };

    return (
      <Wrapper $isDetailPage={isDetailPage} $hasBorder={$hasBorder}>
        <Text>This is a piano roll number {rollID}</Text>
        <SvgWrapper>
          {isDetailPage && (
            <>
              <SelectedArea id="selected-area" />
              <SelectedLine id="selected-line" />
            </>
          )}
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
