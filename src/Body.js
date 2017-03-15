/**
 * Created by anchal on 2/3/17.
 */

import React from 'react'
import Nav from './Navpanel'
import style from './styling.css'

export default class Body extends React.Component {
  constructor() {
    super()


    this.state = {
      notification_counter:0

    }
    // this.increaseCounter=this.increaseCounter.bind(this);
  }

  increaseCounter(){
    //
    // setTimeout(()=>this.setState({
    //
    //   notification_counter:this.state.notification_counter+1
    // }),2000)


    this.setState({notification_counter:this.state.notification_counter+1});
  }

  render(){

    var styling={
      color:'blue'
    };

    return(<div className="bodyclss">
      <input type="button" value="Click_To_Increement " name="Click" onClick={this.increaseCounter.bind(this)}/>
      <p style={styling}>Body To publish Notifications </p>
      <Nav key1={this.state.notification_counter}/>
    </div>);

  }

}
