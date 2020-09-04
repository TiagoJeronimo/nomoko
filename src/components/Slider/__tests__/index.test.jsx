import React from 'react';
import {
  render, screen,
} from '@testing-library/react';

import Slider from '..';

const FORM_TITLE = 'form_title';
const MIN_VALUE = 0;
const MAX_VALUE = 100;

describe('<Slider />', () => {
  beforeEach(() => {
    render(
      <Slider
        formTitle={FORM_TITLE}
        minValue={MIN_VALUE}
        maxValue={MAX_VALUE}
        handleSliderChange={jest.fn()}
      />,
    );
  });

  it('renders the Slider', () => {
    const listbox = document.querySelector('span[aria-orientation=horizontal]');
    if (!listbox) throw new Error('listbox not found');

    expect(listbox).toBeInTheDocument();
  });

  it('renders the Slider form_title', () => {
    expect(screen.getByText(FORM_TITLE)).toBeInTheDocument();
  });

  it('renders the Slider min and max value', () => {
    expect(screen.getByText(`${MIN_VALUE} - ${MAX_VALUE}`)).toBeInTheDocument();
  });
});
