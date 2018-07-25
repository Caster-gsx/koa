const Koa = require('koa');
const app = new Koa();
app.use(async(ctx) => {
    ctx.body = "hello";
})
app.listen(5555);
console.log('[demo] is starting at port 5555');