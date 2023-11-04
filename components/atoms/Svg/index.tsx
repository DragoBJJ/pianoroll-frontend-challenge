import { LegacyRef, forwardRef } from "react";
import { SelectionComponent } from "@/data/types";
import { SvgContainer } from "./style";

type SvgType = {
  height?: string;
  width?: string;
  selectionComponents?: SelectionComponent["selectionComponent"];
};
export const Svg = forwardRef(
  (
    { selectionComponents, height, width }: SvgType,
    ref: LegacyRef<SVGSVGElement>
  ) => {
    const { handleMouseDown, handleMouseMove, handleMouseUp } =
      selectionComponents || {};

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
