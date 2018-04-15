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
  };