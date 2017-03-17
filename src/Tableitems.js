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
      text2: ""
    }
  }


  render(){

    return(
      <div>
        {this.props.items.map((item, i) => {

          return (

                <div key={i}>
                  {item.show?
                  <div>
                    <input
                      type="text"
                      value={this.state.text1}
                      onChange={(event) => {
                        this.setState({text1: event.target.value});

                      }}
                      placeholder="Enter Todo Name"
                    />


                    <input
                      type="text"
                      value={this.state.text2}
                      onChange={(event) => {
                        this.setState({text2: event.target.value});

                      }}
                      placeholder="Enter Todo Date"
                    />
                    <div>  {item.status} </div>
                    <input
                      type="button"
                      value="Save Updates"
                      onClick={(event) => {

                        this.props.edititem(this.state,i);
                       // this.props.updateshow(i);
                      }}

                    />
                  </div>

              :<div>
                <div> {item.name} </div>
                <div> {item.date} </div>
                <div>  {item.status} </div>
                <div>
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => (this.props.Deleteitem(i))}
                  />
                </div>

                <div><input type="button" value="Edit" onClick={(event) =>
                  this.props.updateshow(i)} /></div>

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
