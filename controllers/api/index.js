const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogPostRoutes = require('./blogPostRoutes');

router.use('/user-routes', userRoutes);
router.use('blogPostRoutes', blogPostRoutes);

module.exports = router;