/*
 * @Author: your name
 * @Date: 2022-01-27 19:24:08
 * @LastEditTime: 2022-01-27 19:49:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\model\use.model.js
 */
const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

// 创建模型 ( 模型名：demo_user 对应表名 : demo_users)
const User = seq.define('demo_user', {
    // id 会自动创建、管理
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一',
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '密码'
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '是否为管理员 0：不是管理员（默认）',
    }
})

// 强制同步 ( 创建数据表 )
// User.sync({ force: true }).catch((err) => {
//     console.log(err);
// })

module.exports = User;