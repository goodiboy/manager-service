import Router from 'koa-router'

const usersRouter = new Router()

usersRouter.post('/login', async (ctx) => {
  ctx.body = '测试登录'
})

export default usersRouter
