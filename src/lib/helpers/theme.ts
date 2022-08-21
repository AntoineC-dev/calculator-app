import { themes, type Theme } from "$lib/types";

export const isTheme = (theme: unknown): theme is Theme => typeof theme === "string" && themes.includes(theme as Theme);

export const handleThemeClass = (root: HTMLElement | undefined, value: Theme) => {
  if (!root) return;
  root.classList.remove("theme-dark", "theme-purple");
  if (value === "light") return;
  root.classList.add(`theme-${value}`);
};

export const getThemeValueFromIndex = (index: number): Theme => {
  if (index === 0) return "dark";
  if (index === 1) return "light";
  return "purple";
};
