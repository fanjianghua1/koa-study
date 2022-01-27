/*
 * @Author: your name
 * @Date: 2022-01-27 15:55:52
 * @LastEditTime: 2022-01-27 16:54:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\controller\user.controller.js
 */
const { createUser } = require('../service/user.service');

// 放置路由相关接口地址的 处理函数
class UserController {
    async register(ctx, next) {
        //1. 获取数据 . 使用前 需要 使用 koa-body 的中间件 对 请求体的解析 （ json格式 文本的设置） 
        // console.log(ctx.request.body)
        const { user_name, password } = ctx.request.body

        // //2. 操作数据库
        const res = await createUser(user_name, password)
        console.log(res);

        // //3. 返回结果
        ctx.body = ctx.request.body
    }

    async login(ctx, next) {
        ctx.body = '登陆成功'
    }
}

module.exports = new UserController()