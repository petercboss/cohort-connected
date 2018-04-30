import axios from 'axios';

export default {
    // Gets all news
    getNews: function() {
      return axios.get('/api/news');
    },
    // Gets all jobs
    getJobs: function() {
      return axios.get('/api/jobs');
    },
    // Gets all events
    getEvents: function() {
      return axios.get('/api/events');
    },
    // Loads forum
    getForum: function() {
      return axios.get('/api/forum');
    },
    // Gets all users
    getUsers: function () {
      return axios.get('/api/users');
    },
    getUser: function (userLinkedId) {
      console.log(userLinkedId)
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
      console.log(message);
      return axios.put(`/api/messages/${message.chatId}`, {
          senderId: message.senderId,
          senderName: message.senderName,
          sent: message.sent,
          chatMessage: message.chatMessage
        })
    }
  };
