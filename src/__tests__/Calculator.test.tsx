import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("handles number input correctly", () => {
    const { getByRole } = render(<App />);
    const numberButton = getByRole("button", {
      name: /1/i,
    });

    const currentOperand = document.querySelector("#currentOperand");
    fireEvent.click(numberButton);
    fireEvent.click(numberButton);
    fireEvent.click(numberButton);
    expect(currentOperand).toHaveTextContent("111");
  });

  it("handles operator input correctly", () => {
    const { getByRole } = render(<App />);
    const previousOperand = document.querySelector("#previousOperand");
    const currentOperand = document.querySelector("#currentOperand");

    const additionOperatorButton = getByRole("button", {
      name: /\+/i,
    });
    const subtractionOperatorButton = getByRole("button", {
      name: /-/i,
    });
    const multiplicationOperatorButton = getByRole("button", {
      name: /\*/i,
    });
    const divisionOperatorButton = getByRole("button", {
      name: /÷/i,
    });

    fireEvent.click(additionOperatorButton);
    expect(currentOperand).toHaveTextContent("0");
    expect(previousOperand).toHaveTextContent("0 +");
    fireEvent.click(subtractionOperatorButton);
    expect(previousOperand).toHaveTextContent("0 -");
    fireEvent.click(multiplicationOperatorButton);
    expect(previousOperand).toHaveTextContent("0 *");
    fireEvent.click(divisionOperatorButton);
    expect(previousOperand).toHaveTextContent("0 ÷");
  });

  it("handles clear correctly", () => {
    const { getByRole } = render(<App />);
    const numberButton = getByRole("button", {
      name: /5/i,
    });

    const clearButton = getByRole("button", {
      name: /←/i,
    });
    const currentOperand = document.querySelector("#currentOperand");

    fireEvent.click(numberButton);
    fireEvent.click(clearButton);
    expect(currentOperand).toHaveTextContent("0");

    // expect(getByTestId('currentOperand')).toBeInTheDocument();
  });

  it("handles all clear correctly", () => {
    const { getByRole } = render(<App />);
    const numberButton = getByRole("button", {
      name: /4/i,
    });

    const allClearButton = getByRole("button", {
      name: /ac/i,
    });

    const currentOperand = document.querySelector("#currentOperand");

    fireEvent.click(numberButton);
    fireEvent.click(allClearButton);
    expect(currentOperand).toHaveTextContent("0");

    // expect(getByText("0")).toBeInTheDocument();
  });

  it("handles decimal correctly", () => {
    const { getByRole } = render(<App />);
    const decimalButton = getByRole("button", {
      name: /\./i,
    });

    const numberButton = getByRole("button", {
      name: /7/i,
    });

    const currentOperand = document.querySelector("#currentOperand");

    fireEvent.click(numberButton);
    fireEvent.click(decimalButton);
    expect(currentOperand).toHaveTextContent("7.");
    fireEvent.click(decimalButton);
    fireEvent.click(decimalButton);
    expect(currentOperand).toHaveTextContent("7.");
  });
});

describe("Computations", () => {
  it("calculates result correctly on equals", () => {
    const { getByRole } = render(<App />);
    const numberButtons = ["1", "2", "+", "3", "="];

    numberButtons.forEach((buttonText) => {
      const button = getByRole("button", {
        name: buttonText,
      });

      fireEvent.click(button);
    });
    const currentOperand = document.querySelector("#currentOperand");

    // expect(getByText('15')).toBeInTheDocument();
    expect(currentOperand).toHaveTextContent("15");
  });

  it("displays correct result after multiple operations", () => {
    const { getByRole } = render(<App />);
    const numberButtons = [
      "9",
      "6",
      "-",
      "9",
      "*",
      "4",
      "5",
      "÷",
      "2",
      "%",
      "6",
      "=",
    ];

    numberButtons.forEach((buttonText) => {
      const button = getByRole("button", {
        name: buttonText,
      });

      fireEvent.click(button);
    });
    const previousOperand = document.querySelector("#previousOperand");
    const currentOperand = document.querySelector("#currentOperand");
    expect(previousOperand).toHaveTextContent("");
    expect(currentOperand).toHaveTextContent("1.5");
  });

  it("displays correct result after multiple operations with decimal points", () => {
    const { getByRole } = render(<App />);
    const numberButtons = [
      "7",
      ".",
      "8",
      "9",
      "*",
      "4",
      ".",
      "5",
      "+",
      "2",
      "÷",
      "1",
      "*",
      "6",
      ".",
      "3",
      "=",
    ];

    numberButtons.forEach((buttonText) => {
      const button = getByRole("button", {
        name: buttonText,
      });
      fireEvent.click(button);
    });
    const currentOperand = document.querySelector("#currentOperand");
    const previousOperand = document.querySelector("#previousOperand");
    expect(currentOperand).toHaveTextContent("236.28149999999997");
    expect(previousOperand).toHaveTextContent("");
  });
});
