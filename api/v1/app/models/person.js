var orm = require("../../config/models");
var Sequelize = orm.Sequelize();

module.exports = {
    "model": {
        "id": {
            "type": Sequelize.INTEGER,
            "primaryKey": true,
            "autoIncrement": true
        },

        "first_name": {
            "type": Sequelize.STRING,
            "allowNull": false,
            "validate": {
                "notNull": true,
                "notEmpty": true,
                "len": [2, 20]
            }
        },

        "last_name": {
            "type": Sequelize.STRING,
            "allowNull": false,
            "validate": {
                "notNull": true,
                "notEmpty": true,
                "len": [2, 20]
            }
        }
    },

    "relations": {
        "hasOne": {
            "model": "teacher",
            "options": {
                "foreignKeyConstraint": true
            }
        }
    },

    "configuration": {
        "freezeTableName": true,
        "underscored": true,
        "paranoid": true,

        "classMethods": {
            "structure": function () {
                return {
                    "first_name": {
                        "type": "string",
                        "options": {
                            "required": "required",
                            "min": 2,
                            "max": 20
                        }
                    },

                    "last_name": {
                        "type": "string",
                        "options": {
                            "required": "required",
                            "min": 2,
                            "max": 20
                        }
                    }
                };
            }
        }
    }
};