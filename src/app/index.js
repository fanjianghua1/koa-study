/*
 * @Author: your name
 * @Date: 2022-01-27 15:51:36
 * @LastEditTime: 2022-02-02 16:13:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\app\index.js
 */
const Koa = require('koa');
const KoaBody = require('koa-body');

// 统一的错误处理函数
const errHandler = require('./errHandler');

// const userRouter = require('../router/user.route');
// const goodsRouter = require('../router/goods.route');
// 避免上述每写一个模块 就要 手写加载路由 在下面可以自动加载路由 ( index 目录默认 可以忽略)
const router = require('../router');

const app = new Koa()

app.use(KoaBody())

// app.use(userRouter.routes())
// app.use(goodsRouter.routes())

// use 方法返回的是app  链式调用
app.use(router.routes()).use(router.allowedMethods())

// 统一的错误处理
app.on('error', errHandler)

module.exports = app