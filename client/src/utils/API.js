import axios from "axios";

export default {
    // Gets all news
    getNews: function() {
      return axios.get("http://localhost:3001/api/main/news");
    },
    // Gets all jobs
    getJobs: function() {
      return axios.get("http://localhost:3001/api/main/jobs");
    },
    // Gets all events
    getEvents: function() {
      return axios.get("http://localhost:3001/api/main/events");
    },
  };