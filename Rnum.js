import React from 'react'
import '../assets/Numui.css';
function Rnum(props) {
    return (   
        <div className="grid">
            <div >
            {props.tag === "Correct" && (
                <h1>{props.tag}</h1>
            )}
            </div> 
            <div>
            {props.tag === "Hot" && (
                <h1>{props.tag}</h1>
            )}
            </div>
            <div>
            {props.tag === "Warm" && (
                <h1>{props.tag}</h1>
            )}
            </div>
            <div>
            {props.tag === "Cold" && (
                <h1>{props.tag}</h1>
            )}
            </div>
        </div>
    )
}
export default Rnum;