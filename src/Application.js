/**
 * Created by ttnd on 27/12/16.
 */
import React  from    'react'
import Title from './Title'
import Listitem from './Listitem'
import Form from './Form'

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
    console.log("text"+obj)
    this.setState({
      list:list
    })


  }


  render() {

    return (<div>
      <Title/>
      <h6>List : {this.state.list}</h6>
      <Form addItem={this.addItem.bind(this)}/>
      <Listitem Item={this.state.list} />

    </div>);
  }

}

