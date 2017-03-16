/**
 * Created by ttnd on 27/12/16.
 */

import React  from    'react'
import Title from './Title'
import Listitem from './Listitem'
import Form from './Form'
import Stylecss from './stylecss'

export default class Application extends React.Component {
  constructor() {
    super()
    this.state={
      list:[]
    }
  }
  addItem(text,e){

    // let list = this.state.list

    let {list} = this.state ;
    let obj = {
      fruit: text.split('-')[0],
      price: text.split('-')[1],
      qty:1

    }

    list.push(obj);

    this.setState({
      list:list
    })
  }

  incrementQty(keyval){  //0->1st row

   /*    this.state.list[keyval].qty += 1;

    this.setState({
      list:this.state.list
   })*/

      let newobj=Object.assign([],this.state.list,{keyval: this.state.list[keyval].qty += 1})
    this.setState(newobj)
      //console.log(this.state.list[0].qty)
}

  decrementQty(keyval){
       let {list} = this.state ;

       if(list[keyval].qty!=1)
         list[keyval].qty -= 1



   this.setState({
      list:list
   })

  }

  deleteItem(rowkey){
  let {list} = this.state ;
 this.state.list.splice(i,1);

  this.setState({
        list:list

  })
  }


  render(){

    const divstyle={
      margin:'auto',
      width: '50%',
      border: '3px grey',
      padding:'10px'
    }
          return (<div style={divstyle}>
      <Title/>

      <Form addItem={this.addItem.bind(this)}/>
       <Listitem Item={this.state.list} IncrementQty={this.incrementQty.bind(this)}
                 DecrementQty={this.decrementQty.bind(this)} DeleteItem={this.deleteItem.bind(this)}/>

    </div>);
  }

}

