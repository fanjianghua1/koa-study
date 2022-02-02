/*
 * @Author: your name
 * @Date: 2022-01-27 15:51:36
 * @LastEditTime: 2022-02-03 00:22:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\app\index.js
 */
const path = require('path');

const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaStatic = require('koa-static');
const parameter = require('koa-parameter');

// 统一的错误处理函数
const errHandler = require('./errHandler');

// const userRouter = require('../router/user.route');
// const goodsRouter = require('../router/goods.route');
// 避免上述每写一个模块 就要 手写加载路由 在下面可以自动加载路由 ( index 目录默认 可以忽略)
const router = require('../router');

const app = new Koa()

app.use(KoaBody({
    multipart: true,
    formidable: {
        //在options 中，不推荐使用 相对路径 (../) 
        //这里的相对路径不是相对于当前文件  而是相对于process.cwd() 进程执行的目录
        uploadDir: path.join(__dirname, '../uploads'),
        keepExtensions: true,
    },
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
}))

app.use(KoaStatic(path.join(__dirname, '../uploads')))

app.use(parameter(app))

// app.use(userRouter.routes())
// app.use(goodsRouter.routes())
// use 方法返回的是app  链式调用
// 会发现 虽然访问的路径 和 请求的方法都是正确的 。 但是如果在数据库语句执行发生了错误 （ 或ctx.body 没有定义时），仍然会显示404错误 
app.use(router.routes()).use(router.allowedMethods())

// 统一的错误处理
app.on('error', errHandler)

module.exports = app