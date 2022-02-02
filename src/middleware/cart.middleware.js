/*
 * @Author: your name
 * @Date: 2022-02-02 22:36:58
 * @LastEditTime: 2022-02-02 23:55:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\middleware\cart.middleware.js
 */
const { cartFormatError } = require('../constant/err.type');

// 闭包的应用
const validator = (rules) => {
    return async(ctx, next) => {
        try {
            ctx.verifyParams(rules)
        } catch (err) {
            console.error(err);
            cartFormatError.result = err
            return ctx.app.emit('error', cartFormatError, ctx)
        }

        await next()
    }
}

module.exports = {
    validator,
}