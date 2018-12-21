const Sequelize = require('sequelize');
const { dataBase } = require('../config/index');

const db = new Sequelize(dataBase.DATABASE, dataBase.USERNAME, dataBase.PASSWORD, {
    host: dataBase.HOST,
    port: dataBase.PORT,
    dialect: 'mysql', // 连接器
});

module.exports = db;
