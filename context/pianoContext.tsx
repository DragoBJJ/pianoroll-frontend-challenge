"use client";

import { PianoRollDisplay } from "@/data/app";
import { PianoSequence } from "@/data/types";
import { ReactNode, createContext, memo, useContext, useState } from "react";

type PianoContextType = {
  PianoSequence: PianoSequence[];
  getPianoSequences: () => Promise<void>;
  getPianoSequenceByID: (id: PianoSequence["id"]) => PianoSequence | undefined;
  getNeighbourSequences: (id: number) => PianoSequence[];
};

export const PianoContext = createContext<PianoContextType | null>(null);

export const PianoContextProvider = memo<{ children: ReactNode }>(
  ({ children }) => {
    const [PianoSequence, setPianoData] = useState<PianoSequence[]>([]);

    const getPianoSequences = async () => {
      const pianoRollFacotry = new PianoRollDisplay();
      setPianoData(await pianoRollFacotry.getPianoSequences());
    };

    const getPianoSequenceByID = (id: PianoSequence["id"]) => {
      return PianoSequence.find((piano) => piano.id === Number(id));
    };

    const getNeighbourSequences = (id: PianoSequence["id"]) => {
      return PianoSequence.filter((piano) => piano.id !== Number(id));
    };

    return (
      <PianoContext.Provider
        value={{
          PianoSequence,
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
