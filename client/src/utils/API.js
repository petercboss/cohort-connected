import axios from 'axios';

export default {
    // Gets all news
    getNews: function() {
      return axios.get('/api/news');
    },
    getJobs: function() {
      return axios.get('/api/jobs');
    },
    // Create jobs
    createJobs: function (newJob) {
      return axios.post('/api/jobs', {
        summary: newJob.company,
        link: newJob.link,
        title: newJob.title
      });
    },
    // Gets all events
    getEvents: function() {
      return axios.get('/api/events');
    },
    // Loads forum
    getForum: function() {
      return axios.get('/api/forum');
    },
    createForum: function(forum) {
      return axios.post('/api/forum/', {
        title: forum.title,
        summary: forum.summary,
        _id: forum._id,
        author: forum.author });
    },
    getOneQuestion: function(question) {
      return axios.get(`/api/forum/${question}`);
    },
    addNewComment: function(item, _id, comment) {
      return axios.put(`/api/${item}/${_id}`, { 
        author: comment.author,
        body: comment.body
      });
    },
    upVote: function(questionId, commentId) {
      return axios.put(`/api/forum/${questionId}/${commentId}/upvote`);
    },
    downVote: function(questionId, commentId) {
      return axios.put(`/api/forum/${questionId}/${commentId}/downvote`);
    },
    thumbsUp: function(item, id) {
      return axios.put(`/api/${item}/${id}/up`);
    },
    thumbsDown: function(item, id) {
      return axios.put(`/api/${item}/${id}/down`);
    },
    favoriteItem: function(item, id, _id) {
      return axios.put(`/api/user/${id}/${item}/${_id}`);
    },
    removeFavorite: function(item, id, _id) {
      return axios.delete(`/api/user/${id}/${item}/${_id}`)
    },
    getFavorites: function(item, id) {
      return axios.get(`/api/user/${id}/${item}`);
    },
    // Gets all users
    getUsers: function () {
      return axios.get('/api/users');
    },
    getUser: function (userLinkedId) {
      return axios.get(`/api/userLinkedIn/${userLinkedId}`)
    },
    createUser: function (user) {
      return axios.post('/api/user', {
        linkedInId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        headline: user.headline,
        location: user.location,
        profilePicURL: user.profilePicURL,
        verified: true
      })
    },
    getMessages: function(messageId) {
      console.log(messageId);
      return axios.get(`/api/messages/${messageId}`)
    },
    createMessage: function(messageId) {
      return axios.post(`/api/messages/${messageId}`)
    },
    addMessage: function(message) {
      return axios.put(`/api/messages/${message.chatId}`, {
          senderId: message.senderId,
          senderName: message.senderName,
          sent: message.sent,
          chatMessage: message.chatMessage
      })
    },
    sendUnread: function(unreadMessage) {
      console.log(unreadMessage)
      return axios.put(`/api/user/unread/${unreadMessage.userToUpdate}`, {
        unreadFrom: unreadMessage.unreadFrom
      });
    },
    removeUnreadMessage: function (removeUnreadMessage) {
      console.log('from API ' + removeUnreadMessage.userToRemove)
      return axios.put(`api/user/removeUnread/${removeUnreadMessage.userToUpdate}`,{
        userToRemove: removeUnreadMessage.userToRemove
      })
    }
  };
