/*
 * @Author: your name
 * @Date: 2022-02-03 01:54:20
 * @LastEditTime: 2022-02-03 01:57:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\middleware\order.middleware.js
 */
const { orderFormatError } = require('../constant/err.type');
const validator = (rules) => {
    return async(ctx, next) => {
        try {
            ctx.verifyParams(rules)
        } catch (err) {
            console.error(err);
            orderFormatError.result = err
            return ctx.app.emit('error', orderFormatError, ctx)
        }
        await next()
    }
}
module.exports = {
    validator
}