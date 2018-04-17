(() => {
    // LOGIC FOR GATHERING TECH NEWS ARTICLES
    const router = require('express').Router();        
    const db = require('../../models');
    const axios = require('axios');
    const cheerio = require('cheerio');

    // TechCrunch scraping route
    router.get('/techcrunch', (req, res) => {
        axios.get('https://techcrunch.com/').then(response => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html);
                const result = {};
                $('.post-block').each((i, element) => {
                    result.date = $(element).children('.post-block__header').children('.post-block__meta').children('.river-byline').children('.river-byline__time').attr('datetime');
                    result.title = $(element).children('.post-block__header').children('.post-block__title').children('a').text().trim();
                    result.author = $(element).children('.post-block__header').children('.post-block__meta').children('.river-byline').children('.river-byline__authors').children('a').text().trim();
                    result.summary = $(element).children('.post-block__content').text().trim();
                    result.link = $(element).children('.post-block__header').children('h2').children('a').attr('href');
                    result.photo = $(element).children('.post-block__footer').children('.post-block__media').children('a').children('img').attr('src').split('?')[0];
                    db.News.create(result).then(dbNews => res.json(dbNews)).catch(err => res.json(err));
                });
            }
        }).catch(err => res.json(err));
    });

    module.exports = router

})();