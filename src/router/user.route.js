/*
 * @Author: your name
 * @Date: 2022-01-27 15:40:23
 * @LastEditTime: 2022-02-02 23:34:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\router\user.route.js
 */
const Router = require('koa-router');

// 导入错误处理的中间件
const { userValidator, verifyUser, verifyLogin, cryptPassword } = require('../middleware/user.middleware');
const { auth } = require('../middleware/auth.middleware');

const { register, login, changePassword } = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', userValidator, verifyUser, cryptPassword, register)

//登录接口 
// 这里需要注意 register 中间件调用前 密码先进行了加密 然后存储到了 数据库 
// 但在完善注册模块时 。 插入数据库的几条数据时是为进行加密的  所以在login 模块时   对于密码 与 数据库密码比对时 ，要做进一步的处理
router.post('/login', userValidator, verifyLogin, login)

// 修改密码接口
router.patch('/', auth, cryptPassword, changePassword)




module.exports = router