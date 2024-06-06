import React, { FC } from 'react';
import ColorfulLoader from '../colorfulLoader';
import type { ColorfulLoaderProps } from '../colorfulLoader';

const Example: FC<ColorfulLoaderProps> = args => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <ColorfulLoader {...args} />
    </div>
  );
};

export default Example;
