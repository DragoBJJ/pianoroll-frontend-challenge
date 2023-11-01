import styled from "styled-components";

export const Wrapper = styled.div<{ $large?: boolean; $small?: boolean }>`
  border: 1px solid #ccc;
  margin: ${({ $large }) => !$large && "0.5rem"};
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: ${({ $large, $small }) =>
    $large ? "70vw" : $small ? "auto" : "100%"};
  height: ${({ $large }) => ($large ? "600px" : "200px")};
  cursor: pointer;
  transition: all ease-in-out 0.5s;

  &:hover {
    scale: ${({ $large }) => !$large && 1.03};
  }
`;

export const Text = styled.div`
  margin: 10px;
  text-align: center;
  font-size: 1.1rem;
`;
