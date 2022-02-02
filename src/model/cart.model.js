/*
 * @Author: your name
 * @Date: 2022-02-02 22:52:53
 * @LastEditTime: 2022-02-02 23:48:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\model\cart.model.js
 */
const { DataTypes } = require('sequelize');
const seq = require('../db/seq');
const Goods = require('./goods.model');

const Cart = seq.define('demo_carts', {
    goods_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品的id'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '用户的id'
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品的数量'
    },
    selected: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: '是否选中'
    }
})

// 同步数据( 如果不加的话，有表不会重新建表)
// Cart.sync({ force: true })

// 建立表间的关联 （ 主、外键）
Cart.belongsTo(Goods, {
    foreignKey: 'goods_id',
    as: 'goods_info'
})

module.exports = Cart