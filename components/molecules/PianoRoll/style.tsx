import { devices } from "@/providers/mediaQuery";
import styled from "styled-components";

export const Wrapper = styled.div<{
  $isDetailPage?: boolean;
  $hasBorder?: boolean;
}>`
  position: relative;
  border: ${({ theme, $hasBorder }) =>
    $hasBorder && `1px solid  ${theme.palette.primary.main}`};
  width: auto;
  height: ${({ $isDetailPage }) => ($isDetailPage ? "600px" : "200px")};
  margin: 0.5rem 0;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: all ease-in-out 0.5s;

  &:hover {
    scale: ${({ $isDetailPage }) => !$isDetailPage && 1.02};
  }

  @media only screen and (${devices.lg}) {
    width: ${({ $isDetailPage }) => ($isDetailPage ? "70vw" : "98.5%")};
    height: ${({ $isDetailPage }) => ($isDetailPage ? "600px" : "200px")};
  }
`;

export const Text = styled.div`
  margin: 10px;
  text-align: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.palette.common.black};
`;

export const SvgWrapper = styled.div`
  position: relative;
  z-index: 0;
  height: 80%;
  width: 80%;
  margin: auto;
`;

export const SelectedArea = styled.div`
  position: absolute;
  left: 0;
  background: ${({ theme }) => theme.palette.common.red};
  box-shadow: 0 4px 30px ${({ theme }) => theme.palette.common.red};
  backdrop-filter: blur(3.9px);
  -webkit-backdrop-filter: blur(3.9px);
  width: 0;
  height: 100%;
`;

export const SelectedLine = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.palette.common.red};
  height: 100%;
  width: 4px;
  border-radius: 1rem;
`;
