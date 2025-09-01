import { render, screen,fireEvent  } from '@testing-library/react';
import App from './App';

test("renders input box", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/something to type/i);
  expect(inputElement).toBeInTheDocument();
});

test("filters list on typing", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/something to type/i);

  // Type "Du" → Should show Dublin, Dubai
  fireEvent.change(inputElement, { target: { value: "Du" } });
  expect(screen.getByText("Dublin")).toBeInTheDocument();
  expect(screen.getByText("Dubai")).toBeInTheDocument();

  // Type "In" → Should show India
  fireEvent.change(inputElement, { target: { value: "In" } });
  expect(screen.getByText("India")).toBeInTheDocument();
});
