"use client";

import { PianoRollCard } from "@/components/molecules/PianoRoll";
import { PianoList } from "@/components/molecules/PianoList";
import { Wrapper } from "./style";
import { UseGetDetailSequences } from "@/hook/useGetDetailSequences";

type PageType = {
  params: { id: string };
  searchParams: any;
};

export default function Page({ params: { id } }: PageType) {
  const { mainSequence, neighbourSequences } = UseGetDetailSequences(
    Number(id)
  );

  return mainSequence && neighbourSequences ? (
    <Wrapper>
      <PianoRollCard
        rollID={mainSequence.id}
        sequence={mainSequence.sequence}
        isDetailPage
      />
      <PianoList pianoSequences={neighbourSequences} />
    </Wrapper>
  ) : (
    <></>
  );
}
