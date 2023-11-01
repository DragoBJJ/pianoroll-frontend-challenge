import { devices } from "@/providers/mediaQuery";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;

  @media only screen and (${devices.lg}) {
    flex-direction: row;
  }
`;
