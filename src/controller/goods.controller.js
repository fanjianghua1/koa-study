/*
 * @Author: your name
 * @Date: 2022-02-02 15:57:38
 * @LastEditTime: 2022-02-02 15:59:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\controller\goods.controller.js
 */
class GoodsController {
    async upload(ctx, next) {
        ctx.body = '上传成功'
    }
}

module.exports = new GoodsController()