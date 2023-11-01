"use client";

import { UsePianoContext } from "@/context/pianoContext";
import { PianoRollCard } from "@/components/molecules/PianoRoll";
import { useEffect, useState } from "react";
import { PianoList } from "@/components/molecules/PianoList";
import { Wrapper } from "./style";
import { PianoSequence } from "@/data/app";

type PageType = {
  params: { id: string };
  searchParams: any;
};

export default function Page({ params: { id } }: PageType) {
  const [pianoSequence, setPianoSequence] = useState<PianoSequence>();
  const [pianoSequences, setPianoSequences] = useState<PianoSequence[]>();

  const { getPianoSequenceByID, getNeighbouringSequences, PianoSequence } =
    UsePianoContext();

  useEffect(() => {
    const pianSequence = getPianoSequenceByID(Number(id));
    const sequences = getNeighbouringSequences(Number(id));
    setPianoSequence(pianSequence);
    setPianoSequences(sequences);
  }, [getNeighbouringSequences, getPianoSequenceByID, id]);

  return pianoSequence && pianoSequences ? (
    <Wrapper>
      <PianoRollCard
        rollID={pianoSequence.id}
        sequence={pianoSequence.sequence}
        isLarge
      />
      <PianoList pianoSequence={pianoSequences} />
    </Wrapper>
  ) : (
    <></>
  );
}
