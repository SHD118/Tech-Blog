const router = require("express").Router();
const { User, Post, Comment } = require('../models');

router.get("/", (req, res) => {
    res.render("login")
});


// Posts
// route to get all Post by username param
router.get('/:user', async (req, res) => {
    try {
        // We find all post assocaited with this user from params using the param to search by username
        const postData = await Post.User(req.params.user)
        // if this user !exist than display error and return
        if (!postData) {
            res.status(404).json({ message: 'No user with this username!' });
            return;
        }
        // This returns a sequlize post object back and assigned it to post constant 
        const post = postData.get({ plain: true });
          // We render the template, 'post', passing in post, a new array of serialized objects.
        res.render('post', post);
    }
    catch (err) {
        res.status(500).json(err);
    };  
    
});
    module.exports = router;