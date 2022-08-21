import type { ServerLoad } from "@sveltejs/kit";
export const load: ServerLoad = async ({ locals, setHeaders }) => {
  return {
    themeStore: locals.themeStore,
  };
};
