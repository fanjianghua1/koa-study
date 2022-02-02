/*
 * @Author: your name
 * @Date: 2022-01-30 23:41:49
 * @LastEditTime: 2022-02-02 15:44:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\middleware\auth.middleware.js
 */
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config.default');
const { tokenExpiredError, invalidToken } = require('../constant/err.type');

const auth = async(ctx, next) => {

    const { authorization } = ctx.request.header
    const token = authorization.replace('Bearer ', '')

    // ctx.body = '修改密码成功'
    try {
        // user中包含了payload的信息 （id，user_name，is_admin）
        const user = jwt.verify(token, JWT_SECRET)
        ctx.state.user = user

    } catch (err) {
        switch (err.name) {
            case 'TokenExpiredError':
                console.error('token已过期', token);
                return ctx.app.emit('error', tokenExpiredError, ctx)
            case 'JsonWebTokenError':
                console.error('无效的token', err);
                return ctx.app.emit('error', invalidToken, ctx)
        }
    }

    await next()
}

module.exports = {
    auth
}