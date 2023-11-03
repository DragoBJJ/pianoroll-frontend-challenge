import { LegacyRef, forwardRef } from "react";
import { SelectedArea } from "./style";
import { SvgEventType } from "@/data/types";

type SvgType = {
  height?: string;
  width?: string;
  handleMouseDown: (e: SvgEventType) => void;
  handleMouseMove: (e: SvgEventType) => void;
  handleMouseUp: (e: SvgEventType) => void;
};

export const Svg = forwardRef(
  (
    { handleMouseDown, handleMouseMove, handleMouseUp, height, width }: SvgType,
    ref: LegacyRef<SVGSVGElement>
  ) => {
    return (
      <svg
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
      ></svg>
    );
  }
);
