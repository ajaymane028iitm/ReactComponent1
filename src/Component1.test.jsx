import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Component1 from './Component1.jsx';

test('renders learn react link', () => {
  render(<Component1 />);
  const linkElement = screen.getByText(/component/i);
  expect(linkElement).toBeDefined();
});
