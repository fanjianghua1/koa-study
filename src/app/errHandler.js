const { beforeValidate } = require("../model/use.model")

/*
 * @Author: your name
 * @Date: 2022-01-28 00:58:30
 * @LastEditTime: 2022-01-28 01:00:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\app\errHandler.js
 */
module.exports = (err, ctx) => {
    let status = 500
    switch (err.code) {
        case '10001':
            status = 400
            break
        case '10002':
            status = 409
            break
        default:
            status = 500
    }
    ctx.status = status
    ctx.body = err
}