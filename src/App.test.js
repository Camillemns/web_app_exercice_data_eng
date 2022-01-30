import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Web App Exercice with docker and jenkins/i);
  expect(linkElement).toBeInTheDocument();
});
