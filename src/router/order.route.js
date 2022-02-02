/*
 * @Author: your name
 * @Date: 2022-02-03 01:49:49
 * @LastEditTime: 2022-02-03 02:19:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\router\order.route.js
 */

const Router = require('koa-router');

const router = new Router({ prefix: '/orders' })

const { auth } = require('../middleware/auth.middleware');
const { validator } = require('../middleware/order.middleware');
const { create, findAll, update } = require('../controller/order.controller');

// 提交订单
router.post('/', auth, validator({
    address_id: 'int',
    goods_info: 'string',
    total: 'string'
}), create)

// 获取订单列表
router.get('/', auth, findAll)

// 更新订单状态
router.patch('/:id', auth, validator({
    status: 'number',
}), update)

module.exports = router