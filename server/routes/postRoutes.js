const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
  res.json("Post route");
});

module.exports = router;
