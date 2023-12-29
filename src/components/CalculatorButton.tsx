import { VariantProps, cva } from "class-variance-authority";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

const buttonVariants = cva("border-black border h-14 px-8 text-white shadow", {
  variants: {
    variant: {
      default: "bg-sky-600 hover:bg-sky-600/90",
      operator: "bg-sky-950 hover:bg-sky-950/90",
    },
    span: {
      default: "",
      "span-2": "col-span-2",
    },
  },
  defaultVariants: {
    variant: "default",
    span: "default",
  },
});

interface CalculatorButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const CalculatorButton = forwardRef<HTMLButtonElement, CalculatorButtonProps>(
  ({ className, variant, span, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, span, className }))}
        {...props}
      />
    );
  }
);

export default CalculatorButton;
