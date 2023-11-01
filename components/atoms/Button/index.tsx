import { MouseEventHandler, memo } from "react";
import { Wrapper, Button as ButtoWrapper } from "./style";

type ButtonType = {
  handler: MouseEventHandler<HTMLDivElement>;
  text: string;
};

export const Button = memo<ButtonType>(({ handler, text }) => {
  return (
    <Wrapper id="buttonContainer" onClick={handler}>
      <ButtoWrapper id="loadCSV">{text}</ButtoWrapper>
    </Wrapper>
  );
});
