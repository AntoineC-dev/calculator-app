import { browser } from "$app/env";
import type { Theme } from "$lib/types";
import { writable } from "svelte/store";

const defaultTheme: Theme = "dark";

export const themeStore = writable<Theme>();
export const initTheme = (value: Theme | null) => {
  if (value) {
    themeStore.set(value);
  } else if (browser) {
    themeStore.set(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  } else {
    themeStore.set(defaultTheme);
  }
};
export const updateTheme = (value: Theme) => {
  themeStore.set(value);
  fetch("/theme", { method: "PUT", body: value });
};
