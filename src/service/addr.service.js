/*
 * @Author: your name
 * @Date: 2022-02-03 00:59:06
 * @LastEditTime: 2022-02-03 01:45:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\service\addr.service.js
 */
const Address = require('../model/addr.model');

class AddrService {
    async createAddr(addr) {
        console.log(addr);
        return await Address.create(addr)
    }
    async findAllAddr(user_id) {
        return await Address.findAll({
            attributes: ['id', 'consignee', 'phone', 'address', 'is_default'],
            where: { user_id },
        })
    }
    async updateArr(id, addr) {
        return await Address.update(addr, { where: { id } })
    }
    async removeAddr(id) {
        return Address.destroy({
            where: {
                id
            }
        })
    }
    async setDefaultAddr(user_id, id) {
        await Address.update({ is_default: 0 }, {
            where: {
                user_id,
            }
        })
        return await Address.update({
            is_default: true
        }, {
            where: {
                id,
            }
        })
    }
}
module.exports = new AddrService()