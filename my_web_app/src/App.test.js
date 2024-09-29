import { render, screen } from '@testing-library/react';

import AppDesk from './AppDesk';

test('renders learn react link', () => {
  render(<AppDesk />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
