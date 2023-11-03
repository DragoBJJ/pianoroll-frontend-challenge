/* eslint-disable react-hooks/exhaustive-deps */

import PianoRoll from "@/data/pianoroll";
import { SelectingComponentType, Sequence } from "@/data/types";
import { memo, useEffect, useRef } from "react";
import { Text, Wrapper, SvgWrapper, SelectedLine, SelectedArea } from "./style";

import { Svg } from "@/components/atoms/Svg";

type PianoRollCardType = {
  rollID: number;
  sequence: Sequence;
  isDetailPage?: boolean;
  hasBorder?: boolean;
  selectingSequenceComponents?: SelectingComponentType["selectingSequenceComponents"];
};

export const PianoRollCard = memo<PianoRollCardType>(
  ({
    rollID,
    sequence,
    isDetailPage,
    hasBorder,
    selectingSequenceComponents,
  }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
      if (!svgRef.current || !sequence.length) return;
      new PianoRoll(rollID, svgRef.current, sequence);
    }, [rollID, sequence]);

    return (
      <Wrapper $isDetailPage={isDetailPage} $hasBorder={hasBorder}>
        <Text>This is a piano roll number {rollID}</Text>
        <SvgWrapper>
          {isDetailPage ? (
            <>
              <SelectedArea id="selected-area" />
              <SelectedLine id="selected-line" />
              <Svg
                selectingSequenceComponents={selectingSequenceComponents}
                height="100%"
                width="100%"
                ref={svgRef}
              />
            </>
          ) : (
            <Svg height="100%" width="100%" ref={svgRef} />
          )}
        </SvgWrapper>
      </Wrapper>
    );
  }
);
