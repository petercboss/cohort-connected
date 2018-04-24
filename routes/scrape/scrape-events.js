(() => {
    // LOGIC FOR GATHERING TECH EVENTS & MEETUPS
    const router = require('express').Router();    
    const db = require('../../models');
    const axios = require('axios');
    const cheerio = require('cheerio');
    const moment = require('moment');

    // Built in Chicago scraping route
    router.get('/builtin/:page', (req, res) => {
        axios.get(`https://www.builtinchicago.org/events?page=${req.params.page}`).then(response => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html);
                const result = {};
                $('.views-row').each((i, element) => {
                    if (i > 21) {
                        // grabbing html values for new event
                        result.title = $(element).children('.container').children('.center').children('.title').children('a').text();
                        result.organizer = $(element).children('.container').children('.center').children('.organized-by').text();
                        result.link = 'https://www.builtinchicago.org' + $(element).children('.container').children('.center').children('.title').children('a').attr('href');
                        result.categories = $(element).children('.container').children('.right').children('.category').text().split(',');

                        // formatting the date and time before adding to database
                        date = $(element).children('.container').children('.left').children('.date').html().toString().split('<br>')[1].split('<')[0] + ' ' + new Date().getFullYear();
                        time = $(element).children('.container').children('.right').children('.time').text().split('-')[0];
                        result.date = moment(`${date} ${time}-05:00`); //GMT
                        result.day = moment(result.date).format('YYYY-MM-DD'); //sortable date
                        result.time = moment(result.date).format('H:mm'); //sortable time

                        // adding new event to database
                        db.Events.create(result).then(dbEvents => res.json(dbEvents)).catch(err => res.json(err));
                    }
                });
            }
        });
    });

    module.exports = router
})();