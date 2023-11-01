import styled from "styled-components";

export const Wrapper = styled.div`
  justify-content: center;
`;

export const Button = styled.button`
  /* ... existing button styles ... */
  border-bottom: 3px solid #381815; /* A darker shade for 3D effect */
  position: relative; /* Required for the top movement on hover */
  transition: all 1.1s ease; /* Transition for all properties */

  &:hover {
    transform: scale(1.05);
  }
`;
