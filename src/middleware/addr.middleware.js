/*
 * @Author: your name
 * @Date: 2022-02-03 00:48:38
 * @LastEditTime: 2022-02-03 00:55:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\middleware\addr.middleware.js
 */
const { addrFormatError } = require('../constant/err.type');

const validator = (rules) => {
    return async(ctx, next) => {
        try {
            ctx.verifyParams(rules)
        } catch (err) {
            console.error(err);
            addrFormatError.result = err
            return ctx.app.emit('error', addrFormatError, ctx)
        }
        await next()
    }
}
module.exports = {
    validator,
}