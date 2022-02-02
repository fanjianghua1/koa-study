/*
 * @Author: your name
 * @Date: 2022-01-28 00:43:22
 * @LastEditTime: 2022-02-02 23:26:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\middleware\user.middleware.js
 */

const bcrypt = require('bcryptjs');

const { getUserInfo } = require('../service/user.service');

// 导入错误对象
const { userFormatError, userAlreadyExited, userRegisterError, userDoesNotExist, userLoginError, userInvalidPassword } = require('../constant/err.type');

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

// 验证登录
const verifyLogin = async(ctx, next) => {
    //1. 判断用户是否存在 ( 不存在报错 )
    const { user_name, password } = ctx.request.body

    try {
        const res = await getUserInfo({ user_name })
        if (!res) {
            console.error('用户名不存在', { user_name });
            ctx.app.emit('error', userDoesNotExist, ctx)
            return
        }
        //2. 密码是否匹配  
        if (!(password === res.password) && !bcrypt.compareSync(password, res.password)) {
            ctx.app.emit('error', userInvalidPassword, ctx)
            return
        }
    } catch (err) {
        console.error(err);
        return ctx.app.emit('error', userLoginError, ctx)
    }

    await next()
}


// 用于密码加密  ‘ 加盐 ’
const cryptPassword = async(ctx, next) => {
    const { password } = ctx.request.body

    // 加盐
    const salt = bcrypt.genSaltSync(10)

    //hash 保存的是密文
    const hash = bcrypt.hashSync(password, salt)
    ctx.request.body.password = hash

    await next()
}
module.exports = {
    userValidator,
    verifyUser,
    verifyLogin,
    cryptPassword,
}