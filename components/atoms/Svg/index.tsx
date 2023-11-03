import { LegacyRef, forwardRef } from "react";
import { SelectingComponentType } from "@/data/types";
import { SvgContainer } from "./style";

type SvgType = {
  height?: string;
  width?: string;
  selectingSequenceComponents?: SelectingComponentType["selectingSequenceComponents"];
};
export const Svg = forwardRef(
  (
    { selectingSequenceComponents, height, width }: SvgType,
    ref: LegacyRef<SVGSVGElement>
  ) => {
    const { handleMouseDown, handleMouseMove, handleMouseUp } =
      selectingSequenceComponents || {};

    return (
      <SvgContainer
        height={height}
        width={width}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="piano-roll-svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={ref}
      />
    );
  }
);
