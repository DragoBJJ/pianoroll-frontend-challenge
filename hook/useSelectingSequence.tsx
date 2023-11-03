import {
  calculatingDistance,
  calculatingSequenceIndex,
} from "@/app/utils/calculatingFunction";
import { SelectingComponentType, Sequence, SvgEventType } from "@/data/types";
import { useState } from "react";

export const UseSelectingSequence = (
  sequence?: Sequence | undefined
): SelectingComponentType => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [startPoint, setStartPoint] = useState<number>();
  const [startIndex, setStartIndex] = useState<number>();

  const selectedArea = document.getElementById("selected-area");
  const selectedLine = document.getElementById("selected-line");

  const [newSequence, setNewSequence] = useState<Sequence | undefined>(
    sequence
  );
  const handleMouseDown = (e: SvgEventType) => {
    if (!sequence) return;
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
    if (!sequence) return;
    setIsSelecting(false);
    const percet = calculatingDistance(e);
    const endIndex = calculatingSequenceIndex(percet, sequence.length);
    const newSequence = sequence.slice(startIndex, endIndex);
    setNewSequence(newSequence);
    console.log("StartIndex", startIndex);
    console.log("endIndex", endIndex);

    console.log("Your New Sequnce Is: ", newSequence);
  };

  const handleMouseMove = (e: SvgEventType) => {
    if (!selectedLine || !sequence) return;
    const distancePercent = calculatingDistance(e);
    const SPACE_TO_DROP = 1;
    selectedLine.style.left = `${distancePercent - SPACE_TO_DROP}%`;
    console.log("distancePercent", selectedLine.style.left);
    if (!isSelecting) return;

    calculatingSequenceIndex(distancePercent, sequence.length);
    if (selectedArea && startPoint) {
      const move = distancePercent - startPoint;
      selectedArea.style.width = `${move - SPACE_TO_DROP}%`;
    }
  };

  return {
    selectingSequenceComponents: {
      handleMouseDown,
      handleMouseMove,
      handleMouseUp,
    },
  };
};
