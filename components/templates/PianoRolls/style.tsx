import { devices } from "@/providers/mediaQuery";
import styled from "styled-components";

export const PianoRollsWrapper = styled.div`
  overflow: auto;
  scroll-behavior: auto;
  display: grid;
  height: 600px;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media only screen and (${devices.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media only screen and (${devices.lg}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
