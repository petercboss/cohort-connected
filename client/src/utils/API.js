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
    // Gets all users
    getUsers: function () {
      return axios.get('/api/users');
    },
    getUser: function (userLinkedId) {
      return axios.get(`/api/user/${userLinkedId}`)
      
    },
    // Create new user
    createUser: function (user) {
      // console.log(user)
      return axios.post('/api/user', {
        linkedInId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        headline: user.headline,
        location: user.location,
        profilePicURL: user.profilePicURL,
        verified: true
      })
    }
  };
