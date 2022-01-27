/*
 * @Author: your name
 * @Date: 2022-01-28 00:54:04
 * @LastEditTime: 2022-01-28 01:08:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\consitant\err.type.js
 */
module.exports = {
    userFormatError: {
        code: '10001',
        message: '用户名或密码为空',
        result: ''
    },
    userAlreadyExited: {
        code: '10002',
        message: '用户已存在',
        result: ''
    },
    userRegisterError: {
        code: '10003',
        message: '用户注册失败',
        result: ''
    }
}