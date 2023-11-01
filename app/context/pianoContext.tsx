"use client";

import { PianoRollDisplay, PianoSequenceData } from "@/data/app";
import { ReactNode, createContext, memo, useContext, useState } from "react";

type PianoContextType = {
  pianoSequenceData: PianoSequenceData[];
  getPianoSequences: () => Promise<void>;
  getPianoSequenceByID: (
    id: PianoSequenceData["id"]
  ) => PianoSequenceData | undefined;
};

export const PianoContext = createContext<PianoContextType | null>(null);

export const PianoContextProvider = memo<{ children: ReactNode }>(
  ({ children }) => {
    const [pianoSequenceData, setPianoData] = useState<PianoSequenceData[]>([]);

    const getPianoSequences = async () => {
      const pianoRollFacotry = new PianoRollDisplay();
      setPianoData(await pianoRollFacotry.getPianoSequences());
    };

    const getPianoSequenceByID = (id: PianoSequenceData["id"]) => {
      return pianoSequenceData.find((piano) => piano.id === id);
    };

    return (
      <PianoContext.Provider
        value={{
          pianoSequenceData,
          getPianoSequences,
          getPianoSequenceByID,
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
