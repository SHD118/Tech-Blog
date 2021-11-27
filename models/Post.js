const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // date_created: {
        //     // Fill in later
        // },
        // post_comments: {
        //     // Fill in later
        // },
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
        
       
    }
);

module.exports = Post;
