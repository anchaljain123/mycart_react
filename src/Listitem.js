/**
 * Created by anchal on 15/3/17.
 */

import React from 'react'
import Stylecss from './stylecss'

 class Listitem extends React.Component{
  constructor(){
    super();


  }


  render(){
    let sumItem=0;

    return(


      <div>
        <table>
        {this.props.Item.map((item, i) => {

          return (
            <div style={Stylecss.itemrow} >
            <tr key={i}>
              <td style={{paddingLeft:'40px'}}>{item.fruit}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td><input type="button" value="+" style={Stylecss.btn} onClick={() => {
                return this.props.IncrementQty(i)
              }}/></td>
              <td><input type="button" style={Stylecss.btn} value="-" onClick={() => (this.props.DecrementQty(i))}/></td>
              <td><input type="button" style={Stylecss.btn} value="Delete" onClick={() => {this.props.DeleteItem(i)}}/></td>

            </tr>
              <span style={{display:"none"}}>{sumItem += (item.qty * item.price)}</span>
            </div>
          );


        })
        }
        </table>
          <div style={Stylecss.sumdiv}>SUM: {sumItem}</div>
        </div>
    );
  }
}


Listitem.propTypes={//for validation & documentatn
  Item:React.PropTypes.array.isRequired,
  Item: React.PropTypes.arrayOf(React.PropTypes.shape({
    fruit: React.PropTypes.string,
    qty: React.PropTypes.number,
    price:React.PropTypes.string
  }))

}
Listitem.defaultProps={//for template to show this will work if not assign
  Item:[{
    fruit:'mango',
    qty:1,
    price:50
  }]
}

export default Listitem;
