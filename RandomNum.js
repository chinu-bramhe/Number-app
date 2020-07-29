import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rnum from './Rnum.js'
class RandomNum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usernum:null,
            diff:null
        }
    }
    onchangehandler=(e)=>{
       this.setState({
            usernum:e.target.value.length > 3
             ? e.target.value
             : ""
       });
    };
    onclickHandler = (e) => {
        var min=1
        var max=100
        
        var randomnum1=Math.floor(min+(Math.random()*(max-min)))
        this.setState({
           
            diff:randomnum1-this.state.usernum
        });
        console.log({randomnum1})
        e.preventDefault();
    }
    render() {
        
            let difff=this.state.diff
            var ans=null
            var num=null
            var color=null
            if(difff===null)
            {
                ans=""
                num=0
                color="white"

            }
            else if(difff === 0)
            {
                ans="Correct"
                num=1
                color="Cyan"
            }
            else if(difff>0 && difff<10)
            {
                ans="Hot"
                num=2
                color="Red"
            }
            else if(difff>10 && difff<30)
            {
                ans="Warm"
                num=3
                color="Yellow"
            }
            else 
            {
                ans="Cold"
                num=4
                color="Blue"
            }
        
        return (
            <div className="card">
            <h1>Check the Number</h1>
            <div style={{borderBlock:"black",width:"300px",height:"50px",alignSelf:"center"}}>
                <label>Number</label>
                <input type="text" onChange={this.onchangehandler} min="1" max="100" placeholder="Enter Number here" />
            </div>
           <div style={{borderBlock:"black",width:"300px",height:"50px",alignSelf:"center"}}>
                <Button  type="submit" onClick={this.onclickHandler}>submit</Button>
           </div> 
            <Rnum name={this.state.diff} tag={ans} num={num} colo={color} />       
            </div>
        )
    }
}
export default RandomNum
