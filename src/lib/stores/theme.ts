import type { Theme } from "$lib/types";
import { writable } from "svelte/store";

export const themeStore = writable<Theme>();
export const initTheme = (value: Theme) => themeStore.set(value);
export const updateTheme = (value: Theme) => {
  themeStore.set(value);
  fetch("/theme", { method: "PUT", body: value });
};
