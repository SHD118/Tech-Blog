const { Comment } = require('../models');

const seedComment = [
    {
        user_id: 1,
        comment_content: "This article is trash please change career paths thank your for your time.. ",
        post_id: 2

    },
    {
        user_id: 2,
        comment_content: "This article is trash please change career paths thank your for your time.. ",
        post_id: 3
    },
    {
        user_id: 3,
        comment_content: "This article is trash please change career paths thank your for your time.. ",
        post_id: 1
    }
];

const commentData = () => Comment.bulkCreate(seedComment);

module.exports = commentData;