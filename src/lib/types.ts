export type ThemeValue = "light" | "dark" | "purple";

const localStorageHash = "b8a00d13-13e8-4edd-8dfe-bf7293a2bdbc";
const localStorageKeys = [`${localStorageHash}-theme`] as const;
export type LocalStorageKey = typeof localStorageKeys[number];
