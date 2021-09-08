import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()

const router = new Router()
router.get('/', (cxt) => {
  cxt.body = 'hello'
})
app.use(router.routes()).use(
  bodyParser({
    enableTypes: ['json', 'form', 'text']
  })
)

app.listen(3001)
