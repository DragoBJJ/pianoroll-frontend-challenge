"use client";

import { PianoRollDisplay } from "@/data/app";
import { PianoSequence } from "@/data/types";
import { ReactNode, createContext, memo, useContext, useState } from "react";

type PianoContextType = {
  pianoSequences: PianoSequence[];
  getPianoSequences: () => Promise<void>;
  getPianoSequenceByID: (id: PianoSequence["id"]) => PianoSequence | undefined;
  getNeighbourSequences: (id: number) => PianoSequence[];
};

export const PianoContext = createContext<PianoContextType | null>(null);

export const PianoContextProvider = memo<{ children: ReactNode }>(
  ({ children }) => {
    const [pianoSequences, setPianoSequences] = useState<PianoSequence[]>([]);

    const getPianoSequences = async () => {
      if (pianoSequences.length) return;
      const pianoRollFacotry = new PianoRollDisplay();
      setPianoSequences(await pianoRollFacotry.getPianoSequences());
    };

    const getPianoSequenceByID = (id: PianoSequence["id"]) => {
      return pianoSequences.find((piano) => piano.id === Number(id));
    };

    const getNeighbourSequences = (id: PianoSequence["id"]) => {
      return pianoSequences.filter((piano) => piano.id !== Number(id));
    };

    return (
      <PianoContext.Provider
        value={{
          pianoSequences,
          getPianoSequences,
          getPianoSequenceByID,
          getNeighbourSequences,
        }}
      >
        {children}
      </PianoContext.Provider>
    );
  }
);

export const UsePianoContext = () => {
  const context = useContext(PianoContext);

  if (!context) throw Error("Your Piano Context doesn't Exist");

  return context;
};
