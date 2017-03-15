/**
 * Created by anchal on 2/3/17.
 */

import React from 'react'


export default class Navpanel extends React.Component {
  constructor(props) {
    super(props)


  }

  render(){

    return (

      <div className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        Value of Notification Counter :  {this.props.key1}
    </div>);
  }

}
