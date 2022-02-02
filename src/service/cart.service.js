/*
 * @Author: your name
 * @Date: 2022-02-02 22:49:30
 * @LastEditTime: 2022-02-03 00:34:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\service\cart.service.js
 */
const { Op } = require('sequelize');
const Cart = require('../model/cart.model');
const Goods = require('../model/goods.model');

class CartService {
    async createOrUpdate(user_id, goods_id) {
        // 根据user_id 和 goods_id 同时查找，有没有记录
        const res = await Cart.findOne({
            where: {
                [Op.and]: {
                    user_id,
                    goods_id
                }
            }
        })
        if (res) {
            // 已经存在一条记录 , number + 1 
            await res.increment('number')
            return await res.reload()
        } else {
            return await Cart.create({
                user_id,
                goods_id,
                number: 1
            })
        }
    }
    async findCarts(pageNum, pageSize) {
        const offset = (pageNum - 1) * pageSize
        const { count, rows } = await Cart.findAndCountAll({
            attributes: ['id', 'number', 'selected'],
            offset,
            limit: pageSize * 1,
            include: {
                model: Goods,
                as: 'goods_info',
                attributes: ['id', 'goods_name', 'goods_price', 'goods_img']
            },
        })
        return {
            pageNum,
            pageSize,
            total: count,
            list: rows,
        }
    }
    async updateCarts(params) {
        const { id, number, selected } = params

        const res = await Cart.findByPk(id)
        if (!res) return ''
        number !== undefined ? (res.number = number) : ''
        selected !== undefined ? (res.selected = selected) : ''

        return await res.save()
    }
    async removeCarts(ids) {
        return await Cart.destroy({
            where: {
                id: {
                    [Op.in]: ids
                }
            }
        })
    }
    async selectAllCarts(user_id) {
        return await Cart.update({
            selected: true
        }, {
            where: {
                user_id
            }
        })
    }
    async unSelectAllCarts(user_id) {
        return await Cart.update({
            selected: false
        }, {
            where: {
                user_id
            }
        })
    }
}

module.exports = new CartService()