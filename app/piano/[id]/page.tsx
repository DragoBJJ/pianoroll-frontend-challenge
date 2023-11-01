"use client";

import { UsePianoContext } from "@/context/pianoContext";
import { PianoRollCard } from "@/components/molecules/PianoRoll";
import { PianoSequence } from "@/data/app";
import { useEffect, useState } from "react";
import { PianoList } from "@/components/molecules/PianoList";
import { Wrapper } from "./style";

type PageType = {
  params: { id: string };
  searchParams: any;
};

export default function Page({ params: { id } }: PageType) {
  const [pianoSequence, setPianoSequence] = useState<PianoSequence>();

  const { getPianoSequenceByID, PianoSequence } = UsePianoContext();

  useEffect(() => {
    const pianSequence = getPianoSequenceByID(Number(id));
    setPianoSequence(pianSequence);
  }, [getPianoSequenceByID, id]);

  return pianoSequence ? (
    <Wrapper>
      <PianoRollCard
        rollID={pianoSequence.id}
        sequence={pianoSequence.sequence}
        isLarge
      />
      <PianoList pianoSequence={PianoSequence} />
    </Wrapper>
  ) : (
    <></>
  );
}
