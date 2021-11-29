const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const userRoutes = require('./postRoutes');

router.use('/users', userRoutes);
// router.use('/post', postRoutes);

module.exports = router;