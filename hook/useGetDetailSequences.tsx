import { UsePianoContext } from "@/context/pianoContext";
import { useEffect, useMemo } from "react";

export const UseGetDetailSequences = (id: number) => {
  const { getPianoSequenceByID, getNeighbourSequences, getPianoSequences } =
    UsePianoContext();

  const mainSequence = useMemo(
    () => getPianoSequenceByID(id),
    [getPianoSequenceByID, id]
  );
  const neighbourSequences = useMemo(
    () => getNeighbourSequences(id),
    [getNeighbourSequences, id]
  );

  useEffect(() => {
    if (!mainSequence) getPianoSequences();
  }, [getPianoSequences, id, mainSequence]);

  return {
    mainSequence,
    neighbourSequences,
  };
};
