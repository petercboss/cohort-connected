(() => {
    const router = require('express').Router();
    const passport = require('passport');
    const cohortController = require('../../controllers/cohortController')

    router.get('/news', cohortController.findNews);
    router.get('/events', cohortController.findEvents);
    router.get('/user/:id', cohortController.findUser);
    router.post('/user', cohortController.createUser);

    router.route('user/:id/:favorite')
        .get(cohortController.findFavorites)
        .post(cohortController.createFavorite)
        .delete(cohortController.removeFavorite);

    module.exports = router;
})();