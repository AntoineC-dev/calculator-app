import type { Calculator } from "$lib/types";

export const evaluate = (params: Calculator) => {
  const previousOperand = parseFloat(params.previousOperand!);
  const currentOperand = parseFloat(params.currentOperand!);
  if (isNaN(previousOperand) || isNaN(currentOperand)) return "";
  switch (params.operation) {
    case "÷":
      return (previousOperand / currentOperand).toString();
    case "x":
      return (previousOperand * currentOperand).toString();
    case "-":
      return (previousOperand - currentOperand).toString();
    default:
      return (previousOperand + currentOperand).toString();
  }
};
