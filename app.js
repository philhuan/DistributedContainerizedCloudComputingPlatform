const Koa = require('koa');
const router = require('./controller/router');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const onerror = require('koa-onerror')
const static = require('koa-static');
const path = require("path");

const app = new Koa();
const port =8652

// 获取所有异常
onerror(app, {
    accepts() {
        return "json";
    },
    json(err, ctx) {
        ctx.body = {
            code: err.status,
            data: [],
            msg: err.message
        };
    }
});

app.use(logger())
    .use(cors())            //解决跨域
    .use(bodyParser())		//解析请求体
    // 前端静态资源路径
    .use(static(path.join(__dirname, "./dist")))
.
use(router.routes())	//路由控制
    .use(router.allowedMethods())
    .listen(port);

console.log(`port:${port}`)

