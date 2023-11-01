"use client";

import PianoRoll from "@/data/pianoroll";
import { ReactNode, createContext, memo, useContext, useState } from "react";

type PianoContextType = {
  pianoRollsData: PianoRoll[];
  addPiano: (pianoRoll: PianoRoll) => void;
  getPianoRollByID: (id: number) => PianoRoll | undefined;
  removePiano: (pianoRollID: PianoRoll["_id"]) => void;
};

export const PianoContext = createContext<PianoContextType | null>(null);

export const PianoContextProvider = memo<{ children: ReactNode }>(
  ({ children }) => {
    const [pianoRollsData, setPianoData] = useState<PianoRoll[]>([]);
    // const pianoRollFacotry = new PianoRollDisplay();
    // setPianoRoolData(await pianoRollFacotry.getPartData());

    const addPiano = (pianoRoll: PianoRoll) => {
      setPianoData((prev) => [...prev, pianoRoll]);
    };

    const removePiano = (pianoRollID: PianoRoll["_id"]) =>
      setPianoData((prev) => prev.filter((p) => p._id !== pianoRollID));

    const getPianoRollByID = (pianoRollID: number) => {
      return pianoRollsData?.find((piano) => piano._id === pianoRollID);
    };
    return (
      <PianoContext.Provider
        value={{
          pianoRollsData,
          getPianoRollByID,
          addPiano,
          removePiano,
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
