/*
 * @Author: your name
 * @Date: 2022-01-28 00:54:04
 * @LastEditTime: 2022-02-03 00:49:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\consitant\err.type.js
 */
// 错误类型抽离
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
    hasNotAdminPermission: {
        code: '10103',
        message: '没有管理员权限',
        result: ''
    },
    fileUploadError: {
        code: '10201',
        message: '商品图片上传失败',
        result: ''
    },
    unSupportedFileType: {
        code: '10202',
        message: "不支持的图片格式",
        result: ''
    },
    goodsFormatError: {
        code: '10203',
        message: '商品格式错误',
        result: ''
    },
    publishGoodsError: {
        code: '10204',
        message: '发布商品错误',
        result: ''
    },
    invalidGoodsID: {
        code: '10205',
        message: '修改的商品信息不存在',
        result: ''
    },
    cartFormatError: {
        code: '10301',
        message: "购物车数据格式错误",
        result: ''
    },
    addrFormatError: {
        code: '10302',
        message: "地址数据格式错误",
        result: ''
    }
}