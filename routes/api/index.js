(()=>{
    const router = require('express').Router();
    const cohortController = require('../../controllers/cohortController')
    
    router.get('/news', cohortController.findNews);
    router.get('/events', cohortController.findEvents);
    router.get('/user/:id', cohortController.findUser);
    router.post('/user', cohortController.createUser);

    module.exports = router;
})();