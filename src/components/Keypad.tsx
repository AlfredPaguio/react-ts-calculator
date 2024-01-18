import CalculatorButton, { CalculatorButtonProps } from "./CalculatorButton";

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
  const buttonData: CalculatorButtonProps[] = [
    {
      value: "←",
      variant: "operator",
      handleOnClick: handleClear,
    },
    { value: "%", variant: "operator", handleOnClick: handleOperator },
    { value: "AC", variant: "operator", handleOnClick: handleAllClear },
    {
      value: "÷",
      variant: "operator",
      handleOnClick: handleOperator,
    },
    { value: 7, handleOnClick: () => handleNumber("7") },
    { value: 8, handleOnClick: () => handleNumber("8") },
    { value: 9, handleOnClick: () => handleNumber("9") },
    {
      value: "*",
      variant: "operator",
      handleOnClick: handleOperator,
    },
    { value: 4, handleOnClick: () => handleNumber("4") },
    { value: 5, handleOnClick: () => handleNumber("5") },
    { value: 6, handleOnClick: () => handleNumber("6") },
    { value: "-", variant: "operator", handleOnClick: handleOperator },
    { value: 1, handleOnClick: () => handleNumber("1") },
    { value: 2, handleOnClick: () => handleNumber("2") },
    { value: 3, handleOnClick: () => handleNumber("3") },
    { value: "+", variant: "operator", handleOnClick: handleOperator },
    { value: 0, handleOnClick: () => handleNumber("0"), span: "span-2" },
    { value: ".", variant: "operator", handleOnClick: () => handleNumber(".") },
    { value: "=", variant: "operator", handleOnClick: handleEquals },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttonData.map((button, index) => (
        <CalculatorButton
          key={index}
          {...button}
          aria-label={String(button.value)}
        >
          {button.value}
        </CalculatorButton>
      ))}
    </div>
  );
}
