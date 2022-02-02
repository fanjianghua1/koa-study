/*
 * @Author: your name
 * @Date: 2022-02-02 15:55:55
 * @LastEditTime: 2022-02-02 22:32:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\router\goods.route.js
 */
const Router = require('koa-router');

const { auth, hadAdminPermission } = require('../middleware/auth.middleware');
const { validator } = require('../middleware/goods.middleware');
const { upload, create, update, remove, restore, findAll } = require('../controller/goods.controller');


const router = new Router({ prefix: '/goods' })

// 商品图片上传接口
router.post('/upload', auth, hadAdminPermission, upload)

// 发布商品接口
router.post('/', auth, hadAdminPermission, validator, create)

// 修改商品接口
router.put('/:id', auth, hadAdminPermission, validator, update)

// 直接从数据库删除 (硬删除)  直接  delete  语句
// router.delete('/:id', auth, hadAdminPermission, remove)

// 软删除 （deletedAt字段有值） 是执行  update 语句
router.post('/:id/off', auth, hadAdminPermission, remove)

//上架 ( 就是把  deletedAt 字段的值 重新更新为  null  )
router.post('/:id/on', auth, hadAdminPermission, restore)

// 商品列表接口
router.get('/', findAll)

module.exports = router