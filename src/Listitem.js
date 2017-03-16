/**
 * Created by anchal on 15/3/17.
 */

import React from 'react'

 class Listitem extends React.Component{
  constructor(){
    super();


  }


  render(){
    let sumItem=0;

    return(


      <div>
        <h1>Show Table </h1>
        <table>
        {this.props.Item.map((item, i) => {

          return (
            <tr key={i}>
              <td>{item.fruit}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td><input type="button" value="+" onClick={() => {
                return this.props.IncrementQty(i)
              }}/></td>
              <td><input type="button" value="-" onClick={() => (this.props.DecrementQty(i))}/></td>
              <td><input type="button" value="Delete" onClick={() => {
                this.props.DeleteItem(i)
              }}/></td>
              <td>{sumItem += (item.qty * item.price)}</td>
            </tr>

          );


        })
        }
        </table>
          <span>SUM: {sumItem}</span>
        </div>
    );
  }
}


Listitem.propTypes={//for validation & documentatn
  Item:React.PropTypes.array.isRequired
}
Listitem.defaultProps={
  Item:[]
}

export default Listitem;
