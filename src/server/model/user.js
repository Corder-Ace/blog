const Sequelize = require('sequelize');
const db = require('../db');

class User extends Sequelize.Model {
    // constructor(sequelize) {
    //     super();
    //     this.init(sequelize);
    // }
    static init(sequelize) {
        return sequelize.define('users', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            username: { type: Sequelize.CHAR(64), allowNull: false },
            account: { type: Sequelize.CHAR(32), allowNull: false },
            password: { type: Sequelize.CHAR(32), allowNull: false },
            avatar: { type: Sequelize.CHAR(255) },
            email: {
                type: Sequelize.CHAR(255),
                allowNull: false,
                validate: {
                    isEmail: true,
                },
            },
            moment: { type: Sequelize.CHAR(255), defaultValue: Sequelize.NOW },
        }, {
            timestamps: false,
            freezeTableName: true,
            tableName: 'users',
        });
    }
}

const UserModel = User.init(db);
UserModel.sync({ force: false });
module.exports = UserModel;
