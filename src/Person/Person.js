import React, { Component } from 'react';
import './Person.css';

const person = (props) => { 
    return (
    <div>
        <p onclick={props.click}> My  {props.name} and {props.age}</p>
        <p>{props.children} </p>
        <input type ="text" onChange ={props.changed} value={props.name} />
    </div>
    )
};

export default person;