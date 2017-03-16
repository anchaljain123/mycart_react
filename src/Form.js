/**
 * Created by anchal on 15/3/17.
 */
import React from 'react'

export default class Form extends React.Component{

  constructor(){
    super();
    this.state={
      text:" "
    }

   }

  render(){

    return(
      <div>
        <input type="text" value={this.state.text}  onChange= {(event)=> this.setState({text: event.target.value})} placeholder="Enter item-price"/>
        <h3>text :{this.state.text}</h3>
        <input type ="button" value="addItem" onClick={() =>this.props.addItem(this.state.text)} />
      </div>
    );

}









}
