/**
 * Created by anchal on 17/3/17.
 */
/**
 * Created by anchal on 15/3/17.
 */

import React from 'react'
import Stylecss from './stylecss'

class Tableitems extends React.Component{
  constructor(){
    super();

    this.state = {
      text1: "",
      text2: "",
      isChecked:false,
    }
  }


  render(){

    return(
      <div class="table-responsive" style={{'display':'inline'}}>
        {this.props.items.map((item, i) => {

          return (

                <div key={i} className="list-group">
                  {item.show?
                  <div>
                    <input
                      type="text"
                      value={this.state.text1}
                      placeholder="Enter Todo Name"
                      onChange={(event) => {
                        this.setState({text1: event.target.value});

                      }}

                    />


                    <input
                      type="date"
                      value={this.state.text2}
                      placeholder="Enter Todo Date"
                      onChange={(event) => {
                        this.setState({text2: event.target.value});

                      }}

                    />
                    <p >{item.status}</p>
                    <input
                      type="button"
                      value="Save Updates" className=" btn btn-success"
                      onClick={(event) => {

                        this.props.edititem(this.state,i);
                       // this.props.updateshow(i);
                      }}

                    />
                  </div>

              :<div  className="panel panel-default">
                <div style={{display:'inline-block'}} className="panel-body"> {item.name} </div>
                <div style={{display:'inline-block'}} className="panel-body"> {item.date} </div>
                <div style={{display:'inline-block'}} className="panel-body"> {item.status} </div>
                <div style={{display:'inline-block'}} className="panel-body ">
                  <input type="checkbox" value=" " checked={this.state.isChecked}
                         onChange={(event)=>{
                           this.setState({isChecked: event.target.checked});
                           (this.props.checkstatus(event.target.checked,i))}}
                  />
                  <input
                    type="button"
                    value="Delete" className="btn btn-default glyphicon glyphicon-remove"
                    onClick={() => (this.props.Deleteitem(i))}
                  />
                </div>

                <div style={{display:'inline-block'}} className="panel-body">
                  <button type="button"
                         className="btn btn-default btn-sm"
                         onClick={(event) =>
                  this.props.updateshow(i)} >
                    <span class="glyphicon glyphicon-pencil" ></span>Edit</button></div>

              </div>}
                </div>


          );

        })
        }
      </div>

    );
  }
}



export default Tableitems;
