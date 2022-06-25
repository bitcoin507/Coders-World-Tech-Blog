const router = require('express').Router();
const userRoutes = require('./user-routes');
const postPostRoutes = require('./post-routes');

router.use('/user', userRoutes);
router.use('/post', postPostRoutes);

module.exports = router;