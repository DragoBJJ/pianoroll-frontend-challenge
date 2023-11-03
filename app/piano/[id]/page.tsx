"use client";

import { UsePianoContext } from "@/context/pianoContext";
import { PianoRollCard } from "@/components/molecules/PianoRoll";
import { useEffect } from "react";
import { PianoList } from "@/components/molecules/PianoList";
import { Wrapper } from "./style";
import { UseSelectingSequence } from "@/hook/useSelectingSequence";

type PageType = {
  params: { id: string };
  searchParams: any;
};

export default function Page({ params: { id } }: PageType) {
  const { getPianoSequenceByID, getNeighbouringSequences, getPianoSequences } =
    UsePianoContext();

  const pianoSequence = getPianoSequenceByID(Number(id));
  const pianoSequences = getNeighbouringSequences(Number(id));

  const { selectingSequenceComponents } = UseSelectingSequence(
    pianoSequence && pianoSequence.sequence
  );

  useEffect(() => {
    if (!pianoSequence || !pianoSequences) getPianoSequences();
  }, [getPianoSequences, id, pianoSequence, pianoSequences]);

  return pianoSequence && pianoSequences ? (
    <Wrapper>
      <PianoRollCard
        rollID={pianoSequence.id}
        sequence={pianoSequence.sequence}
        selectingSequenceComponents={selectingSequenceComponents}
        isDetailPage
      />
      <PianoList pianoSequences={pianoSequences} />
    </Wrapper>
  ) : (
    <></>
  );
}
