const router = require("express").Router();
const apiRoutes = require("./api");
const scrapeRoutes = require("./scrape");


router.use("/api", apiRoutes);
router.use("/scrape", scrapeRoutes);

module.exports = router;