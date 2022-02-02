/*
 * @Author: your name
 * @Date: 2022-02-03 00:56:13
 * @LastEditTime: 2022-02-03 01:43:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\controller\addr.controller.js
 */
const { createAddr, findAllAddr, updateArr, removeAddr, setDefaultAddr } = require('../service/addr.service');

class AddrController {
    async create(ctx) {
        try {
            const user_id = ctx.state.user.id
            const { consignee, phone, address } = ctx.request.body
            const res = await createAddr({ user_id, consignee, phone, address })

            ctx.body = {
                code: 0,
                message: '添加地址成功',
                result: res
            }
        } catch (err) {
            console.log(err);
        }

    }
    async findAll(ctx) {
        try {
            const user_id = ctx.state.user.id

            const res = await findAllAddr(user_id)

            ctx.body = {
                code: 0,
                message: '获取列表成功',
                result: res
            }
        } catch (err) {
            console.log(err);
        }
    }
    async update(ctx) {
        const id = ctx.request.params.id

        const res = await updateArr(id, ctx.request.body)

        ctx.body = {
            code: 0,
            message: '更新地址成功',
            result: res
        }
    }
    async remove(ctx) {
        const id = ctx.request.params.id

        const res = await removeAddr(id)

        ctx.body = {
            code: 0,
            message: '删除地址成功',
            result: res
        }
    }
    async setDefault(ctx) {
        const user_id = ctx.state.user.id
        const id = ctx.request.params.id

        const res = await setDefaultAddr(user_id, id)

        ctx.body = {
            code: 0,
            message: '设置默认成功',
            result: res
        }
    }
}

module.exports = new AddrController()