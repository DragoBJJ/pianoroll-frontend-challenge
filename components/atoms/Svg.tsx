import React from "react";
import Svg from "./style";

export const SvgIcon = ({
  saveRef,
}: {
  saveRef: (ref: SVGSVGElement | null) => void;
}) => {
  return <Svg className="piano-roll-svg" ref={(ref) => saveRef(ref)}></Svg>;
};
