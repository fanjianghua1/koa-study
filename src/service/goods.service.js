/*
 * @Author: your name
 * @Date: 2022-02-02 20:21:27
 * @LastEditTime: 2022-02-02 22:23:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\service\goods.service.js
 */
const Goods = require('../model/goods.model');

class GoodsService {
    async createGoods(goods) {
        const res = await Goods.create(goods)
        return res.dataValues
    }
    async updateGoods(id, goods) {
        const res = await Goods.update(goods, { where: { id } })
        return res[0] > 0 ? true : false
    }
    async removeGoods(id) {
        const res = await Goods.destroy({
            where: { id }
        })

        // 注意这里的res 并不是数组的形式 而是单个数字
        return res > 0 ? true : false
    }
    async restoreGoods(id) {
        const res = await Goods.restore({ where: { id } })
        return res > 0 ? true : false
    }

    // 分页查询
    async findGoods(pageNum, pageSize) {
        // // 1. 获取数据总数
        // const count = await Goods.count()

        // // console.log(count);
        // //2. 获取分页数据信息
        // const offset = (pageNum - 1) * pageSize
        // const rows = await Goods.findAll({ offset: offset, limit: pageSize * 1 })

        //  pageNum 是为了获取offset pageSize 是为了显示多少数据  实际上执行的语句 select + limit offset，pageSize

        const offset = (pageNum - 1) * pageSize
        const { count, rows } = await Goods.findAndCountAll({
            offset,
            limit: pageSize * 1
        })
        return {
            pageNum,
            pageSize,
            total: count,
            list: rows
        }
    }
}

module.exports = new GoodsService()