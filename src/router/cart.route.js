/*
 * @Author: your name
 * @Date: 2022-02-02 22:27:40
 * @LastEditTime: 2022-02-03 00:36:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\router\cart.route.js
 */

const Router = require('koa-router');

const router = new Router({ prefix: '/carts' })

const { auth } = require('../middleware/auth.middleware');
const { validator } = require('../middleware/cart.middleware');
const { add, findAll, update, remove, selectAll, unSelectAll } = require('../controller/cart.controller');

// 添加购物车接口
router.post('/', auth, validator({ goods_id: 'number' }), add)

// 获取购物车列表
router.get('/', auth, findAll)

// 更新购物车
router.patch('/:id', auth, validator({
    number: { type: 'number', required: false },
    selected: { type: 'bool', required: false }
}), update)

// 删除购物车
router.delete('/', auth, validator({ ids: 'array' }), remove)

// 全选中接口  & 全不选接口
router.post('/selectAll', auth, selectAll)
router.post('/unSelectAll', auth, unSelectAll)

module.exports = router