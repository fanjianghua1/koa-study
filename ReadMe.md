<!--
 * @Author: your name
 * @Date: 2022-01-27 13:29:34
 * @LastEditTime: 2022-01-27 14:05:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \api\readMe.md
-->
一. **项目的初始化**
1. npm初始化
    ```
        npm init -y 
        生成package.json文件
    ```
2. git初始化 
    ```
        git init 
        生成.git 隐藏文件，git的本地仓库
    ```
3. 创建readme文件

二. **搭建项目**
1. 安装koa框架
    ```
        npm install koa
    ```
2. 编写最基本的app
    ```
        const Koa = require('koa');

        const app = new Koa()

        // ctx 记录 所有http的上下文 context
        app.use((ctx, next) => {
            ctx.body = 'hello api'
        })

        app.listen(3000, () => {
            console.log('server is running on http://localhost:3000');
        })
    ```
