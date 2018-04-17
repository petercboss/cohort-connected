(() => {
    // LOGIC FOR GATHERING JOB POSTINGS
    const router = require('express').Router();        
    const db = require('../../models');
    const axios = require('axios');
    const cheerio = require('cheerio');

    // TBD scraping route
    router.get('', (req, res) => {
        axios.get('').then(response => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html);
                const result = {};
                $('').each((i, element) => {                   
                    //result.postingDate = $(element).children('');
                    //result.title = $(element).children('');
                    //result.company = $(element).children('');
                    //result.summary = $(element).children('');
                    //result.link = $(element).children('');
                    console.log(result)
                    //db.Jobs.create(result).then(dbJobs => res.json(dbJobs)).catch(err => res.json(err));
                });
            }
        });
    });

    module.exports = router

})();