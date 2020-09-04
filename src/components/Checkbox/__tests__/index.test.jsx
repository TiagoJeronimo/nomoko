import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '..';

const LABEL = 'label';
const FORM_TITLE = 'form title';

describe('<Checkbox />', () => {
  beforeEach(() => {
    render(
      <Checkbox
        formTitle={FORM_TITLE}
        label={LABEL}
        handleCheckboxChange={jest.fn()}
      />,
    );
  });

  it('renders the Checkbox', () => {
    const input = document.querySelector('input[type=checkbox]');
    if (!input) throw new Error('input not found');

    expect(input).toBeInTheDocument();
  });

  it('renders the Checkbox label', () => {
    expect(screen.getByText(LABEL)).toBeInTheDocument();
  });

  it('renders form title text', () => {
    expect(screen.getByText(FORM_TITLE)).toBeInTheDocument();
  });

  it('should call the onClick function', () => {
    const checkbox = document.querySelector('input[type="checkbox"]');

    expect(checkbox).not.toBeChecked();
    userEvent.click(screen.getByText(LABEL));
    expect(checkbox).toBeChecked();
  });
});
