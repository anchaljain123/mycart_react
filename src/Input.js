/**
 * Created by anchal on 17/3/17.
 */
/**
 * Created by anchal on 15/3/17.
 */
import React from 'react'
import Styles from './stylecss'

export default class Input extends React.Component {

  constructor() {
    super();
    this.state = {
      name: " ",
      date: " ",
      status: "pending",

    }

  }

  render() {

    return (
      <div>
        <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}
               placeholder="Enter Todo Name "/>
        <input type="text" value={this.state.date} onChange={(event) => this.setState({date: event.target.value})}
               placeholder="Enter dateformat dd/mm/yy"/>

        <input type="button" value="Save" onClick={() => {

          this.props.addItem(this.state)
        }}/>
      </div>
    );

  }









}
