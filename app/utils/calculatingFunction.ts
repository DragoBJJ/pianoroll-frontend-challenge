import { SvgEventType } from "@/data/types";

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
