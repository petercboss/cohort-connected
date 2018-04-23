(() => {
    // LOGIC FOR GATHERING TECH EVENTS & MEETUPS
    const router = require('express').Router();    
    const db = require('../../models');
    const axios = require('axios');
    const cheerio = require('cheerio');
    const moment = require('moment');

    // Built in Chicago scraping route
    router.get('/builtin', (req, res) => {
        axios.get('https://www.builtinchicago.org/events').then(response => {
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

                        // formatting the date and start time to GMT before adding to database
                        date = $(element).children('.container').children('.left').children('.date').html().toString().split('<br>')[1].split('<')[0] + ' ' + new Date().getFullYear();
                        time = $(element).children('.container').children('.right').children('.time').text().split('-')[0];
                        result.date = moment(`${date} ${time}-05:00`);

                        // adding new event to database
                        db.Events.create(result).then(dbEvents => res.json(dbEvents)).catch(err => res.json(err));
                    }
                });
            }
        });
    });

    router.get('/builtin/page2', (req, res) => {
        axios.get('https://www.builtinchicago.org/events?page=1').then(response => {
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

                        // formatting the date and start time to GMT before adding to database
                        date = $(element).children('.container').children('.left').children('.date').html().toString().split('<br>')[1].split('<')[0] + ' ' + new Date().getFullYear();
                        time = $(element).children('.container').children('.right').children('.time').text().split('-')[0];
                        result.date = moment(`${date} ${time}-05:00`);

                        // adding new event to database
                        db.Events.create(result).then(dbEvents => res.json(dbEvents)).catch(err => res.json(err));
                    }
                });
            }
        });
    });

    router.get('/builtin/page3', (req, res) => {
        axios.get('https://www.builtinchicago.org/events?page=2').then(response => {
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

                        // formatting the date and start time to GMT before adding to database
                        date = $(element).children('.container').children('.left').children('.date').html().toString().split('<br>')[1].split('<')[0] + ' ' + new Date().getFullYear();
                        time = $(element).children('.container').children('.right').children('.time').text().split('-')[0];
                        result.date = moment(`${date} ${time}-05:00`);

                        // adding new event to database
                        db.Events.create(result).then(dbEvents => res.json(dbEvents)).catch(err => res.json(err));
                    }
                });
            }
        });
    });

    router.get('/builtin/page4', (req, res) => {
        axios.get('https://www.builtinchicago.org/events?page=3').then(response => {
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

                        // formatting the date and start time to GMT before adding to database
                        date = $(element).children('.container').children('.left').children('.date').html().toString().split('<br>')[1].split('<')[0] + ' ' + new Date().getFullYear();
                        time = $(element).children('.container').children('.right').children('.time').text().split('-')[0];
                        result.date = moment(`${date} ${time}-05:00`);

                        // adding new event to database
                        db.Events.create(result).then(dbEvents => res.json(dbEvents)).catch(err => res.json(err));
                    }
                });
            }
        });
    });

    router.get('/builtin/page5', (req, res) => {
        axios.get('https://www.builtinchicago.org/events?page=4').then(response => {
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

                        // formatting the date and start time to GMT before adding to database
                        date = $(element).children('.container').children('.left').children('.date').html().toString().split('<br>')[1].split('<')[0] + ' ' + new Date().getFullYear();
                        time = $(element).children('.container').children('.right').children('.time').text().split('-')[0];
                        result.date = moment(`${date} ${time}-05:00`);

                        // adding new event to database
                        db.Events.create(result).then(dbEvents => res.json(dbEvents)).catch(err => res.json(err));
                    }
                });
            }
        });
    });

    router.get('/builtin/page6', (req, res) => {
        axios.get('https://www.builtinchicago.org/events?page=5').then(response => {
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

                        // formatting the date and start time to GMT before adding to database
                        date = $(element).children('.container').children('.left').children('.date').html().toString().split('<br>')[1].split('<')[0] + ' ' + new Date().getFullYear();
                        time = $(element).children('.container').children('.right').children('.time').text().split('-')[0];
                        result.date = moment(`${date} ${time}-05:00`);

                        // adding new event to database
                        db.Events.create(result).then(dbEvents => res.json(dbEvents)).catch(err => res.json(err));
                    }
                });
            }
        });
    });

    router.get('/builtin/page7', (req, res) => {
        axios.get('https://www.builtinchicago.org/events?page=6').then(response => {
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

                        // formatting the date and start time to GMT before adding to database
                        date = $(element).children('.container').children('.left').children('.date').html().toString().split('<br>')[1].split('<')[0] + ' ' + new Date().getFullYear();
                        time = $(element).children('.container').children('.right').children('.time').text().split('-')[0];
                        result.date = moment(`${date} ${time}-05:00`);

                        // adding new event to database
                        db.Events.create(result).then(dbEvents => res.json(dbEvents)).catch(err => res.json(err));
                    }
                });
            }
        });
    });

    module.exports = router
})();