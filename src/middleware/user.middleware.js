/*
 * @Author: your name
 * @Date: 2022-01-28 00:43:22
 * @LastEditTime: 2022-01-28 01:15:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\middleware\user.middleware.js
 */
const { getUserInfo } = require('../service/user.service');

// 导入错误对象
const { userFormatError, userAlreadyExited, userRegisterError } = require('../constant/err.type');

// 用户 验证器
const userValidator = async(ctx, next) => {
    const { user_name, password } = ctx.request.body

    // 拿到数据后 要进行判断处理
    if (!user_name || !password) {
        console.error('用户名或密码为空', ctx.request.body);
        // ctx.status = 400
        // ctx.body = {
        //     code: '10001',
        //     message: '用户名或者密码为空',
        //     result: '',
        // }
        // 进一步对错误处理的封装
        ctx.app.emit('error', userFormatError, ctx)
        return
    }
    await next()
}
const verifyUser = async(ctx, next) => {
    const { user_name } = ctx.request.body

    try {
        const res = await getUserInfo({ user_name })
        if (res) {
            console.error('用户名已存在', { user_name });
            ctx.app.emit('error', userAlreadyExited, ctx)
            return
        }
    } catch (err) {
        console.error('获取用户信息错误', err);
        ctx.app.emit('error', userRegisterError, ctx)
        return
    }
    await next()
}
module.exports = {
    userValidator,
    verifyUser,
}