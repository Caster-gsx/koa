// koa-bodyparser 中间件

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

app.use(async (ctx) => {
    if(ctx.url==="/" && ctx.method == 'GET'){
        let html = `
            <form method="post", action="/">
                <p>username</p>
                <input name="username"/>
                <p>age</p>
                <input name="age"/>
                <p>
                    <button type="submit">提交</button>
                </p>
            </form>
        `
        ctx.body = html;
    }
    else if (ctx.url === "/" && ctx.method == 'POST'){
        // 直接可以用ctx.request.body进行获取POST请求参数
        let pastData = ctx.request.body;
        ctx.body = pastData;
    }
    else {
        ctx.body = '<h1>404</h1>'
    }
})

app.listen(3000);
console.log('server is running at port 3000');