import { createRequestHandler } from "./remix-elysia";
import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

// notice that the result of `remix build` is "just a module"
import * as build from "./build/index.js";

const app = new Elysia()
  .get("/api", () => "Hello Elysia")
  // Serve public files
  .use(staticPlugin({ prefix: "/" }))
  // Serve remix routes
  .mount(
    "/",
    createRequestHandler({
      // @ts-expect-error
      build,
    })
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
