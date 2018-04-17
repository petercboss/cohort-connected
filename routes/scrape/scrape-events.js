(() => {
    // LOGIC FOR GATHERING TECH EVENTS & MEETUPS
    const router = require('express').Router();    
    const db = require('../../models');
    const axios = require('axios');
    const cheerio = require('cheerio');

    // Built in Chicago scraping route
    router.get('/builtin', (req, res) => {
        axios.get('https://www.builtinchicago.org/events').then(response => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html);
                const result = {};
                $('.views-row').each((i, element) => {
                    if (i > 21) {
                        result.title = $(element).children('.container').children('.center').children('.title').children('a').text();
                        result.date = $(element).children('.container').children('.left').children('.date').html().toString().split('<br>')[1].split('<')[0] + ' ' + new Date().getFullYear();
                        result.time = $(element).children('.container').children('.right').children('.time').text();
                        result.organizer = $(element).children('.container').children('.center').children('.organized-by').text();
                        result.link = 'https://www.builtinchicago.org' + $(element).children('.container').children('.center').children('.title').children('a').attr('href');
                        result.categories = $(element).children('.container').children('.right').children('.category').text().split(',');
                        db.Events.create(result).then(dbEvents => res.json(dbEvents)).catch(err => res.json(err));
                    }
                });
            }
        });
    });

    module.exports = router
})();