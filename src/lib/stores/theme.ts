import { browser } from "$app/env";
import type { Theme, ThemeStore } from "$lib/types";
import { writable } from "svelte/store";

const defaultThemeStore: ThemeStore = { theme: "dark", usePrefers: true };

const saveStoreInCookie = (store: ThemeStore) => fetch("/theme", { method: "PUT", body: JSON.stringify(store) });

export const themeStore = writable<ThemeStore>();
export const initTheme = (value: ThemeStore | null) => {
  if (value) {
    if (browser && value.usePrefers) {
      const theme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      const store: ThemeStore = { ...value, theme };
      if (theme !== value.theme) saveStoreInCookie(store);
      themeStore.set(store);
    } else {
      themeStore.set(value);
    }
  } else if (browser) {
    const theme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const store: ThemeStore = { theme, usePrefers: true };
    themeStore.set(store);
    saveStoreInCookie(store);
  } else {
    themeStore.set(defaultThemeStore);
  }
};
export const updateTheme = (store: ThemeStore) => {
  themeStore.set(store);
  saveStoreInCookie(store);
};
