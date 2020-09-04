import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from '..';

const LABEL = 'label';

describe('<Select />', () => {
  beforeEach(() => {
    render(
      <Select
        label={LABEL}
        handleSelectChange={jest.fn()}
        options={['option1', 'option2', 'option3']}
      />,
    );
  });

  it('renders the Select', () => {
    const listbox = document.querySelector('div[aria-haspopup=listbox]');
    if (!listbox) throw new Error('listbox not found');

    expect(listbox).toBeInTheDocument();
  });

  it('renders the Select label', () => {
    expect(screen.getByText(LABEL)).toBeInTheDocument();
  });

  it('renders all the options once the user clicks the dropdown', () => {
    const dropdown = document.querySelector('div[aria-haspopup=listbox]');

    expect(screen.queryByText('filters.option1')).not.toBeInTheDocument();
    expect(screen.queryByText('filters.option2')).not.toBeInTheDocument();
    expect(screen.queryByText('filters.option3')).not.toBeInTheDocument();

    userEvent.click(dropdown);

    expect(screen.getByText('filters.option1')).toBeInTheDocument();
    expect(screen.getByText('filters.option2')).toBeInTheDocument();
    expect(screen.getByText('filters.option3')).toBeInTheDocument();
  });
});
