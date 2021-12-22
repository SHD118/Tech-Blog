const router = require("express").Router();
const { Comment } = require('../../models');
const auth = require("../../util/auth")


router.post('/', auth, async (req, res) => {
  console.log(req.body)
  newObj = {
    userId: req.session.userId,
    ...req.body
  }
    try {
        const newComment = await Comment.create(newObj)
        res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
});


module.exports = router;