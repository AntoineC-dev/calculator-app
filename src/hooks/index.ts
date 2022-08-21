import type { Handle } from "@sveltejs/kit";
import { getCookieValue, isTheme } from "$lib/helpers";
import type { ThemeStore } from "$lib/types";

const getThemeFromCookie = (cookie: string | null) => {
  const json = getCookieValue(cookie, "theme");
  const themeStore = json ? (JSON.parse(json) as ThemeStore) : null;
  return themeStore && isTheme(themeStore.theme) ? themeStore : null;
};

export const handle: Handle = async ({ event, resolve }) => {
  const cookie = event.request.headers.get("cookie");
  event.locals.themeStore = getThemeFromCookie(cookie);
  const response = await resolve(event);
  return response;
};
