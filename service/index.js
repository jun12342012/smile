const Koa = require('koa')
const app = new Koa()
const {connect, initSchemas} = require('./database/init.js')
const mongoose = require('mongoose')

const bodyParser =require ('koa-bodyparser') /**引用koa-bodyparser */
const cors =require ('koa2-cors') /** 跨域 */
const Router = require('koa-router')
let user = require('./appApi/user.js')
let home =require('./appApi/home.js')

//装载所有子路由
let router = new Router()
router.use('/user',user.routes())
router.use('/home',home.routes())

app.use(cors())
app.use(bodyParser())
app.use(router.routes());
app.use(router.allowedMethods())


app.use(async (ctx) => {
  ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})
// //立即执行函数
// ;(async () => {
//     await connect()
//     initSchemas()

//     const User = mongoose.model('User')
//     let oneUser = new User({
//         userName: 'jspang13',
//         password: '123456'
//     })

//     oneUser.save().then( () => {
//         console.log('插入成功')
//     })
//     let users = await User.findOne({}).exec()
//     console.log('------------------')
//     // console.log(users)
//     console.log('------------------')  
// })()