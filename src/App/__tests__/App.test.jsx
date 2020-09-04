import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '..';

test('renders the App', () => {
  render(<App />);
  expect(screen).toMatchSnapshot();
});
