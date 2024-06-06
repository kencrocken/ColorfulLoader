import { Box, ColorWrap } from './colorfulLoader.styledComponents';

const defaultColors = [
  '#FFE629',
  '#18A6D1',
  '#CCC205',
  '#54D3D3',
  '#9776C1',
  '#ED4545',
  '#FF9100',
  '#65B730',
  '#FF6136',
  '#AD7745',
  '#FF71A0'
];

const defaultProps = {
  colors: defaultColors,
  animationSteps: 11,
  animationDuration: 5
};

export type ColorfulLoaderProps = typeof defaultProps;

const ColorfulLoader = ({
  colors = defaultColors,
  animationSteps = 11,
  animationDuration = 5
}: ColorfulLoaderProps) => (
  <ColorWrap>
    {Array.from({ length: 49 }, (_, index) => (
      <Box
        key={index} // Since none of the elements are added/removed, the index can be used as the key.
        index={index}
        data-testid="box"
        colors={colors}
        animationSteps={animationSteps}
        animationDuration={animationDuration}
      />
    ))}
  </ColorWrap>
);
ColorfulLoader.defaultProps = defaultProps;

export default ColorfulLoader;
