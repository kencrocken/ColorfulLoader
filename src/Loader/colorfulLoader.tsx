import { Box, ColorWrap } from "./colorfulLoader.styledComponents";

const ColorfulLoader = () => (
  <ColorWrap>
    {Array.from({ length: 49 }, (_, index) => (
      <Box key={index} index={index} data-testid="box" />
    ))}
  </ColorWrap>
);

export default ColorfulLoader;
