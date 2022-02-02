/*
 * @Author: your name
 * @Date: 2022-02-03 02:06:05
 * @LastEditTime: 2022-02-03 02:13:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\model\order.model.js
 */
const { DataTypes } = require('sequelize');
const seq = require('../db/seq');

const Order = seq.define('demo_orders', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '用户id'
    },
    address_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '地址id'
    },
    goods_info: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品信息'
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        comment: '地址id'
    },
    order_id: {
        type: DataTypes.CHAR(20),
        allowNull: false,
        comment: '订单id'
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: '订单状态'
    },
})

// Order.sync({ force: true })

module.exports = Order