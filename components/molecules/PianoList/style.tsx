import { devices } from "@/providers/mediaQuery";
import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: auto;
  flex-direction: column;
  max-width: 80vw;
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  margin: 6rem auto;

  @media only screen and (${devices.lg}) {
    border-left: 2px solid ${({ theme }) => theme.palette.common.red};
    margin: 0 0 0 1rem;
    max-width: 350px;
    height: 600px;
  }
`;
