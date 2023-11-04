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
  border-left: 2px solid ${({ theme }) => theme.palette.common.red};

  @media only screen and (${devices.lg}) {
    margin: 0 0 0 1rem;
    max-width: 350px;
  }
`;
