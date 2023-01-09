import express from 'express'
import { initDb } from './Helper/dbHelper.js'
import { getParam } from './Helper/httpHelper.js'
import { createTableSqlList } from './Database/createTable.js'
import {
  addNews,
  getLatestNews
} from './Service/news.js'

const initExpress = () => {
  const app = express()
  const port = 3000

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.all('*', (req, res, next) => {
    // google需要配置，否则报错cors error
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    // 允许的地址,http://127.0.0.1:9000这样的格式
    res.setHeader('Access-Control-Allow-Origin', "*")
    // 允许跨域请求的方法
    res.setHeader(
      'Access-Control-Allow-Methods',
      'POST, GET, OPTIONS, DELETE, PUT'
    )
    // 允许跨域请求header携带哪些东西
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since'
    )
    next()
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.post('/news/get', async function (req, res) {
    res.send(await getLatestNews(getParam(req, 'groupId')))
  })

  app.post('/news/add', async function (req, res) {
    res.send(await addNews({
      groupId: getParam(req, 'groupId'),
      content: getParam(req, 'content'),
    }))
  })

  app.listen(port, () => {
    console.log(`程序已启动，请访问${port}端口`)
  })
}

const init = async () => {
  await initDb('./Database/basedb.db', createTableSqlList);
  initExpress();
}

init();