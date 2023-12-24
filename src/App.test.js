import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from "react";

test('allows the user to calculate costs', () => {
  render(<App />);

  // Find input fields and button
  const powerInput = screen.getByLabelText(/device power/i);
  const hoursInput = screen.getByLabelText(/daily usage/i);
  const rateInput = screen.getByLabelText(/electricity rate/i);
  const calculateButton = screen.getByRole('button', { name: /calculate/i });

  // Fill out the form
  fireEvent.change(powerInput, { target: { value: '100' } });
  fireEvent.change(hoursInput, { target: { value: '8' } });
  fireEvent.change(rateInput, { target: { value: '0.6' } });

  // Click the calculate button
  fireEvent.click(calculateButton);

  // Check for the results
  const dailyResult = screen.getByText(/yearly/i);
  expect(dailyResult).toBeInTheDocument();
  // You could add more specific assertions here to check the calculated values
});