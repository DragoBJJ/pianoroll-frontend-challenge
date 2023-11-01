"use client";

import { UsePianoContext } from "@/app/context/pianoContext";
import { PianoRollCard } from "@/components/molecules/PianoRoll";
import { PianoSequenceData } from "@/data/app";
import { useEffect, useState } from "react";

type PageType = {
  params: { id: string };
  searchParams: any;
};

export default function Page({ params: { id } }: PageType) {
  const [pianoSequence, setPianoSequence] = useState<PianoSequenceData>();

  const { getPianoSequenceByID, pianoSequenceData } = UsePianoContext();

  useEffect(() => {
    const pianSequence = getPianoSequenceByID(Number(id));
    setPianoSequence(pianSequence);
  }, [getPianoSequenceByID, id]);

  return pianoSequence ? (
    <PianoRollCard
      rollID={pianoSequence.id}
      sequence={pianoSequence.sequence}
    />
  ) : (
    <></>
  );
}
