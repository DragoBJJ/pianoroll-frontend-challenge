/* eslint-disable react-hooks/exhaustive-deps */

import PianoRoll from "@/data/pianoroll";
import { Sequence } from "@/data/types";
import { memo, useEffect, useRef, useState } from "react";
import { Text, Wrapper } from "./style";

import Link from "next/link";
import { Svg } from "@/components/atoms/Svg/Svg";
import { SelectedArea } from "@/components/atoms/Svg/style";

type PianoRollCardType = {
  rollID: number;
  sequence: Sequence;
  isLarge?: boolean;
  isSmall?: boolean;
};

type SvgEventType = React.MouseEvent<SVGSVGElement>;

type Pointstype = {
  startPoint?: number;
  endPoint?: number;
};

export const PianoRollCard = memo<PianoRollCardType>(
  ({ rollID, sequence, isLarge, isSmall }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    const [isSelecting, setIsSelecting] = useState(false);
    const [startPoint, setStartPoint] = useState<number>();
    const [endPoint, setEndPoint] = useState<number>();
    const [percent, SetPercent] = useState<number>();
    const selectedArea = document.getElementById("selected-area");

    useEffect(() => {
      if (!svgRef.current || !sequence.length) return;
      const piano = new PianoRoll(rollID, svgRef.current, sequence);
    }, [rollID, sequence]);

    const handleMouseDown = (e: SvgEventType) => {
      console.log("Start");
      setIsSelecting(true);
      const startIndex = calculatingPercentData(e);
      setStartPoint(startIndex);
      if (selectedArea) {
        selectedArea.style.width = "0%";
        selectedArea.style.left = `${startIndex + 11.5}%`;
      }
      console.log("Start index", startIndex);
    };

    const handleMouseUp = (e: SvgEventType) => {
      console.log("Stop");
      setIsSelecting(false);
      const endIndex = calculatingPercentData(e);
      setEndPoint(endIndex);
      if (selectedArea) selectedArea.style.width = `${endIndex}%`;
      const newSequence = sequence.slice(startPoint, endIndex);
      console.log("newSequence", newSequence);
      console.log("endindex", endIndex);
    };

    const calculatingPercentData = (e: SvgEventType) => {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const distance = e.pageX - left;
      const percent = Math.round((distance / width) * 100);
      SetPercent(percent);
      const index = Math.round((percent / 100) * sequence.length);
      // console.log(`Clicked on element at index ${index}`);
      return index;
    };

    const handleMouseMove = (e: SvgEventType) => {
      if (!isSelecting) return;
      calculatingPercentData(e);
      if (selectedArea && percent) selectedArea.style.width = `${percent - 8}%`;
    };

    return (
      <Link
        draggable={false}
        href={`/piano/${rollID}`}
        style={{
          textDecoration: "none",
          color: "#1d1d1d",
        }}
      >
        <Wrapper $large={isLarge} $small={isSmall}>
          <Text>This is a piano roll number {rollID}</Text>
          <SelectedArea id="selected-area" />
          <Svg
            handleMouseDown={handleMouseDown}
            handleMouseMove={handleMouseMove}
            handleMouseUp={handleMouseUp}
            height="80%"
            width="80%"
            ref={svgRef}
          />
        </Wrapper>
      </Link>
    );
  }
);
