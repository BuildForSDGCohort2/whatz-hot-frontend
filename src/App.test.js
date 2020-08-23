import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders "Welcome to Whatz Hot" text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Welcome to Whatz Hot/i);
  expect(textElement).toBeInTheDocument();
});
