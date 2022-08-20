import type { ThemeValue } from "$lib/types";
import { getInitialData, persistData } from "$lib/utils";
import { writable } from "svelte/store";

const defaultValue: ThemeValue = "dark";

export const themeStore = writable<ThemeValue>(
  getInitialData({ defaultValue, key: "b8a00d13-13e8-4edd-8dfe-bf7293a2bdbc-theme" })
);
themeStore.subscribe((data) => persistData({ data, key: "b8a00d13-13e8-4edd-8dfe-bf7293a2bdbc-theme" }));
export const updateTheme = (value: ThemeValue) => themeStore.set(value);
