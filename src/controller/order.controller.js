/*
 * @Author: your name
 * @Date: 2022-02-03 02:00:36
 * @LastEditTime: 2022-02-03 02:28:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\controller\order.controller.js
 */
const { createOrder, findAllOrder, updateOrder } = require('../service/order.service');
class OrderController {
    async create(ctx) {
        try {
            const user_id = ctx.state.user.id
            const { address_id, goods_info, total } = ctx.request.body

            const order_id = 'demo' + Date.now()

            const res = await createOrder({
                user_id,
                address_id,
                goods_info,
                total,
                order_id,
            })

            ctx.body = {
                code: 0,
                message: '生成订单成功',
                result: res
            }
        } catch (err) {
            console.log(err);
        }
    }
    async findAll(ctx) {
        const { pageNum = 1, pageSize = 10, status = 0 } = ctx.request.query;

        const res = await findAllOrder(pageNum, pageSize, status)

        ctx.body = {
            code: 0,
            message: '获取列表成功',
            result: res,
        }
    }
    async update(ctx) {
        const id = ctx.request.params.id
        const { status } = ctx.request.body

        const res = await updateOrder(id, status)

        ctx.body = {
            code: 0,
            message: '更新成功',
            result: res
        }
    }
}

module.exports = new OrderController()