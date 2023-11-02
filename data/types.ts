export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Note = {
  start: number;
  end: number;
  pitch: number;
  velocity: number;
};
export type Sequence = Note[];

export type SvgEventType = React.MouseEvent<SVGSVGElement>;
