// TODO: make this a remix package `@remix-run/elysia`

import type { ServerBuild } from "@remix-run/node";
import { createRequestHandler as createRemixRequestHandler } from "@remix-run/node";

export function createRequestHandler({
  build,
  mode = process.env.NODE_ENV,
}: {
  build: ServerBuild;
  mode?: string;
}) {
  let handleRequest = createRemixRequestHandler(build, mode);

  return async (request: Request) => {
    let response = await handleRequest(request);

    return response;
  };
}
