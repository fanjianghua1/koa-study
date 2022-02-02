/*
 * @Author: your name
 * @Date: 2022-02-02 22:41:52
 * @LastEditTime: 2022-02-03 00:33:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\controller\cart.controller.js
 */
const { createOrUpdate, findCarts, updateCarts, removeCarts, selectAllCarts, unSelectAllCarts } = require('../service/cart.service');
const { cartFormatError } = require('../constant/err.type');

class CartController {
    async add(ctx) {
        // 将商品添加到购物车给
        //1. 解析user_id
        const user_id = ctx.state.user.id
        const goods_id = ctx.request.body.goods_id

        //2. 操作数据库
        try {
            const res = await createOrUpdate(user_id, goods_id)

            //3. 返回结果
            ctx.body = {
                code: 0,
                message: '添加到购物车成功',
                result: res
            }
        } catch (err) {
            console.log(err);
        }
    }
    async findAll(ctx) {
        //1. 解析请求参数
        const { pageNum = 1, pageSize = 10 } = ctx.request.query

        //2. 操作数据库
        const res = await findCarts(pageNum, pageSize)

        //3. 返回结果
        ctx.body = {
            code: 0,
            message: '获取购物车列表成功',
            result: res
        }
    }
    async update(ctx) {
        // 解析参数
        const { id } = ctx.request.params
        const { number, selected } = ctx.request.body
        if (number === undefined && selected === undefined) {
            cartFormatError.message = 'number 和 selected 不能同时为空'
            return ctx.app.emit('error', cartFormatError, ctx)
        }

        // 操作数据库
        const res = await updateCarts({ id, number, selected })

        // 返回数据
        ctx.body = {
            code: 0,
            message: '更新购物车成功',
            result: res
        }
    }
    async remove(ctx) {
        const { ids } = ctx.request.body

        const res = await removeCarts(ids)

        ctx.body = {
            code: 0,
            message: '删除购物车成功',
            result: res
        }
    }
    async selectAll(ctx) {
        const user_id = ctx.state.user.id

        const res = await selectAllCarts(user_id)

        ctx.body = {
            code: 0,
            message: '全部选中',
            result: res
        }
    }
    async unSelectAll(ctx) {
        const user_id = ctx.state.user.id

        const res = await unSelectAllCarts(user_id)

        ctx.body = {
            code: 0,
            message: '全不选中',
            result: res
        }
    }
}

module.exports = new CartController()