import { formatOperand } from "../lib/utils";

interface DisplayScreenProps {
  previousOperand: string;
  operation: string;
  currentOperand: string;
}

export default function DisplayScreen({
  previousOperand,
  operation,
  currentOperand,
}: DisplayScreenProps) {
  return (
    <>
      <div className="overflow-y-hidden h-12 text-2xl text-right pr-3 pt-2 border border-b-0 border-black w-[23rem]">
        {previousOperand ?? formatOperand(previousOperand)} {operation}
      </div>
      <div className="overflow-y-hidden h-12 text-3xl text-right pr-3 mb-1 border border-t-0 border-black w-[23rem]">
        {formatOperand(currentOperand)}
      </div>
    </>
  );
}
