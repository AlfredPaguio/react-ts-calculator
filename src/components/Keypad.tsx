import CalculatorButton from "./CalculatorButton";

interface KeypadProps {
  handleClear: () => void;
  handleAllClear: () => void;
  handleEquals: () => void;
  handleNumber: (value: string) => void;
  handleOperator: (value: string) => void;
}

export default function Keypad({
  handleClear,
  handleAllClear,
  handleEquals,
  handleNumber,
  handleOperator,
}: KeypadProps) {
  return (
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
      <CalculatorButton span={"span-2"} value={0} handleOnClick={handleNumber}>
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
  );
}
