// Require all the model files
// This file is where you write your relationships between the models

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User has many Post
User.hasMany(Post, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE',
})

// Post belongs to user
Post.belongsTo(User, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE',
})
// Post can have many comments

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
})

// comment can belong to one post and one user
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
})

module.exports = { User, Post, Comment };