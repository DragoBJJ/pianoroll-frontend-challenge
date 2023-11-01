import { forwardRef } from "react";

export const Svg = forwardRef((props, ref: any) => {
  return (
    <svg
      className="piano-roll-svg"
      width="80%"
      height="150px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      ref={ref}
    ></svg>
  );
});
