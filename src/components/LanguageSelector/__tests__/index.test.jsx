import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LanguageSelector from '..';

describe('<LanguageSelector />', () => {
  beforeEach(() => {
    render(
      <LanguageSelector
        handleLanguageChange={jest.fn()}
      />,
    );
  });

  it('renders the LanguageSelector', () => {
    const listbox = document.querySelector('div[aria-haspopup=listbox]');
    if (!listbox) throw new Error('listbox not found');

    expect(listbox).toBeInTheDocument();
  });

  it('renders the LanguageSelector label', () => {
    expect(screen.getByTestId('languageSelector-label').innerHTML).toBe('language');
  });

  it('renders the DE option once the user clicks the dropdown', () => {
    const dropdown = document.querySelector('div[aria-haspopup=listbox]');

    expect(screen.queryByText('DE')).not.toBeInTheDocument();

    userEvent.click(dropdown);

    expect(screen.getByText('DE')).toBeInTheDocument();
  });
});
