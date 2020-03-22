import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('finds Anne Hathaway :)', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Employee/i);
  expect(linkElement).toBeInTheDocument();
});
