import { Ref, memo } from "react";
import { SelectedArea, SelectedLine, SvgWrapper } from "./style";
import { Svg } from "@/components/atoms/Svg";
import { Sequence } from "@/data/types";
import { UseInteractiveSelection } from "@/hook/useInteractiveSelection";
import { PianoRollCard, PianoRollCardType } from ".";

type DetailCardType = {
  rollID: PianoRollCardType["rollID"];
  svgRef: Ref<SVGSVGElement> | undefined;
  sequence: Sequence;
};

export const PianoRollDetailCard = memo<DetailCardType>(
  ({ rollID, svgRef, sequence }) => {
    const { selectionComponents, newSequence } =
      UseInteractiveSelection(sequence);

    return (
      <>
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
        {newSequence && newSequence?.length > 0 && (
          <PianoRollCard
            rollID={rollID}
            sequence={newSequence}
            title={`An excerpt from your sequence: ${rollID}`}
          />
        )}
      </>
    );
  }
);
