const router = require("express").Router();
const apiRoutes = require("./api");
const scrapeRoutes = require("./scrape")

router.use("/api", apiRoutes);
router.use("/scrape", apiRoutes);

module.exports = router;