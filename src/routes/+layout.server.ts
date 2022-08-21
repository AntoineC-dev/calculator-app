import type { ServerLoad } from "@sveltejs/kit";
export const load: ServerLoad = async ({ locals, setHeaders }) => {
  const theme = locals.theme ?? "dark";
  if (!locals.theme) setHeaders({ "Set-Cookie": `theme=${theme}; SameSite=Strict; HttpOnly; Path=/` });
  return {
    theme,
  };
};
