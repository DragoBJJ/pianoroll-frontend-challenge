import {
  calculatingDistance,
  calculatingSequenceIndex,
  setSelectedArea,
  getSelectingSequence,
  moveSelectingLine,
  clearSelectedArea,
} from "@/app/utils/calculatingFunction";
import { Sequence, SvgEventType } from "@/data/types";
import { useState } from "react";

export const UseInteractiveSelection = (sequence: Sequence) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [startPoint, setStartPoint] = useState<number>();
  const [startIndex, setStartIndex] = useState<number>();

  let selectedArea: HTMLElement | null;
  let selectedLine: HTMLElement | null;

  const [newSequence, setNewSequence] = useState<Sequence | null>();

  const handleMouseDown = (e: SvgEventType) => {
    if (!sequence) return;
    setIsSelecting(true);
    setNewSequence(null);
    clearSelectedArea(selectedArea);
    const distancePercent = calculatingDistance(e);
    const startIndex = calculatingSequenceIndex(
      distancePercent,
      sequence.length
    );
    setStartPoint(distancePercent);
    setStartIndex(startIndex);
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
    if (!selectedArea) selectedArea = document.getElementById("selected-area");
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
    newSequence,
  };
};
