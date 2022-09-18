const router = require("express").Router();

import userRoutes from "./user-routes";
import postRoutes from "./post-routes";
const commentRoutes = "./comment-routes";

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

export default router;
