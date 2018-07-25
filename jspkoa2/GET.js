// GET请求的接收
// 一种是从request中获得，一种是一直从上下文ctx中获得。
// 获得的格式也有两种：query和querystring


// http://localhost:3000/?user=jsp&age=123
// {"url":"/?user=jsp&age=123","method":"GET","req_query":{"user":"jsp","age":"123"},"req_querystring":"user=jsp&age=123",
// "ctx_query":{"user":"jsp","age":"123"},"ctx_querystring":"user=jsp&age=123"}

const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
    let url = ctx.url;
    let method = ctx.method;
    //从request中接收GET请求
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
    //从上下文ctx中接收GET请求
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    ctx.body = {
        url,
        method,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})
app.listen(3000);
console.log('success,[demo]server is running at port 3000');