import {
  calculatingDistance,
  calculatingSequenceIndex,
  setSelectedArea,
  getSelectingSequence,
  moveSelectingLine,
  initializeSelectedArea,
} from "@/app/utils/calculatingFunction";
import { Sequence, SvgEventType } from "@/data/types";
import { useState } from "react";

export const UseInteractiveSelection = (sequence: Sequence) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [startPoint, setStartPoint] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState<number>();

  let selectedArea: HTMLElement | null =
    document.getElementById("selected-area");
  let selectedLine: HTMLElement | null;

  const [newSequence, setNewSequence] = useState<Sequence | undefined>(
    sequence
  );
  const handleMouseDown = (e: SvgEventType) => {
    if (!sequence || !selectedArea) return;
    setIsSelecting(true);
    const distancePercent = calculatingDistance(e);
    const startIndex = calculatingSequenceIndex(
      distancePercent,
      sequence.length
    );
    setStartPoint(distancePercent);
    setStartIndex(startIndex);
    initializeSelectedArea(selectedArea, distancePercent);
    console.log("startPoint", distancePercent);
  };

  const handleMouseUp = (e: SvgEventType) => {
    setIsSelecting(false);
    if (!sequence || !startIndex) return;
    const newSequence = getSelectingSequence(e, sequence, startIndex);
    setNewSequence(newSequence);
    console.log("Your New Sequnce Is: ", newSequence);
  };

  const handleMouseMove = (e: SvgEventType) => {
    const distancePercent = calculatingDistance(e);
    if (!selectedLine) selectedLine = document.getElementById("selected-line");
    moveSelectingLine(e, selectedLine, distancePercent);
    if (!isSelecting || !startPoint) return;
    calculatingSequenceIndex(distancePercent, sequence.length);
    setSelectedArea(selectedArea, distancePercent, startPoint);
  };

  return {
    selectionComponents: {
      handleMouseDown,
      handleMouseMove,
      handleMouseUp,
    },
  };
};
