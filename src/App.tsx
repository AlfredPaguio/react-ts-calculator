import { useState } from "react";
import DisplayScreen from "./components/DisplayScreen";
import Keypad from "./components/Keypad";

function App() {
  const [currentOperand, setCurrentOperand] = useState<string>("0");
  const [previousOperand, setPreviousOperand] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [overwrite, setOverwrite] = useState<boolean>(true);

  function handleNumber(value: string) {
    if (overwrite) {
      setCurrentOperand(value);
      setOverwrite(false);
    } else {
      if (value == "0" && currentOperand == "0") return;
      if (value == "." && currentOperand.includes(".")) return;
      setCurrentOperand(`${currentOperand}${value}`);
    }
  }

  function handleOperator(value: string) {
    if (!currentOperand && !previousOperand) return;
    if (!currentOperand) {
      setOperation(value);
      return;
    }
    if (!previousOperand) {
      setOperation(value);
      setPreviousOperand(currentOperand);
      setCurrentOperand("");
      return;
    }

    setPreviousOperand(calculate);
    setOperation(value);
    setCurrentOperand("");
  }

  function calculate() {
    if (!previousOperand || !operation) return currentOperand;
    const prev = +previousOperand;
    const current = +currentOperand;

    let computation: number;
    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      case "%":
        computation = prev % current;
        break;
      default:
        //operation failed
        computation = 0;
    }
    return computation.toString();
  }

  function handleEquals() {
    if (!operation || !currentOperand || !previousOperand) return;
    setCurrentOperand(calculate());
    setOverwrite(true);
    setOperation("");
    setPreviousOperand("");
  }

  function handleClear() {
    // Avoid clearing when the CurrentOperand is on state of overwrite (from equals) to prevent accidental digit removal
    if (overwrite) return;
    setCurrentOperand(currentOperand.slice(0, -1));
  }

  function handleAllClear() {
    setCurrentOperand("0");
    setPreviousOperand("");
    setOperation("");
    setOverwrite(true);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full min-h-svh">
      <DisplayScreen
        currentOperand={currentOperand}
        operation={operation}
        previousOperand={previousOperand}
      />
      <Keypad
        handleAllClear={handleAllClear}
        handleClear={handleClear}
        handleEquals={handleEquals}
        handleNumber={handleNumber}
        handleOperator={handleOperator}
      />
    </div>
  );
}

export default App;
