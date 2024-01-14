import { useState } from "react";
import DisplayScreen from "./components/DisplayScreen";
import Keypad from "./components/Keypad";
import HistoryScreen from "./components/HistoryScreen";

function App() {
  const [currentOperand, setCurrentOperand] = useState<string>("0");
  const [previousOperand, setPreviousOperand] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [overwrite, setOverwrite] = useState<boolean>(true);
  const [showHistoryScreen, setShowHistoryScreen] = useState<boolean>(false);
  const [history, setHistory] = useState<string[]>([]);

  function addHistoryEntry(result: string | number) {
    const entry = `${previousOperand} ${operation} ${currentOperand} = ${result}`;
    setHistory((prevHistory) => [...prevHistory, entry]);
  }

  function handleNumber(value: string) {
    if (overwrite) {
      setCurrentOperand(value);
      setOverwrite(false);
    } else {
      if (value === "0" && currentOperand === "0") return;
      if (value === "." && currentOperand.includes(".")) return;
      if (value !== "." && currentOperand === "0") {
        setCurrentOperand(value);
        return;
      }
      setCurrentOperand(
        (prevCurrentOperand) => `${prevCurrentOperand}${value}`
      );
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

    const result = calculate();
    setPreviousOperand(result);
    addHistoryEntry(result);
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
    const result = calculate();
    setCurrentOperand(result);
    addHistoryEntry(result);
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
    <div className="flex flex-col justify-center items-center min-h-svh m-auto">
      <div className="relative flex flex-col justify-center items-center m-auto">
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
        <button
          className="absolute size-11 border-black border rounded-md h-11 top-0 left-0 bg-sky-400"
          onClick={() => setShowHistoryScreen(true)}
        >
          H
        </button>
        {showHistoryScreen && (
          <HistoryScreen
            setShowHistoryScreen={setShowHistoryScreen}
            history={history}
            setHistory={setHistory}
          />
        )}
      </div>
    </div>
  );
}

export default App;
