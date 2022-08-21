import type { RequestHandler } from "@sveltejs/kit";
import { updateCookie } from "$lib/helpers";

export const PUT: RequestHandler = async ({ request, setHeaders }) => {
  const theme = await request.text();
  setHeaders({ "Set-Cookie": updateCookie("theme", theme) });
  return new Response(theme);
};
