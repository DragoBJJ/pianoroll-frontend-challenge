"use client";

import { UsePianoContext } from "@/app/context/pianoContext";
import { memo } from "react";

type PageProps = {
  params: { pianoID: string };
};

const Page = memo<PageProps>(({ params }) => {
  const { pianoRollsData } = UsePianoContext();
  console.log("pianoRollsData", pianoRollsData);
  return <div>{params.pianoID}</div>;
});

export default Page;
