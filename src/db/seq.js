/*
 * @Author: your name
 * @Date: 2022-01-27 18:57:39
 * @LastEditTime: 2022-01-27 19:35:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\db\seq.js
 */
// 导入操作数据库的包
const { Sequelize } = require('sequelize');

const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB,
} = require('../config/config.default')

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql',
})

// 类的实例对象的 数据库连接测试 的函数
seq.authenticate().then(() => {
    console.log('数据库连接成功');
}).catch((err) => {
    console.log('数据库连接失败', err);
})

module.exports = seq