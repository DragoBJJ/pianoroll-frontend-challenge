import { devices } from "@/providers/mediaQuery";
import styled from "styled-components";

export const Wrapper = styled.div<{ $large?: boolean; $small?: boolean }>`
  position: relative;
  border: 1px solid #ccc;
  width: 100%;
  height: ${({ $large }) => ($large ? "600px" : "200px")};
  margin: ${({ $large }) => !$large && "0.5rem"};
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: all ease-in-out 0.5s;

  &:hover {
    scale: ${({ $large }) => !$large && 1.03};
  }

  @media only screen and (${devices.lg}) {
    width: ${({ $large, $small }) =>
      $large ? "70vw" : $small ? "auto" : "100%"};
    height: ${({ $large }) => ($large ? "600px" : "200px")};
  }
`;

export const Text = styled.div`
  margin: 10px;
  text-align: center;
  font-size: 1.1rem;
`;
