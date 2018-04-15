const router = require("express").Router();
const apiRoutes = require("./api");


router.use("/api", apiRoutes);
router.use("/scrape/news", require("./scrape/scrape-news"));
router.use("/scrape/jobs", require("./scrape/scrape-jobs"));
router.use("/scrape/events", require("./scrape/scrape-events"));

module.exports = router;