(() => {
    const router = require('express').Router();
    const passport = require('passport');
    const cohortController = require('../../controllers/cohortController')

    router.get('/users/:id', cohortController.findUser);
    router.post('/user', cohortController.createUser);
    router.get('/users', cohortController.findUsers);

    router.route('/messages/:id')
      .get(cohortController.findChat)
      .post(cohortController.createChat)
      .put(cohortController.updateChat);

    router.get('/:collection', cohortController.findCollection);
    router.route('/:collection/:id')
      .get(cohortController.find)
      .put(cohortController.thumb);

    router.route('/user/:id/:favorite')
      .get(cohortController.findFavorites)
      .post(cohortController.createFavorite)
      .delete(cohortController.removeFavorite);

    router.get('/user/:id', cohortController.findUserbyLinkedIn);

    module.exports = router;
})();