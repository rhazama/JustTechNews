const router = require("express").Router();

const apiRoutes = require("./api").default;

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
