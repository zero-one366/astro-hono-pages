import { Hono } from "hono";
import { hc } from "hono/client";

const app = new Hono<{ Bindings: Env }>().basePath("/api/");

const routes = app.get("/", (c) => c.text("Hello hono"));

export default app;
export type AppType = typeof routes;
export const client = hc<AppType>("/");
