/**
 * Created by anchal on 3/3/17.
 */

import React  from    'react'
import Body   from    './Body1'
import Footer from  './Footer1'
import Nav from './Navpanel1'

export default class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      notification_counter:0

    }
    this.increaseCounter=this.increaseCounter.bind(this);
  }

  increaseCounter(){

    this.setState(

        setTimeout(function () {notification_counter:this.state.notification_counter+1   }),1000);

    }


  render() {

    return (<div className="header">

      This is Header
      <Body key2={this.increaseCounter}/> <!-- callback -->
      <Nav key1={this.state.notification_counter}/>
      <Footer/>
    </div>);
  }

}
