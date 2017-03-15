/**
 * Created by anchal on 2/3/17.
 */

import React from 'react'
import Styles from './stylecss'

export default class Footer extends React.Component {
  constructor() {
    super()
  }


  render(){
    let value =this.props.temperature1;

    return (<div style={Styles.temperature1}>
      <p>This is footer{value+1} </p>
      <h4 className="Styles" style={{color:'blue'}}>The End </h4>
    </div>);
  }

}

