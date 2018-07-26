// ctx.cookies.get(name, [options]) 读取上下文请求中的cookie
// ctx.cookies.set(name, value, [options]) 在上下文中写入cookie

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if(ctx.url === '/index') {
        ctx.cookies.set(
            'username' ,'Tom',{
                domain:'127.0.0.1', // 写cookie所在的域名
                // path:'/index',       // 写cookie所在的路径
                maxAge:1000*60*60*24,   // cookie有效时长
                expires:new Date('2018-12-31'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:false  // 是否允许重写
            }
        ),
        ctx.cookies.set(
            'age','18'
        );
        ctx.body = 'cookies save success';
    }
    else if(ctx.cookies.get('username')){
        ctx.body = ctx.cookies.get('username');
    }
    else {
        ctx.body = 'hello';
    }
})

app.listen(3000, () => {
    console.log('server is running at port 3000');
});
