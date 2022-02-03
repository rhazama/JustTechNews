const User = require("./User");
const Post = require("./Post");
const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;

Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Post };
