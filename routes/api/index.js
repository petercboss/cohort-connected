(() => {
    const router = require('express').Router();
    const passport = require('passport');
    const cohortController = require('../../controllers/cohortController')

    router.get('/userLinkedIn/:id', cohortController.findUserbyLinkedIn);
    router.put(`/user/removeUnread/:id`,cohortController.findUserAndRemoveUnread);
    router.put(`/user/unread/:id`,cohortController.findUserAndUpdateUnread);
    router.get('/users/:id', cohortController.findUser);
    router.post('/user', cohortController.createUser);
    router.get('/users', cohortController.findUsers);

    router.route('/messages/:id')
      .get(cohortController.findChat)
      .post(cohortController.createChat)
      .put(cohortController.updateChat);

    router.route('/:collection')
      .get(cohortController.findCollection)
      .post(cohortController.createCollection);
      
    router.route('/:collection/:id')
      .get(cohortController.findOne)
      .put(cohortController.addNewComment);
     
    router.put('/:collection/:id/up', cohortController.thumbsUp);
    router.put('/:collection/:id/down', cohortController.thumbsDown);

    router.put('/forum/:questionId/:commentId/upvote', cohortController.upVote);
    router.put('/forum/:questionId/:commentId/downvote', cohortController.downVote);

    router.route('/user/:id/:favorite/:_id')
      .put(cohortController.createFavorite)
      .delete(cohortController.removeFavorite);
  
    router.get('/user/:id/:favorite/', cohortController.findFavorites);

    module.exports = router;
})();