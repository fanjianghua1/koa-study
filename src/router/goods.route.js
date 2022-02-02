/*
 * @Author: your name
 * @Date: 2022-02-02 15:55:55
 * @LastEditTime: 2022-02-02 15:59:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\router\goods.route.js
 */
const Router = require('koa-router');

const { upload } = require('../controller/goods.controller');

const router = new Router({ prefix: '/goods' })

router.post('/upload', upload)

module.exports = router