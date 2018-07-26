const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
router.get('/', function(ctx, next) {
    // ctx.body = '太阳当空照，花儿对我笑';
    ctx.body = ctx.query;
    console.log(ctx.body.username,ctx.body.age)
})


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => {
    console.log('server is ruunning at port 3000');
})