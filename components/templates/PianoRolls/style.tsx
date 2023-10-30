import { devices } from "@/providers/mediaQuery";
import styled from "styled-components";

export const PianoRollsWrapper = styled.main`
  position: relative;
  display: grid;
  border: 1px solid red;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  grid-template-rows: 0.1fr 0.9fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "nav nav nav"
    "main main main";

  @media only screen and (${devices.md}) {
    grid-template-rows: 0.1fr 0.9fr;
    grid-template-columns: 0.8fr 0.2fr;
    grid-template-areas:
      "nav nav nav"
      "main main main";
  }
`;

export const Main = styled.div`
  display: flex;
  grid-area: main;
  width: 100%;
  height: 100%;
`;
