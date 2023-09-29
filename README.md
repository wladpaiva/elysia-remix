# Attempt to make Elysia run with Bun and mount Remix in a subpath

It seems to be working fine although we need to change the `react-dom/server` import on the **entry.server.tsx** to `react-dom/server.node`

AND be prepare to fight against the [broken links](https://github.com/remix-run/remix/discussions/2891)
