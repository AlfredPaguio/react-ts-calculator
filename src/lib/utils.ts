import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//set the "string" into whole number only and display it nicely
const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export function formatOperand(operand: string) {
  if (operand == null) return;
  //split the left and right side of decimal
  const [integer, decimal] = operand.split(".");
  if (decimal == null) {
    //format the "number" immediately if there's no decimal
    return INTEGER_FORMATTER.format(+integer);
  }
  //format the number on the left side and append the decimal
  return `${INTEGER_FORMATTER.format(+integer)}.${decimal}`;
}
