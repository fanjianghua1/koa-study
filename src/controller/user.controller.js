/*
 * @Author: your name
 * @Date: 2022-01-27 15:55:52
 * @LastEditTime: 2022-02-02 15:49:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\controller\user.controller.js
 */
const jwt = require('jsonwebtoken');
const { createUser, getUserInfo, updateById } = require('../service/user.service');
const { userRegisterError, userUpdateDefeat } = require('../constant/err.type');

const { JWT_SECRET } = require('../config/config.default');
// 放置路由相关接口地址的 处理函数
class UserController {
    async register(ctx, next) {
        //1. 获取数据 . 使用前 需要 使用 koa-body 的中间件 对 请求体的解析 （ json格式 文本的设置） 
        // console.log(ctx.request.body)
        const { user_name, password } = ctx.request.body

        // //2. 操作数据库
        try {
            const res = await createUser(user_name, password)

            // //3. 返回结果
            ctx.body = {
                code: 0,
                message: '用户注册成功',
                result: {
                    id: res.id,
                    user_name: res.user_name
                },
            }
        } catch (err) {
            console.log(err);
            ctx.app.emit('error', userRegisterError, ctx)
        }
    }

    // jwt : json web token ( 三部分组成：1.header 头部 2.payload 载荷 3.signature 签名)
    async login(ctx, next) {
        const { user_name } = ctx.request.body

        //1. 获取用户信息(token的payload中，记录id，user_name,is_admin: )
        try {
            // 从返回结果对象中剔除password属性 ， 其他属性收集起来
            const { password, ...resUser } = await getUserInfo({ user_name })
            ctx.body = {
                code: 0,
                message: '用户登录成功',
                result: {
                    token: jwt.sign(resUser, JWT_SECRET, { expiresIn: '1d' }),
                }
            }
        } catch (err) {
            console.error('用户登录失败', err);
        }
    }

    async changePassword(ctx, next) {
        //1. 获取数据 （通过id 获取用户登录的信息）
        const id = ctx.state.user.id
        const password = ctx.request.body.password

        // console.log(id, password);
        //2. 操作数据库
        try {
            if (await updateById({ id, password })) {
                ctx.body = {
                    code: 0,
                    message: '修改密码成功',
                    result: ''
                }
            }
        } catch (err) {
            console.log(err);
            ctx.app.emit('error', userUpdateDefeat, ctx)
        }
    }
}

module.exports = new UserController()