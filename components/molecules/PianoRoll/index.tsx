import { Sequence } from "@/data/types";
import { memo, useRef } from "react";
import { Text, Wrapper, SvgWrapper } from "./style";
import { Svg } from "@/components/atoms/Svg";
import { PianoRollDetailCard } from "./PianoRollDetailCard";
import { UseInitializeSequence } from "@/hook/useInitializeSequence";

export type PianoRollCardType = {
  rollID: number;
  sequence: Sequence;
  title?: string;
  isDetailPage?: boolean;
  isBorder?: boolean;
};

export const PianoRollCard = memo<PianoRollCardType>(
  ({
    rollID,
    title = `This is a piano roll number ${rollID}`,
    sequence,
    isDetailPage,
    isBorder,
  }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    UseInitializeSequence({ svgRef, sequence, rollID });

    return (
      <Wrapper $isDetailPage={isDetailPage} $hasBorder={isBorder}>
        <Text>{title}</Text>
        {isDetailPage ? (
          <PianoRollDetailCard
            rollID={rollID}
            svgRef={svgRef}
            sequence={sequence}
          />
        ) : (
          <Svg height="80%" width="80%" ref={svgRef} />
        )}
      </Wrapper>
    );
  }
);
