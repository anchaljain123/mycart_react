/**
 * Created by anchal on 3/3/17.
 */

import React from 'react'


export default class Body extends React.Component {
  constructor() {
    super()
  }


  render(){


    return(<div>
      <input type="button" name="Click_To_Increement " value="Click" onClick={this.props.key2}/>
      <p>Body To publish Notifications </p>
    </div>);

  }

}
