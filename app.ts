import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import logUtil from './utils/logUtil'
const app = new Koa()

const router = new Router()
router.get('/', (cxt) => {
  cxt.body = 'hello'
})

// 计算中间价使用的时间
app.use(async (ctx, next) => {
  console.log(123)
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  logUtil.info(`log output info`)
})
app
  .use(
    bodyParser({
      enableTypes: ['json', 'form', 'text']
    })
  )
  .use(router.routes())
  .use(json)

app.on('error', (err, ctx) => {
  console.log(err)
  logUtil.error(err.stack)
})
app.listen(3001)
