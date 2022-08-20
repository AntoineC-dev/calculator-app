import { evaluate } from "$lib/helpers";
import type { Calculator, Digit, Operation } from "$lib/types";
import { writable } from "svelte/store";

const defaultValue: Calculator = {
  currentOperand: null,
  operation: null,
  previousOperand: null,
  overwrite: false,
};

export const calculatorStore = writable<Calculator>({ ...defaultValue });

export const clearCalculator = () => calculatorStore.set({ ...defaultValue });

export const addDigit = (digit: Digit) =>
  calculatorStore.update((prev) => {
    const { currentOperand, overwrite } = prev;
    if (overwrite && !!currentOperand) {
      const curr = digit === "." ? `${currentOperand}${digit}` : digit;
      return { ...prev, currentOperand: curr, overwrite: false };
    }
    if (digit === "0" && currentOperand === "0") return prev;
    if (digit === "." && currentOperand?.includes(".")) return prev;
    if (digit === "." && !currentOperand) return { ...prev, currentOperand: `0${digit}` };
    if (currentOperand?.length === 12) return prev;
    const curr = currentOperand === "0" && digit !== "." ? digit : `${currentOperand ?? ""}${digit}`;
    return { ...prev, currentOperand: curr };
  });

export const removeDigit = () =>
  calculatorStore.update((prev) => {
    const { currentOperand, overwrite } = prev;
    if (overwrite) return { ...prev, overwrite: false, currentOperand: null };
    if (!currentOperand) return prev;
    if (currentOperand.length === 1) return { ...prev, currentOperand: null };
    const curr = currentOperand.slice(0, -1);
    return { ...prev, currentOperand: curr };
  });

export const setOperation = (operation: Operation) =>
  calculatorStore.update((prev) => {
    const { currentOperand, previousOperand } = prev;
    if (!currentOperand && !!previousOperand) return { ...prev, operation };
    if (!currentOperand) return prev;
    if (!!previousOperand)
      return { previousOperand: evaluate(prev), operation, currentOperand: null, overwrite: false };
    return { previousOperand: currentOperand, currentOperand: "0", operation, overwrite: false };
  });

export const setResult = () =>
  calculatorStore.update((prev) => {
    const { currentOperand, operation, previousOperand } = prev;
    if (!currentOperand || !operation || !previousOperand) return prev;
    return { previousOperand: null, operation: null, currentOperand: evaluate(prev), overwrite: true };
  });
