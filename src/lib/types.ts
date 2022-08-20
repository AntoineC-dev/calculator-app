export type ThemeValue = "light" | "dark" | "purple";

export type Operation = "÷" | "x" | "+" | "-";
export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | ".";

export interface Calculator {
  previousOperand: string | null;
  currentOperand: string | null;
  operation: Operation | null;
  overwrite: boolean;
}

const localStorageHash = "b8a00d13-13e8-4edd-8dfe-bf7293a2bdbc";
const localStorageKeys = [`${localStorageHash}-theme`] as const;
export type LocalStorageKey = typeof localStorageKeys[number];
