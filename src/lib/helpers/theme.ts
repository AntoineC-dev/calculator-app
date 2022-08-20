import type { ThemeValue } from "$lib/types";

export const handleThemeClass = (root: HTMLElement | undefined, value: ThemeValue) => {
  if (!root) return;
  root.classList.remove("theme-dark", "theme-purple");
  if (value === "light") return;
  root.classList.add(`theme-${value}`);
};
