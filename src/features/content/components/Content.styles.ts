import styled from "@emotion/styled";

export const Root = styled.div<{ y: number; x: number }>`
  position: absolute;
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
  transform: translate(-50%, -50%);
`;
