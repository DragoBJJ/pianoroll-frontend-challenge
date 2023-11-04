import { Sequence, SvgEventType } from "@/data/types";

export const calculatingDistance = (e: SvgEventType) => {
  const { left, width } = e.currentTarget.getBoundingClientRect();
  const distance = e.pageX - left;
  const percent = Math.round((distance / width) * 100);
  return percent;
};

export const calculatingSequenceIndex = (
  percent: number,
  sequenceLength: number
) => {
  const index = Math.round((percent / 100) * sequenceLength);
  console.log(`Clicked on element at index ${index}`);
  return index;
};

export const getSelectingSequence = (
  e: SvgEventType,
  sequence: Sequence,
  startIndex: number
) => {
  const percet = calculatingDistance(e);
  const endIndex = calculatingSequenceIndex(percet, sequence.length);
  const newSequence = sequence.slice(startIndex, endIndex);
  return newSequence;
};

export const moveSelectingLine = (
  e: SvgEventType,
  selectedLine: HTMLElement,
  distancePercent: number
) => {
  const SPACE_TO_DROP = 1;
  selectedLine.style.left = `${distancePercent - SPACE_TO_DROP}%`;
  console.log("distancePercent", selectedLine.style.left);
};

export const initializeSelectedArea = (
  selectedArea: HTMLElement,
  distancePercent: number
) => {
  if (selectedArea) {
    selectedArea.style.width = `0%`;
    selectedArea.style.left = `${distancePercent}%`;
  }
};

export const setSelectedArea = (
  selectedArea: HTMLElement,
  distancePercent: number,
  startPoint: number
) => {
  const SPACE_TO_DROP = 1;
  if (selectedArea && startPoint) {
    const move = distancePercent - startPoint;
    selectedArea.style.width = `${move - SPACE_TO_DROP}%`;
  }
};
