const Koa = require("koa")
const Router = require("koa-router")
const { default: next } = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })

const handle = app.getRequestHandler()

;(async () => {
  await app.prepare()
  const server = new Koa()
  const router = new Router()
  router.get("/zpage/:param", async (ctx) => {
    const { param } = ctx.params
    await handle(ctx.req, ctx.res, {
      pathname: "/zpage",
      query: { param },
    })
    ctx.respond = false
  })
  server.use(router.routes())
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.listen(4000, () => {
    console.log("Koa waiting on 4000")
  })
})()
