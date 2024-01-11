import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//set the "string" into whole number only and display it nicely
const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export function formatOperand(operand: string): string | undefined {
  if (operand == null) return;

  // this is for the final result
  // Check if the result is in scientific notation
  // https://www.codeproject.com/Questions/1075617/using-regular-expression-to-check-an-string-if-its
  // https://regexper.com/#%5Cd*%28%5C.%5Cd*%29%3F%5BeE%5D%5Cd*
  if (/\d*(\.\d*)?[eE]\d*/.test(operand)) {
    // Convert the scientific notation to a string with high precision, I don't need to split it because it's the result
    return Number(operand).toLocaleString("en-US", {
      maximumFractionDigits: 20,
    });
  }

  //split the left and right side of decimal
  const [integer, decimal] = operand.split(".");
  if (decimal == null) {
    //format the "number" immediately if there's no decimal
    console.log(INTEGER_FORMATTER.format(BigInt(integer)));
    return INTEGER_FORMATTER.format(BigInt(integer));
  }
  //format the number on the left side and append the decimal
  return `${INTEGER_FORMATTER.format(BigInt(integer))}.${decimal}`;
}
