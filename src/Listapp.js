/**
 * Created by anchal on 15/3/17.
 */
import React from 'react'
import Styles from './stylecss'

export default class Listapp extends React.Component{

  constructor(){
    super();
    this.state={
      text:" "
    }

  }

  addValue(event){
    console.log("P")

    let val=event.target.value;
    this.setState({text: event.target.value}, function(){this.props.addItem(this.state.text)});
    console.log("PP", val, event.target)


  }

  render(){

    return(
      <div>
        <input type="text"  onBlur= {this.addValue.bind(this)} placeholder="Enter item-price"/>
        {this.state.text}
      </div>
    );

  }









}
