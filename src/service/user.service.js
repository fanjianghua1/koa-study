/*
 * @Author: your name
 * @Date: 2022-01-27 16:35:57
 * @LastEditTime: 2022-01-27 16:37:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\service\user.service.js
 */
class UserService {
    async createUser(user_name, password) {
        // 写入数据库
        return '写入数据库成功'
    }
}

module.exports = new UserService()