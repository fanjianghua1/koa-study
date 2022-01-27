/*
 * @Author: your name
 * @Date: 2022-01-27 15:51:36
 * @LastEditTime: 2022-01-27 16:47:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\app\index.js
 */
const Koa = require('koa');
const KoaBody = require('koa-body');

const userRouter = require('../router/user.route');

const app = new Koa()

app.use(KoaBody())
app.use(userRouter.routes())

module.exports = app