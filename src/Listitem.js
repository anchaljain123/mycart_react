/**
 * Created by anchal on 15/3/17.
 */

import React from 'react'

export default class Listitem extends React.Component{
  constructor(){
    super();

  }


  render(){

    return(
      <div>
        <h1>Show Table </h1>
        <table>
          { this.props.Item.map((item,i)=>(

          <tr>
            <td>The value : {item}</td>
          </tr>

          ))}

            {/*<td> <input type="button" value="ADD" onClick={this.props.fn}/> </td>*/}
           {/* <td> <input type="button" value="ADD" onClick={this.props.fn}/> </td>
            <td> <input type="button" value="ADD" onClick={this.props.fn}/> </td>*/}


        </table>

        </div>
    );
  }
}

