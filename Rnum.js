import React from 'react'
import Style from '../assets/Numui.css';
function Rnum(props) {
    return (
        
        <div className="grid">
        {props.tag === "Cold" && (
            <div className="cont" style={{background:props.colo}}>
            <h1>{props.tag}</h1>
        </div>
          )}
          {props.tag === "Correct" && (
            <div className="cont" style={{background:props.colo}}>
            <h1>{props.tag}</h1>
        </div>
          )}
          {props.tag === "Warm" && (
            <div className="cont" style={{background:props.colo}}>
            <h1>{props.tag}</h1>
        </div>
          )}{props.tag === "Hot" && (
            <div className="cont" style={{background:props.colo}}>
            <h1>{props.tag}</h1>
        </div>
          )}
        
        </div>
    )
}
export default Rnum;