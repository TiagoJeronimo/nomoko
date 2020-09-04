import React from 'react';
import { render } from '@testing-library/react';
import App from '..';

test('renders the App', () => {
  const app = render(<App />);
  expect(app).toMatchSnapshot();
});
