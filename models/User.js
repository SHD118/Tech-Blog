const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        passowrd: {
            type: DataTypes.STRING,
            allowNull: false,
            // need to figure out how to use bcrpt for hashing passwords
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
        timestamps: false
    }
);

module.exports = User;
