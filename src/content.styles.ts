import styled from "@emotion/styled";

export const Root = styled.div<{ y: number; x: number }>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
`;
