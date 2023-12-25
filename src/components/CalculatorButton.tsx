interface CalculatorButtonProps {
  value: number | string;
  span?: boolean;
  operator?: boolean;
  onClick?: () => void;
}
function CalculatorButton({
  value,
  onClick,
  span = false,
  operator = false,
}: CalculatorButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`border-black border h-14 px-8 text-white shadow ${
        !operator
          ? `bg-sky-600 hover:bg-sky-600/90`
          : "bg-sky-950 hover:bg-sky-950/90"
      }  ${
        span ? `col-span-2` : ``
      } inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
    >
      {value}
    </button>
  );
}

export default CalculatorButton;
