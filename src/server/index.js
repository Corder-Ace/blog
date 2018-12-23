const Koa = require('koa');
const logger = require('koa-logger');
const koaStatic = require('koa-static');
const path = require('path');
const bodyparser = require('koa-bodyparser');
const router = require('koa-router')();
const users = require('./router/user');
const { transformComponentToString } = require('./utils');
const App = require('../client/App').default;

const app = new Koa();
router.get('*', async (ctx, req) => {
    console.log(ctx.url);
    ctx.body = transformComponentToString(req, App);
});
app.use(async (ctx, next) => {
    const startTime = +new Date();
    await next();
    const ms = +new Date() - startTime;
    console.log(`${ctx.method}: ${ctx.url} - ${ms}:ms`);
});
app.use(bodyparser());
app.use(logger());
app.use(koaStatic(path.resolve(process.cwd(), 'server/public')));
app.use(router.routes());
app.use(users.routes());

app.listen(5000);
module.exports = app;
