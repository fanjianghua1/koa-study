/*
 * @Author: your name
 * @Date: 2022-01-28 00:54:04
 * @LastEditTime: 2022-02-02 15:47:38
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
    },
    userDoesNotExist: {
        code: '10004',
        message: '用户不存在',
        result: ''
    },
    userLoginError: {
        code: '10005',
        message: '用户登录失败',
        result: ''
    },
    userInvalidPassword: {
        code: '10006',
        message: '用户密码错误',
        result: ''
    },
    userUpdateDefeat: {
        code: '10007',
        message: '修改密码失败',
        result: ''
    },
    tokenExpiredError: {
        code: '10101',
        message: 'token 已过期',
        result: ''
    },
    invalidToken: {
        code: '10102',
        message: '无效的token',
        result: ''
    },
}