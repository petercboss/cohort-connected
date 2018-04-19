import React from "react";

import './eventsList.css'


export const EventItem = props => (
<li className="list-group-item" id={props.id}>
    <h2>{props.title}</h2>
    <h3 className="text-center"> {props.date} - {props.time} </h3>  
    <p>{props.organizer}</p>
</li> 
);