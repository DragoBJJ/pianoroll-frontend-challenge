import { Ref, memo } from "react";
import { SelectedArea, SelectedLine, SvgWrapper } from "./style";
import { Svg } from "@/components/atoms/Svg";
import { Sequence } from "@/data/types";
import { UseInteractiveSelection } from "@/hook/useInteractiveSelection";

type DetailCardType = {
  svgRef: Ref<SVGSVGElement> | undefined;
  sequence: Sequence;
};

export const PianoRollDetailCard = memo<DetailCardType>(
  ({ svgRef, sequence }) => {
    const { selectionComponents } = UseInteractiveSelection(sequence);
    return (
      <SvgWrapper>
        <SelectedArea id="selected-area" />
        <SelectedLine id="selected-line" />
        <Svg
          selectionComponents={selectionComponents}
          height="100%"
          width="100%"
          ref={svgRef}
        />
      </SvgWrapper>
    );
  }
);
