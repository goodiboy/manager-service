import Router from 'koa-router'
import usersRouter from './users'
const router = new Router()
router.prefix('/api')

router.use('/users', usersRouter.routes())

export default router
