const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

//子路由
const home = new Router();
home.get('/hello', async(ctx) => {
    ctx.body = 'home hello page';
}).get('/todo', async(ctx) => {
    ctx.body = 'home todo page';
})
//父级路由
const router = new Router();
router.use('/home', home.routes(),home.allowedMethods());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () =>{
    console.log('server is running at port 3000')
});