import React from 'react'
import Style from '../assets/Numui.css';
function Rnum(props) {
    return (
        <div className="grid">
        <div className="cont" style={{background:props.colo}}>
            <h1>{props.tag}</h1>
        </div>
        </div>
    )
}
export default Rnum;