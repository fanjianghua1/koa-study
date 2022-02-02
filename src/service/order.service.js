/*
 * @Author: your name
 * @Date: 2022-02-03 02:04:49
 * @LastEditTime: 2022-02-03 02:30:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\service\order.service.js
 */
const Order = require('../model/order.model');
class OrderService {
    async createOrder(order) {
        return await Order.create(order)
    }
    async findAllOrder(pageNum, pageSize, status) {
        const { count, rows } = await Order.findAndCountAll({
            attributes: ['goods_info', 'total', 'order_id', 'status'],
            where: {
                status
            },
            offset: (pageNum - 1) * pageSize,
            limit: pageSize * 1
        })
        return {
            pageNum,
            pageSize,
            total: count,
            list: rows
        }
    }
    async updateOrder(id, status) {
        return await Order.update({ status }, {
            where: {
                id
            }
        })
    }
}

module.exports = new OrderService()