/*
 * @Author: your name
 * @Date: 2022-02-02 20:28:53
 * @LastEditTime: 2022-02-02 21:49:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\model\goods.model.js
 */
const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const Goods = seq.define('demo_goods', {
    goods_name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品名称'
    },
    goods_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        comment: '商品价格'
    },
    goods_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品库存'
    },
    goods_img: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品图片的地址'
    }
}, {
    // 加入deletedAt 
    paranoid: true,
})

// Goods.sync({ force: true })

module.exports = Goods