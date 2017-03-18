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
      name: "",
      date: "",
      status: "Pending",

    }

  }

  render() {

    return (<div className="row">
      <div className="col-xs-3">
        <input type="text" value={this.state.name} className="form-control"
               placeholder="Enter Todo Name " onChange={(event) => this.setState({name: event.target.value})}
              />
        </div>
        <div className="col-xs-3">
        <input type="date" value={this.state.date} className="form-control" id="date"
               placeholder="Enter dateformat dd/mm/yy"
               onChange={(event) => this.setState({date: event.target.value})}
               />
        </div>
        <div className="col-xs-3">
        <input type="button" className="btn btn-success" value="Save" onClick={() => {

          this.props.addItem(this.state)
        }}/>
        </div>
      </div>

    );

  }









}
