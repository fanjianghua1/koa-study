/*
 * @Author: your name
 * @Date: 2022-02-03 01:08:36
 * @LastEditTime: 2022-02-03 01:30:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\model\addr.model.js
 */
const { DataTypes } = require('sequelize');
const seq = require('../db/seq');

const Address = seq.define('demo_address', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '用户id'
    },
    consignee: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '收货人姓名'
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '收货人地址'
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '收货人地址'
    },
    is_default: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: '是否为默认地址,0:不是'
    }
})

// Address.sync({ force: true })

module.exports = Address