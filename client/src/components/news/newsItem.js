import React from "react";

// external stylesheet
import './newsList.css'

export const NewsItem = props => (
<li className="list-group-item" id={props.id}>
    <h3>{props.title}</h3>
    <img src={props.photo} className="imgCenter" alt=""/>
    <h3 className="text-center"> By:{props.author} </h3>  
    <p>{props.summary}...</p>
    <a href={props.link}> Read Full Story Here </a> 
</li> 
);