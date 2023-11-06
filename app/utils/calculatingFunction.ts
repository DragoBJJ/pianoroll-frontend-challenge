import { Sequence, SvgEventType } from "@/data/types";

export const calculatingDistance = (e: SvgEventType) => {
  const { left, width } = e.currentTarget.getBoundingClientRect();
  const distance = e.pageX - left;
  let percent = Math.round((distance / width) * 100);
  if (percent < 0) percent = 0;
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
  selectedLine: HTMLElement | null,
  distancePercent: number
) => {
  if (!selectedLine) return;
  const SPACE_TO_DROP = 1;
  selectedLine.style.left = `${distancePercent - SPACE_TO_DROP}%`;
  console.log("distancePercent", selectedLine.style.left);
};

export const clearSelectedArea = (selectedArea: HTMLElement | null) => {
  if (selectedArea) selectedArea.style.width = `0%`;
};

export const setSelectedArea = (
  selectedArea: HTMLElement | null,
  distancePercent: number,
  startPoint: number
) => {
  const SPACE_TO_DROP = 1;
  const move = distancePercent - startPoint;
  if (selectedArea) {
    selectedArea.style.left = `${startPoint}%`;
    selectedArea.style.width = `${move - SPACE_TO_DROP}%`;
  }
  return selectedArea;
};
