export const getCookieValue = (cookie: string | null, name: string): string | null =>
  cookie?.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || null;

const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;
export const updateCookie = (cookie: string, value: string) =>
  `${cookie}=${value}; Max-Age=${ONE_WEEK_IN_SECONDS}; SameSite=Lax; HttpOnly; Path=/; Secure`;
