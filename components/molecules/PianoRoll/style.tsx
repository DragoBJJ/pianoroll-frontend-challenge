import { devices } from "@/providers/mediaQuery";
import styled from "styled-components";

export const Wrapper = styled.div<{ $large?: boolean }>`
  position: relative;
  border: 1px solid #ccc;
  width: auto;
  height: ${({ $large }) => ($large ? "600px" : "200px")};
  margin: 0.5rem 0;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: all ease-in-out 0.5s;

  &:hover {
    scale: ${({ $large }) => !$large && 1.02};
  }

  @media only screen and (${devices.lg}) {
    width: ${({ $large }) => ($large ? "70vw" : "98.5%")};
    height: ${({ $large }) => ($large ? "600px" : "200px")};
  }
`;

export const Text = styled.div`
  margin: 10px;
  text-align: center;
  font-size: 1.1rem;
`;
