/*
 * @Author: your name
 * @Date: 2022-02-02 20:00:22
 * @LastEditTime: 2022-02-02 20:18:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\middleware\goods.middleware.js
 */
const { goodsFormatError } = require('../constant/err.type');
// 校验参数
const validator = async(ctx, next) => {
    try {
        ctx.verifyParams({
            goods_name: { type: 'string', require: true },
            goods_price: { type: 'number', require: true },
            goods_num: { type: 'number', require: true },
            goods_img: { type: 'string', require: true },
        })
    } catch (err) {
        console.error(err);
        goodsFormatError.result = err
        return ctx.app.emit('error', goodsFormatError, ctx)
    }

    await next()
}

module.exports = {
    validator
}