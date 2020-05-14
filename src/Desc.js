import React from "react";
import {makeStyles} from "./App.js"


//  function makeStyles(p) {
//     return {
//       bigSpan: {
//         fontSize: `1.3em`,
//         color: `red`
//       },
//       funkySpan: {
//         color: 'crimson'
//       },
//       biggreen: {
//         color: 'green',
//         fontSize: '1.8rem'
  
//       }
  
//     }
//   }



export default function Desc(props){

	return(
        <div className="DescDiv">
    
    <p style={makeStyles().biggreen}>
         {props.desc} 
         </p>
         
    </div>
    )
    }
