var orm = require("../../config/models");
var Sequelize = orm.Sequelize();

module.exports = {
    "model": {
        "id": {
            "type": Sequelize.INTEGER,
            "primaryKey": true,
            "autoIncrement": true
        }
    },

    "relations": {
        "belongsTo": {
            "model": "person",
            "options": {
                "foreignKeyConstraint": true
            }
        },
        "hasOne": {
            "model": "administrator",
            "options": {
                "foreignKeyConstraint": true
            }
        },
        "hasMany": {
            "model": "teaching",
            "options": {
                "foreignKeyConstraint": true
            }
        }
    },

    "configuration": {
        "freezeTableName": true,
        "underscored": true,
        "paranoid": true
    }
};