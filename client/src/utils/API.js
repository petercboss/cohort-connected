import axios from "axios";

export default {
    // Gets all news
    getNews: function() {
      return axios.get("/api/main/news");
    },
    // Gets all jobs
    getJobs: function() {
      return axios.get("/api/main/jobs");
    },
    // Gets all events
    getEvents: function() {
      return axios.get("/api/main/events");
    },
  // Gets all events
    getUser: function () {
      return axios.get("/api/User");
    },
    createUser: function (user) {
      return axios.post("/api/User", {user: user})
      
    }
  };