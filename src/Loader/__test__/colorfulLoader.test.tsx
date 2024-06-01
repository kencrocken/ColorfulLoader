import { render } from '@testing-library/react';
import ColorfulLoader from '../colorfulLoader';
import React from 'react';

describe('ColorfulLoader', () => {
  it('renders the correct number of boxes', () => {
    const { getAllByTestId } = render(<ColorfulLoader />);
    const boxes = getAllByTestId('box');
    expect(boxes.length).toBe(49);
  });
});
