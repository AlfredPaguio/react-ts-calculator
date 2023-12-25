import CalculatorButton from "./components/CalculatorButton";

function App() {
  function handleNumber() {
    console.log("handleNumber ");
  }

  function handleOperator() {
    console.log("handleOperator ");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full h-full min-h-svh">
      <div className="h-12 text-3xl text-right pr-3 pt-1 border border-black w-[23rem]">
        0
      </div>
      <div className="grid grid-cols-4 gap-1">
        <CalculatorButton operator value={"<="} onClick={handleOperator} />
        <CalculatorButton operator value={"%"} onClick={handleOperator} />
        <CalculatorButton operator value={"AC"} onClick={handleOperator} />
        <CalculatorButton operator value={"/"} onClick={handleOperator} />

        <CalculatorButton value={7} onClick={handleNumber} />
        <CalculatorButton value={8} onClick={handleNumber} />
        <CalculatorButton value={9} onClick={handleNumber} />
        <CalculatorButton operator value={"x"} onClick={handleOperator} />

        <CalculatorButton value={4} onClick={handleNumber} />
        <CalculatorButton value={5} onClick={handleNumber} />
        <CalculatorButton value={6} onClick={handleNumber} />
        <CalculatorButton operator value={"-"} onClick={handleOperator} />

        <CalculatorButton value={1} onClick={handleNumber} />
        <CalculatorButton value={2} onClick={handleNumber} />
        <CalculatorButton value={3} onClick={handleNumber} />
        <CalculatorButton operator value={"+"} onClick={handleOperator} />
        <CalculatorButton span value={0} onClick={handleNumber} />
        <CalculatorButton operator value={"."} onClick={handleOperator} />
        <CalculatorButton operator value={"="} onClick={handleOperator} />
      </div>
    </div>
  );
}

export default App;
