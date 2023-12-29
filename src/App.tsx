import CalculatorButton from "./components/CalculatorButton";

function App() {
  function handleNumber(value: string) {
    console.log("handleNumber ", value);
  }

  function handleOperator(value: string) {
    console.log("handleOperator ", value);
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
          handleOnClick={handleOperator}
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
          handleOnClick={handleOperator}
        >
          {"AC"}
        </CalculatorButton>
        <CalculatorButton
          value={"/"}
          variant={"operator"}
          handleOnClick={handleOperator}
        >
          {"/"}
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
          value={"x"}
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
          handleOnClick={handleOperator}
        >
          {"."}
        </CalculatorButton>
        <CalculatorButton
          variant={"operator"}
          value={"="}
          handleOnClick={handleOperator}
        >
          {"="}
        </CalculatorButton>
      </div>
    </div>
  );
}

export default App;
