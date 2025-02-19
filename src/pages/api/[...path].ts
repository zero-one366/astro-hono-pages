import app from "@/server";
import type { APIRoute } from "astro";

const handler: APIRoute = ({ request, locals }) =>
  app.fetch(request, locals.runtime.env, locals.runtime.ctx);

export { handler as ALL };
