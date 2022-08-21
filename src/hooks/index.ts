import type { Handle } from "@sveltejs/kit";
import { getCookieValue, isTheme } from "$lib/helpers";

const getThemeFromCookie = (cookie: string | null) => {
  const theme = getCookieValue(cookie, "theme");
  return isTheme(theme) ? theme : null;
};

export const handle: Handle = async ({ event, resolve }) => {
  const cookie = event.request.headers.get("cookie");
  event.locals.theme = getThemeFromCookie(cookie);
  const response = await resolve(event);
  return response;
};
