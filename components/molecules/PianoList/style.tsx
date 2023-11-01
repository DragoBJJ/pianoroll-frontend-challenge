import { devices } from "@/providers/mediaQuery";
import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: auto;
  flex-direction: column;
  max-width: 80vw;
  width: 100%;
  height: 600px;
  margin-left: 1rem;
  margin: auto;
  border-left: 1px solid #1d1d1d;

  @media only screen and (${devices.lg}) {
    margin: 0 0 0 1rem;
    max-width: 350px;
  }
`;
