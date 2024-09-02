import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Math Web title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Math Web/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders equation E = mc²', () => {
  render(<App />);
  const equationElement = screen.getByText(/E = mc²/i);
  expect(equationElement).toBeInTheDocument();
});
