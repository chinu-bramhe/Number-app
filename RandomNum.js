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
            usernum:e.target.value
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
            if(difff===null)
            {
                ans=""
            }
            else if(difff === 0)
            {
                ans="Correct"
            }
            else if(difff>0 && difff<10)
            {
                ans="Hot"
            }
            else if(difff>10 && difff<30)
            {
                ans="Warm"
            }
            else 
            {
                ans="Cold"
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
            <Rnum name={this.state.diff} tag={ans} />       
            </div>
        )
    }
}
export default RandomNum
