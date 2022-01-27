/*
 * @Author: your name
 * @Date: 2022-01-27 14:03:15
 * @LastEditTime: 2022-01-27 14:19:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\main.js
 */
// 入口文件
const Koa = require('koa');

const app = new Koa()

// ctx 记录 所有http的上下文 context
app.use((ctx, next) => {
    ctx.body = 'hello api'
})

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000');
})