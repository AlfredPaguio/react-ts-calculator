import { render, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

describe('App component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('handles number input correctly', () => {
    const { getByText } = render(<App />);
    const numberButton = getByText('1');
    fireEvent.click(numberButton);
    expect(getByText('1')).toBeInTheDocument();
  });

  test('handles operator input correctly', () => {
    const { getByText } = render(<App />);
    const numberButton = getByText('1');
    const operatorButton = getByText('+');

    fireEvent.click(numberButton);
    fireEvent.click(operatorButton);

    expect(getByText('+')).toBeInTheDocument();
  });

  test('calculates result correctly on equals', () => {
    const { getByText } = render(<App />);
    const numberButtons = ['1', '2', '+', '3', '='];

    numberButtons.forEach((buttonText) => {
      const button = getByText(buttonText);
      fireEvent.click(button);
    });

    expect(getByText('15')).toBeInTheDocument();
  });

  test('handles clear correctly', () => {
    const { getByText } = render(<App />);
    const numberButton = getByText('1');
    const clearButton = getByText('←');

    fireEvent.click(numberButton);
    fireEvent.click(clearButton);

    expect(getByText('0')).toBeInTheDocument();
  });

  test('handles all clear correctly', () => {
    const { getByText } = render(<App />);
    const numberButton = getByText('1');
    // const allClearButton = getByText('AC');
    const allClearButton = getByRole('button', { name: 'AC' });


    fireEvent.click(numberButton);
    fireEvent.click(allClearButton);

    expect(getByText('0')).toBeInTheDocument();
  });
});
