import React, { useState, useEffect } from 'react'
import Header from "./Header.js";
import Desc from "./Desc.js";
import makeStyles from "./App.js"


export default function Post(props) {
// console.log(props)
    return (
        <div className="post">
            <Header title={props.title} date={props.date} />
            <img src={props.url} className="nasaImg" alt={props.title} />
           
           <Desc desc = {props.desc} ></Desc>
            
        </div>
    )
}