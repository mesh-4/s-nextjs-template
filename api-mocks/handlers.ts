import { rest } from "msw"

export const handlers = [
  // * Reference: /src/pages/api/ping.ts
  rest.get("/api/ping", (_req, res, ctx) => {
    return res(ctx.delay(100), ctx.text("pong"))
  }),
]
