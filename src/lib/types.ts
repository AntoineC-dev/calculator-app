import type { Writable } from "svelte/store";

export const themes = ["light", "dark", "purple"] as const;
export type Theme = typeof themes[number];

const operations = ["÷", "x", "+", "-"] as const;
export type Operation = typeof operations[number];

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."] as const;
export type Digit = typeof digits[number];

export interface Calculator {
  previousOperand: string | null;
  currentOperand: string | null;
  operation: Operation | null;
  overwrite: boolean;
}

const localStorageHash = "b8a00d13-13e8-4edd-8dfe-bf7293a2bdbc";
const localStorageKeys = [`${localStorageHash}-theme`] as const;
export type LocalStorageKey = typeof localStorageKeys[number];

export type SessionData = { theme: Theme };
export type SessionStore = Writable<SessionData>;
