const router = require("express").Router();
const scrapeNews = require("./scrape-news");
const scrapeJobs = require("./scrape-jobs");
const scrapeEvents = require("./scrape-events");

// utilize routes
router.use("/news", scrapeNews);
router.use("/jobs", scrapeJobs);
router.use("/events", scrapeEvents);


module.exports = router;