(() => {
    // LOGIC FOR GATHERING TECH EVENTS & MEETUPS
    const router = require("express").Router();    
    const db = require("../../models").default;
    const request = require("request");
    const cheerio = require("cheerio");



        // Meetup scraping route
        router.get("/meetup", (req, res) => {
            request("", (error, response, html) => {
                const $ = cheerio.load(html);
                const result = {};

                $("").each((i, element) => {
                    result.title = $(element)
                    result.date = $(element)
                    result.time = $(element)
                    result.location = $(element)
                    result.description = $(element)
                    result.link = "" + $(element)
                    result.attending = $(element)
                    db.Events.create(result).then(dbEvents => res.json(dbEvents)).catch(err => res.json(err));
                });
            });
        });

    module.exports = router
})();