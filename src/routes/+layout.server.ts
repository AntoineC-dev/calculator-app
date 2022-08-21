import type { ServerLoad } from "@sveltejs/kit";
export const load: ServerLoad = async ({ locals, setHeaders }) => {
  return {
    theme: locals.theme,
  };
};
