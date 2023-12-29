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
        <CalculatorButton
          value={"<="}
          variant={"operator"}
          onClick={handleOperator}
        >
          {"<="}
        </CalculatorButton>
        <CalculatorButton
          value={"%"}
          variant={"operator"}
          onClick={handleOperator}
        >
          {"%"}
        </CalculatorButton>
        <CalculatorButton
          value={"AC"}
          variant={"operator"}
          onClick={handleOperator}
        >
          {"AC"}
        </CalculatorButton>
        <CalculatorButton
          value={"/"}
          variant={"operator"}
          onClick={handleOperator}
        >
          {"/"}
        </CalculatorButton>

        <CalculatorButton value={7} onClick={handleNumber}>
          {7}
        </CalculatorButton>
        <CalculatorButton value={8} onClick={handleNumber}>
          {8}
        </CalculatorButton>
        <CalculatorButton value={9} onClick={handleNumber}>
          {9}
        </CalculatorButton>

        <CalculatorButton
          variant={"operator"}
          value={"x"}
          onClick={handleOperator}
        >
          {"X"}
        </CalculatorButton>

        <CalculatorButton value={4} onClick={handleNumber}>
          {4}
        </CalculatorButton>
        <CalculatorButton value={5} onClick={handleNumber}>
          {5}
        </CalculatorButton>
        <CalculatorButton value={6} onClick={handleNumber}>
          {6}
        </CalculatorButton>
        <CalculatorButton
          variant={"operator"}
          value={"-"}
          onClick={handleOperator}
        >
          {"-"}
        </CalculatorButton>

        <CalculatorButton value={1} onClick={handleNumber}>
          {1}
        </CalculatorButton>
        <CalculatorButton value={2} onClick={handleNumber}>
          {2}
        </CalculatorButton>
        <CalculatorButton value={3} onClick={handleNumber}>
          {3}
        </CalculatorButton>

        <CalculatorButton
          variant={"operator"}
          value={"+"}
          onClick={handleOperator}
        >
          {"+"}
        </CalculatorButton>
        <CalculatorButton span={"span-2"} value={0} onClick={handleNumber}>
          {0}
        </CalculatorButton>
        <CalculatorButton
          variant={"operator"}
          value={"."}
          onClick={handleOperator}
        >
          {"."}
        </CalculatorButton>
        <CalculatorButton
          variant={"operator"}
          value={"="}
          onClick={handleOperator}
        >
          {"="}
        </CalculatorButton>
      </div>
    </div>
  );
}

export default App;
