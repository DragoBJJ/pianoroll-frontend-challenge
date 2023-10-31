"use client";

import PianoRoll from "@/data/pianoroll";
import { ReactNode, createContext, memo, useContext, useState } from "react";

type PianoContextType = {
  pianoRollsData: PianoRoll[];
  addPiano: (pianoRoll: PianoRoll) => void;
  getPianoRollByID: (id: number) => PianoRoll[] | undefined;
};

export const PianoContext = createContext<PianoContextType | null>(null);

export const PianoContextProvider = memo<{ children: ReactNode }>(
  ({ children }) => {
    const [pianoRollsData, setPianoData] = useState<PianoRoll[]>([]);

    const addPiano = (pianoRoll: PianoRoll) => {
      setPianoData((prev) => [...prev, pianoRoll]);
    };

    const getPianoRollByID = (pianoRollID: number) => {
      return pianoRollsData?.filter((piano) => piano._id === pianoRollID);
    };
    console.log("pianoRollsData", pianoRollsData);
    return (
      <PianoContext.Provider
        value={{
          pianoRollsData,
          getPianoRollByID,
          addPiano,
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
