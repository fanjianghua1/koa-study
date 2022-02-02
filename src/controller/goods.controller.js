/*
 * @Author: your name
 * @Date: 2022-02-02 15:57:38
 * @LastEditTime: 2022-02-02 22:04:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\controller\goods.controller.js
 */
const path = require('path');

const { fileUploadError, unSupportedFileType, publishGoodsError, invalidGoodsID } = require('../constant/err.type');
const { createGoods, updateGoods, removeGoods, restoreGoods, findGoods } = require('../service/goods.service');

class GoodsController {
    async upload(ctx, next) {
        // console.log(ctx.request.files.file);
        const { file } = ctx.request.files
        const filesTypes = ['image/jpeg', 'image/png']
        if (file) {
            if (!filesTypes.includes(file.type)) {
                return ctx.app.emit('error', unSupportedFileType, ctx)
            }
            ctx.body = {
                code: 0,
                message: '图片上传成功',
                result: {
                    goods_img: path.basename(file.path),
                }
            }
        } else {
            return ctx.app.emit('error', fileUploadError, ctx)
        }
    }
    async create(ctx) {
        // 直接调用service 中的方法
        try {
            const { createdAt, updatedAt, ...res } = await createGoods(ctx.request.body)
            ctx.body = {
                code: 0,
                message: '发布商品成功',
                result: res
            }
        } catch (err) {
            console.error(err);
            return ctx.app.emit('error', publishGoodsError, ctx)
        }
    }
    async update(ctx) {
        try {
            const res = await updateGoods(ctx.params.id, ctx.request.body)

            if (res) {
                ctx.body = {
                    code: 0,
                    message: '修改商品成功',
                    result: ''
                }
            } else {
                return ctx.app.emit('error', invalidGoodsID, ctx)
            }
        } catch (err) {
            console.error(err);
        }
    }
    async remove(ctx) {
        const res = await removeGoods(ctx.params.id)
        if (res) {
            ctx.body = {
                code: 0,
                message: '下架商品成功',
                result: ''
            }
        } else {
            ctx.body = '商品下架失败，请检查参数'
        }
    }
    async restore(ctx) {
        const res = await restoreGoods(ctx.params.id)
        if (res) {
            ctx.body = {
                code: 0,
                message: '上架商品成功',
                result: ''
            }
        } else {
            ctx.body = '商品上架失败，请检查参数'
        }
    }
    async findAll(ctx) {
        //1 .解析pageNum 和 pageSize
        const { pageNum = 1, pageSize = 10 } = ctx.request.query

        //2. 调用数据处理的相关方法
        const res = await findGoods(pageNum, pageSize)

        //3. 返回结果
        ctx.body = {
            code: 0,
            message: '获取商品列表成功',
            result: res,
        }
    }
}

module.exports = new GoodsController()