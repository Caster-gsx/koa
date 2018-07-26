const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
// const router = new Router();

//路径加前缀
const router = new Router({
    prefix: '/koa'
})

router.get('/', function(ctx, next) {
    ctx.body = 'hello page';
})
router.get('/todo.html',function(ctx, next) {
    ctx.body = 'todo page'
})
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('server is running at port 3000');
});