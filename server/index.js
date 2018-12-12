const Koa = require('koa');
const logger = require('koa-logger');
const koaStatic = require('koa-static');
const bodyparser = require('koa-bodyparser');
const users = require('./router/user');

const app = new Koa();

app.use(async (ctx, next) => {
    const startTime = +new Date();
    await next();
    const ms = +new Date() - startTime;
    console.log(`${ctx.method}: ${ctx.url} - ${ms}:ms`);
});
app.use(bodyparser());
app.use(logger());
app.use(koaStatic(__dirname + '/public'));
// app.use(koaStatic(path.resolve(process.cwd(), 'server/public/static')));
app.use(users.routes());

module.exports = app;
