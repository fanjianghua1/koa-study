/*
 * @Author: your name
 * @Date: 2022-02-03 00:41:56
 * @LastEditTime: 2022-02-03 01:41:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\router\addr.route.js
 */
const Router = require('koa-router');

const { auth } = require('../middleware/auth.middleware');
const { validator } = require('../middleware/addr.middleware');
const { create, findAll, update, remove, setDefault } = require('../controller/addr.controller');


const router = new Router({ prefix: '/address' })

// 添加地址接口
router.post('/', auth, validator({
    consignee: 'string',
    phone: { type: 'string', format: /^1\d{10}$/ },
    address: 'string'
}), create)

// 获取列表接口
router.get('/', auth, findAll)

//更新地址
router.put('/:id', auth, validator({
    consignee: 'string',
    phone: { type: 'string', format: /^1\d{10}$/ },
    address: 'string'
}), update)

// 删除地址
router.delete('/:id', auth, remove)

// 设置默认
router.patch('/:id', auth, setDefault)

module.exports = router