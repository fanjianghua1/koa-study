/*
 * @Author: your name
 * @Date: 2022-01-27 15:40:23
 * @LastEditTime: 2022-01-27 16:04:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\router\user.route.js
 */
const Router = require('koa-router');

const { register, login } = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', register)

//登录接口
router.post('/login', login)

module.exports = router