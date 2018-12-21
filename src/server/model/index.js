const Sequelize = require('sequelize');
const db = require('../db');

class ModelBase extends Sequelize.Model {
    constructor(sequelize = db, options = {}, tableName) {
        super();
        this.db = this.init(sequelize, options, tableName);
    }

     init = (sequelize = db, options, tableName) => super.init(options, {
         tableName,
         sequelize,
     });

    findOne = async (where) => {
        const isSurvive = await this.db.findOne({ where });
        if (isSurvive) return false;
        return true;
    }
}
