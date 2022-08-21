import { themes, type Theme } from "$lib/types";

export const isTheme = (theme: unknown): theme is Theme => typeof theme === "string" && themes.includes(theme as Theme);

export const getThemeValueFromIndex = (index: number): Theme => {
  if (index === 0) return "dark";
  if (index === 1) return "light";
  return "purple";
};

export const getIndexValueFromTheme = (theme: Theme): number => {
  if (theme === "dark") return 0;
  if (theme === "light") return 1;
  return 2;
};

export const getNextTheme = (index: number, direction: "left" | "right") => {
  if (direction === "right") {
    if (index === 2) return { index: 0, theme: getThemeValueFromIndex(0) };
    return { index: index + 1, theme: getThemeValueFromIndex(index + 1) };
  } else {
    if (index === 0) return { index: 2, theme: getThemeValueFromIndex(2) };
    return { index: index - 1, theme: getThemeValueFromIndex(index - 1) };
  }
};
