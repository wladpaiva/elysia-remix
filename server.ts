import { createRequestHandler } from "./remix-elysia";
import { Elysia } from "elysia";

// notice that the result of `remix build` is "just a module"
import * as build from "./build/index.js";

const app = new Elysia()
  .get("/", () => "Hello Elysia \n\nGo to /remix to see the remix")
  .mount(
    "/remix",
    createRequestHandler({
      // @ts-expect-error
      build,
    })
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
