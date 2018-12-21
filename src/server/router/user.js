const router = require('koa-router')({
    prefix: '/api/v1',
});
const { Code } = require('../config');
const UserController = require('../controller/user');

router.post('/register', async (ctx) => {
    const requestBody = ctx.request.body;
    const regInfo = {
        username: requestBody.username,
        account: requestBody.account,
        password: requestBody.password,
        email: requestBody.email,
    };

    if (!regInfo.username || !regInfo.account || !regInfo.password || !regInfo.email) {
        ctx.body = {
            status: Code.INVALID_REQUEST,
            msg: '请完善注册信息!',
        };
    } else {
        const response = await UserController.register(regInfo);
        ctx.body = response;
    }
});
router.post('/login', async (ctx) => {
    const response = await UserController.login(ctx.request.body);
    ctx.body = response;
});

module.exports = router;
