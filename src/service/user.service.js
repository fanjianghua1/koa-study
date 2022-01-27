/*
 * @Author: your name
 * @Date: 2022-01-27 16:35:57
 * @LastEditTime: 2022-01-28 00:33:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\service\user.service.js
 */
const User = require('../model/use.model');

class UserService {
    async createUser(user_name, password) {
        // 插入数据
        const res = await User.create({ user_name, password })
        return res.dataValues
    }
    async getUserInfo({ id, user_name, password, is_admin }) {
        const whereOpt = {}

        id && Object.assign(whereOpt, { id })
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
        is_admin && Object.assign(whereOpt, { is_admin })

        const res = await User.findOne({
            attributes: ['id', 'user_name', 'password', 'is_admin'],
            where: whereOpt
        })

        return res ? res.dataValues : false
    }
}

module.exports = new UserService()