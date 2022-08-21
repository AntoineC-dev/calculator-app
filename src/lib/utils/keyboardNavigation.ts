import { digits, type Digit, type Operation } from "$lib/types";

interface Props {
  addDigit: (digit: Digit) => void;
  clearCalculator: () => void;
  removeDigit: () => void;
  setOperation: (operation: Operation) => void;
  setResult: () => void;
}

const isDigit = (key: string) => {
  if (digits.includes(key as Digit)) return true;
  return false;
};

const operationKeys = ["*", "-", "+", "/"];
const isOperation = (key: string) => {
  if (operationKeys.includes(key)) return true;
  return false;
};

export function keyboardNavigation(_: HTMLElement, props: Props) {
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "=") props.setResult();
    if (e.key === "Backspace") props.removeDigit();
    if (e.key === "Delete") props.clearCalculator();
    if (isDigit(e.key)) props.addDigit(e.key as Digit);
    if (isOperation(e.key)) {
      if (e.key !== "*" && e.key !== "/") props.setOperation(e.key as Operation);
      if (e.key === "*") props.setOperation("x");
      if (e.key === "/") props.setOperation("÷");
    }
  };

  document.addEventListener("keydown", onKeydown);
  return {
    destroy() {
      document.removeEventListener("keydown", onKeydown);
    },
  };
}
