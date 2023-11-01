import { LegacyRef, forwardRef } from "react";

type SvgType = {
  height?: string;
  width?: string;
};

export const Svg = forwardRef(
  (props: SvgType, ref: LegacyRef<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        className="piano-roll-svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={ref}
      ></svg>
    );
  }
);
