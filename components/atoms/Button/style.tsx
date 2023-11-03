import styled from "styled-components";

export const Wrapper = styled.div`
  justify-content: center;
`;

export const Button = styled.button`
  border-bottom: 3px solid ${({ theme }) => theme.palette.primary.main};
  position: relative;
  transition: all 1.1s ease;
  padding: 15px 25px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.common.white};
  transition: ease-in-out 0.3s all;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  &:hover {
    transform: scale(1.05);
  }
`;
