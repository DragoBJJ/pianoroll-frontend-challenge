import { LegacyRef, forwardRef } from "react";

type SvgType = {
  height?: string;
  width?: string;
  handleMouseDown: (e: React.MouseEvent<SVGSVGElement>) => void;
  handleMouseMove: (e: React.MouseEvent<SVGSVGElement>) => void;
  handleMouseUp: (e: React.MouseEvent<SVGSVGElement>) => void;
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
      />
    );
  }
);
