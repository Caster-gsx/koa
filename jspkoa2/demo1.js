function get(){
    return 'somethings';
}

// 异步方法
async function testAsync(){
    return 'hello async';
}
async function test(){
    const t1 = await get();
    const t2 = await testAsync();
    console.log(t1, t2);
}

console.log(testAsync());  // Promise { 'hello async' }
test(); // somethings hello async

// 分割线---

function asy(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('异步等待,三秒后出现')
        },3000)
    })
}
async function test1(){
    const v = await asy()
    console.log(v);
}
test1();
