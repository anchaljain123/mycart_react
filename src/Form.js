/**
 * Created by anchal on 15/3/17.
 */
import React from 'react'
import Styles from './stylecss'

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
        <input type="text" value={this.state.text} style={Styles.form} onChange= {(event)=> this.setState({text: event.target.value})} placeholder="Enter item-price"/>

        <input type ="button" value="addItem" style={{height:'38px'}} onClick={() =>this.props.addItem(this.state.text)} />
      </div>
    );

}









}
