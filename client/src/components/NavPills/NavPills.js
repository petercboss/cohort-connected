import React from "react";
import './NavPills.css';

const NavPills = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("News")}
        className={
          props.currentPage === "News" ? "nav-link active" : "nav-link"
        }
      >
        News
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Jobs")}
        className={
          props.currentPage === "Jobs" ? "nav-link active" : "nav-link"
        }
      >
        Jobs
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Events")}
        className={
          props.currentPage === "Events" ? "nav-link active" : "nav-link"
        }
      >
        Events
      </a>
    </li>
  </ul>
);

export default NavPills;