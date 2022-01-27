/*
 * @Author: your name
 * @Date: 2022-01-27 15:55:52
 * @LastEditTime: 2022-01-27 16:14:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\controller\user.controller.js
 */

// 放置路由相关接口地址的 处理函数
class UserController {
    async register(ctx, next) {
        ctx.body = '用户注册成功'
    }

    async login(ctx, next) {
        ctx.body = '登陆成功'
    }
}

module.exports = new UserController()