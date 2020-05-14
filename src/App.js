import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Post from "./WorkFile";
import styled from 'styled-components'
import bg from './bg.gif'
//STYLED COMPONENTS\\

const StyledApp = styled.div `
font-size:1.9rem;
text-align: center;
color: white;

`


//style function\\
export function makeStyles() {
  return {
    bigSpan: {
      fontSize: `1.3em`,
      color: `red`
    },
    funkySpan: {
      color: 'crimson'
    },
    biggreen: {
      color: 'purple',
     fontWeight: 'bold',
      fontSize: '1.4rem'

    },
    bgImage: {
      backgroundImage: `url(${bg})`

    }

  }
}




function App() {

// ``````````````Workspace``````````````

const [nasaData,setNasaData] = useState({});
useEffect( () => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=pWpgfjxi1nYC0saBotYn7f0MzZZ0eF70Eyxp9VHW")
  .then(response => {
    // displaying data from api for inspection
    console.log(response.data)
    setNasaData(response.data)
    console.log(`${nasaData} is the data`);
  })
  .catch(err => {
    console.log('error encountered');
  });

},[]);

// ``````````````Workspace``````````````

  return (
    <div style = {makeStyles().bgImage} > 
     
    <div className="App">
      <StyledApp>
      <p>
        NASA API: Photo of the day
        <p>
        by Francisco
        </p>
        <span role="img" aria-label='go!'>🚀</span>
      </p>
      </StyledApp>

      <Post title = {nasaData.title} date = {nasaData.date} url = {nasaData.url} desc = {nasaData.explanation} />
      
    </div>
    <p className = 'App-logo' style = {{color:'white'}}>
                made by Francisco
            </p>
    </div>
  );
}
export default App;