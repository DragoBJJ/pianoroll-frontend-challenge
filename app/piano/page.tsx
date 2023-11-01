"use client";
import { PianoContextProvider } from "../context/pianoContext";

const Page = () => {
  return (
    <PianoContextProvider>
      <div>Hello</div>;
    </PianoContextProvider>
  );
};

export default Page;
