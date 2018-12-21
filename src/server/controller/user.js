const moment = require('moment');
const UserModel = require('../model/user');
const { Code } = require('../config');

class UserController {
    static async login(data) {
        const userInfo = await UserModel.findOne({ where: { account: data.account } });
        if (!userInfo) {
            return {
                status: Code.INVALID_AUTH,
                msg: '该用户不存在!',
            };
        } if (data.password === userInfo.password) {
            return {
                status: Code.SUCCESS,
                userInfo,
                msg: '登陆成功',
            };
        }
        return {
            status: Code.INVALID_GRANT,
            msg: '用户名或密码错误!',
        };
    }

    static async register(info) {
        const isAccount = await UserModel.findOne(
            { where: { account: info.account } });
        if (isAccount) return { status: Code.INVALID_GRANT, msg: '账号已存在' };

        const isUserName = await UserModel.findOne(
            { where: { userName: info.username } });
        if (isUserName) return { status: Code.INVALID_GRANT, msg: '用户名重复!' };

        try {
            await UserModel.create({ ...info, moment: moment().format('YY-MM-DD HH:mm:ss') });
            return { status: Code.SUCCESS, msg: '注册成功!' };
        } catch (err) {
            return { status: Code.INVALID_GRANT, msg: err };
        }
    }
}

module.exports = UserController;
