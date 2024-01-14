import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders App component', () => {
    render(<App />);
    const displayScreen = screen.getByTestId('display-screen');
    const keypad = screen.getByTestId('keypad');
    const historyButton = screen.getByTestId('history-button');
    const historyScreen = screen.getByTestId('history-screen');
  
    expect(displayScreen).toBeInTheDocument();
    expect(keypad).toBeInTheDocument();
    expect(historyButton).toBeInTheDocument();
    expect(historyScreen).not.toBeVisible();
  });

test('handles number input correctly', () => {
  render(<App />);
  const numberButton = screen.getByText('1');

  fireEvent.click(numberButton);

  expect(screen.getByTestId('currentOperand')).toHaveTextContent('1');
});

test('handles operator input correctly', () => {
  render(<App />);
  const numberButton = screen.getByText('1');
  const operatorButton = screen.getByText('+');

  fireEvent.click(numberButton);
  fireEvent.click(operatorButton);

  expect(screen.getByTestId('previousOperand')).toHaveTextContent('1');
  expect(screen.getByTestId('operation')).toHaveTextContent('+');
  expect(screen.getByTestId('currentOperand')).toHaveTextContent('');
});

test('calculates result correctly', () => {
  render(<App />);
  const numberButton = screen.getByText('1');
  const operatorButton = screen.getByText('+');
  const equalsButton = screen.getByText('=');

  fireEvent.click(numberButton);
  fireEvent.click(operatorButton);
  fireEvent.click(numberButton);
  fireEvent.click(equalsButton);

  expect(screen.getByTestId('currentOperand')).toHaveTextContent('2');
});
