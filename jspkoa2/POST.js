const Koa = require('koa');
const app = new Koa();

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
        // ctx.body = '接收到请求';
        let pastData = await parsePostData(ctx);
        ctx.body = pastData;
    }
    else {
        ctx.body = '<h1>404</h1>'
    }
})
//解析post参数
function parsePostData(ctx){
    return new Promise((resolve, rejects) => {
        try {
            let postdata= "";
            ctx.req.on('data', (data) => {
                postdata += data;
            })
            ctx.req.on('end', function() {
                // resolve(postdata);
                resolve(parseQueryStr(postdata));
            })
        }
        catch(err) {
            rejects(err)
        }
    })
}
//把字符串封装成JSON对象
function parseQueryStr(querystr){
    let queryData = {};
    let queryStrList = querystr.split('&');
    for(let [index, querystr] of queryStrList.entries()){
        let itemList = querystr.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

app.listen(3000);
console.log('server is running at port 3000');