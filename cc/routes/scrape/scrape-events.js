(() => {
    // LOGIC FOR GATHERING TECH EVENTS & MEETUPS
    const db = require("../../models");
    const request = require("request");
    const cheerio = require("cheerio");

    module.exports = app => {

        // Meetup scraping route
        app.get("/meetup", (req, res) => {
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

    } // end of module.exports

})();