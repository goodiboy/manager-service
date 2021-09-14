import mongoose from 'mongoose'
import logUtil from '../utils/logUtil'

const config = {
  url: 'mongodb://localhost:9527/manager'
}

mongoose.connect(config.url).then(() => {
  const db = mongoose.connection

  db.on('error', () => {
    logUtil.error('数据库链接失败')
  })

  db.on('open', () => {
    logUtil.info('数据库连接成功')
  })
})
