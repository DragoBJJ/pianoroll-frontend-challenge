"use client";

import { UsePianoContext } from "@/context/pianoContext";
import { PianoRollCard } from "@/components/molecules/PianoRoll";
import { useEffect } from "react";
import { PianoList } from "@/components/molecules/PianoList";
import { Wrapper } from "./style";
import { UseInteractiveSelection } from "@/hook/useInteractiveSelection";

type PageType = {
  params: { id: string };
  searchParams: any;
};

export default function Page({ params: { id } }: PageType) {
  const { getPianoSequenceByID, getNeighbourSequences, getPianoSequences } =
    UsePianoContext();

  const pianoSequence = getPianoSequenceByID(Number(id));
  const neighbourSequences = getNeighbourSequences(Number(id));

  useEffect(() => {
    if (!pianoSequence || !neighbourSequences) getPianoSequences();
  }, [getPianoSequences, id, pianoSequence, neighbourSequences]);

  return pianoSequence && neighbourSequences ? (
    <Wrapper>
      <PianoRollCard
        rollID={pianoSequence.id}
        sequence={pianoSequence.sequence}
        isDetailPage
      />
      <PianoList pianoSequences={neighbourSequences} />
    </Wrapper>
  ) : (
    <></>
  );
}
