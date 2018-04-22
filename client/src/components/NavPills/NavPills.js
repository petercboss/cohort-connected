import React from "react";
import './NavPills.css';

const NavPills = props => (
  <ul className="nav nav-pills nav-fill">
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("News")} href='#.'
         className={props.currentPage === "News" ? "nav-link active" : "nav-link"}>NEWS
      </a>
    </li>
    <li className="nav-item left-border">
      <a onClick={() => props.handlePageChange("Events")} href='#.'
         className={props.currentPage === "Events" ? "nav-link active" : "nav-link"}>EVENTS
      </a>
    </li>
    <li className="nav-item left-border">
      <a onClick={() => props.handlePageChange("Jobs")} href='#.'
         className={props.currentPage === "Jobs" ? "nav-link active" : "nav-link"}>JOBS
      </a>
    </li>
  </ul>
);

export default NavPills;