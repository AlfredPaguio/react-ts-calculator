import { useState } from "react";
import CalculatorButton from "./components/CalculatorButton";
import { formatOperand } from "./lib/utils";

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
      console.log("currentOperand", currentOperand);
      setOperation(value);
      return;
    }
    if (!previousOperand) {
      console.log("previousOperand", previousOperand, "operator", value);
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

    console.log("previous:", prev, "current: ", current);
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
      case "÷":
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
      <div className="h-12 text-2xl text-right pr-3 pt-2 border border-b-0 border-black w-[23rem]">
        {previousOperand ?? formatOperand(previousOperand)} {operation}
      </div>
      <div className="h-12 text-3xl text-right pr-3 mb-1 border border-t-0 border-black w-[23rem]">
        {formatOperand(currentOperand)}
      </div>
      <div className="grid grid-cols-4 gap-1">
        <CalculatorButton
          value={"<="}
          variant={"operator"}
          handleOnClick={handleClear}
        >
          {"<="}
        </CalculatorButton>
        <CalculatorButton
          value={"%"}
          variant={"operator"}
          handleOnClick={handleOperator}
        >
          {"%"}
        </CalculatorButton>
        <CalculatorButton
          value={"AC"}
          variant={"operator"}
          handleOnClick={handleAllClear}
        >
          {"AC"}
        </CalculatorButton>
        <CalculatorButton
          value={"÷"}
          variant={"operator"}
          handleOnClick={handleOperator}
        >
          {"÷"}
        </CalculatorButton>

        <CalculatorButton value={7} handleOnClick={handleNumber}>
          {7}
        </CalculatorButton>
        <CalculatorButton value={8} handleOnClick={handleNumber}>
          {8}
        </CalculatorButton>
        <CalculatorButton value={9} handleOnClick={handleNumber}>
          {9}
        </CalculatorButton>

        <CalculatorButton
          variant={"operator"}
          value={"*"}
          handleOnClick={handleOperator}
        >
          {"X"}
        </CalculatorButton>

        <CalculatorButton value={4} handleOnClick={handleNumber}>
          {4}
        </CalculatorButton>
        <CalculatorButton value={5} handleOnClick={handleNumber}>
          {5}
        </CalculatorButton>
        <CalculatorButton value={6} handleOnClick={handleNumber}>
          {6}
        </CalculatorButton>
        <CalculatorButton
          variant={"operator"}
          value={"-"}
          handleOnClick={handleOperator}
        >
          {"-"}
        </CalculatorButton>

        <CalculatorButton value={1} handleOnClick={handleNumber}>
          {1}
        </CalculatorButton>
        <CalculatorButton value={2} handleOnClick={handleNumber}>
          {2}
        </CalculatorButton>
        <CalculatorButton value={3} handleOnClick={handleNumber}>
          {3}
        </CalculatorButton>

        <CalculatorButton
          variant={"operator"}
          value={"+"}
          handleOnClick={handleOperator}
        >
          {"+"}
        </CalculatorButton>
        <CalculatorButton
          span={"span-2"}
          value={0}
          handleOnClick={handleNumber}
        >
          {0}
        </CalculatorButton>
        <CalculatorButton
          variant={"operator"}
          value={"."}
          handleOnClick={handleNumber}
        >
          {"."}
        </CalculatorButton>
        <CalculatorButton
          variant={"operator"}
          value={"="}
          handleOnClick={handleEquals}
        >
          {"="}
        </CalculatorButton>
      </div>
    </div>
  );
}

export default App;
