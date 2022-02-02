/*
 * @Author: your name
 * @Date: 2022-02-02 16:05:58
 * @LastEditTime: 2022-02-02 16:08:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\src\router\index.js
 */
const fs = require('fs');

const Router = require('koa-router');
const router = new Router()

// 路由自动加载
fs.readdirSync(__dirname).forEach(file => {
    // console.log(file);
    if (file != 'index.js') {
        let r = require('./' + file)
        router.use(r.routes())
    }
})

module.exports = router