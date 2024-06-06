import styled, { css, keyframes } from 'styled-components';
import { ColorfulLoaderProps } from './colorfulLoader';

/**
 * Generates a keyframes animation for the loader.
 * @param index - The index used to determine the initial background color.
 * @param colors - The array of colors to use for the loader.
 * @returns The generated keyframes animation.
 */
const generateAnimation = (
  index: number,
  colors: string[],
  animationSteps: number
) => keyframes`
  0% {
    background-color: ${colors[index % colors.length]};
  }
  ${Array.from(
    { length: animationSteps },
    (_, i) =>
      `${(100 / animationSteps) * i}% {
      background-color: ${colors[Math.floor(Math.random() * colors.length)]};
    }`
  ).join('')}
  100% {
    background-color: ${colors[Math.floor(Math.random() * colors.length)]};
  }
`;

const Box = styled.div<ColorfulLoaderProps & { index: number }>`
  height: 10px;
  width: 10px;
  float: left;
  animation: ${({ index, colors, animationDuration, animationSteps }) => css`
    ${generateAnimation(
      index,
      colors,
      animationSteps
    )} ${animationDuration}s linear infinite alternate
  `};
`;

const ColorWrap = styled.div`
  max-width: 70px;
  height: 70px;
  div:last-child {
    margin-bottom: 25px;
    &:after {
      content: '';
      display: block;
      height: 0;
      clear: both;
    }
  }
`;

export { Box, ColorWrap };
