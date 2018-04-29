(() => {
    const router = require('express').Router();
    const passport = require('passport');
    const cohortController = require('../../controllers/cohortController')

    router.get('/news', cohortController.findNews);
    router.get('/events', cohortController.findEvents);
    router.get('/users/:id', cohortController.findUser);
    router.post('/user', cohortController.createUser);
    router.get('/users', cohortController.findUsers);
    router.get('/messages/:id', cohortController.findChat);
    router.post('/messages/:id', cohortController.createChat);
    router.put('/messages/:id', cohortController.updateChat);

    router.route('/user/:id/:favorite')
      .get(cohortController.findFavorites)
      .post(cohortController.createFavorite)
      .delete(cohortController.removeFavorite);

    router.get('/user/:id', cohortController.findUserbyLinkedIn);
    module.exports = router;
})();