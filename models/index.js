const User = require("./User");
const Post = require("./Post");
const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;

module.exports = { User, Post };
