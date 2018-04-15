(() => {
    // LOGIC FOR GATHERING TECH NEWS ARTICLES
    const db = require("../models");
    const request = require("request");
    const cheerio = require("cheerio");

    module.exports = app => {

        // TechCrunch scraping route
        app.get("/api/news/scrape/techcrunch", (req, res) => {
            request("https://techcrunch.com/", (error, response, html) => {
                const $ = cheerio.load(html);
                const result = {};
                $(".post-block").each((i, element) => {
                    result.date = $(element).children(".post-block__header").children(".post-block__meta").children(".river-byline").children(".river-byline__time").attr("datetime");
                    result.title = $(element).children(".post-block__header").children(".post-block__title").children("a").text().trim();
                    result.author = $(element).children(".post-block__header").children(".post-block__meta").children(".river-byline").children(".river-byline__authors").children("a").text().trim();
                    result.summary = $(element).children(".post-block__content").children("p").text().trim();
                    result.link = "https://techcrunch.com/" + $(element).children(".post-block__header").children("h2").children("a").attr("href");
                    result.photo = $(element).children(".post-block__footer").children(".post-block__media").children("img").attr("src");
                    db.News.create(result).then(dbNews => res.json(dbNews)).catch(err => res.json(err));
                });
            });
        });

        // Reuters scraping route
        app.get("/api/news/scrape/reuters", (req, res) => {
            request("https://www.reuters.com/news/archive/technologyNews/", (error, response, html) => {
                const $ = cheerio.load(html);
                const result = {};
                $(".story").each(function (i, element) {
                    result.title = $(element).children(".story-content").children("a").children(".story-title").text().trim();
                    result.link = "https://www.reuters.com/" + $(element).children(".story-content").children("a").attr("href");
                    result.photo = $(element).children(".story-photo").children("a").children("img").attr("org-src");
                    result.description = $(element).children(".story-content").children("p").text();
                    db.News.create(result).then(dbNews => res.json(dbNews)).catch(err => res.json(err));
                });
            });
        });

    } // end of module.exports

})();