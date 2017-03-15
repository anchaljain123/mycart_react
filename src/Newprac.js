/**
 * Created by anchal on 15/3/17.
 */

import React from 'react'

export default class Newprac extends React.Component {
  constructor(){
    super()
  }




  render(){

    return(<div style={this.props.style}>
      <div>  {this.props.temperature} <!--unwanted array is made when just calling list values-->
      <h3>{"List VALUES : "+this.props.item1}</h3>
      </div>

    </div>);

  }
}
