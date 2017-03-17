/**
 * Created by anchal on 16/3/17.
 */

import React  from    'react'
import Listapp from './Listapp'
import Stylecss from './stylecss'

export default class Newapp extends React.Component {
  constructor() {
    super()
    this.state={
      list:[]
    }
  }
  addItem(text){

    let {list} = this.state ;
    console.log(text)
    let obj = {
      name: text.split('-')[0],
      url: text.split('-')[1],

    }

    list.push(obj);
      console.log(list);
    this.setState({
      list:list
    })
  }



  valPrint(item, i) {
    return (
      <h5 key={i}>{item.name}{item.url}</h5>
    )
  }

  render(){

    var listarry=[
      {name:'a' ,url:'/asp.html'},
      {name:'b' ,url:'/b.html'}
    ]



    let result= listarry.filter(function(item,i)=>{

        if(item.name==this.state.list.name)
      <h5 key={i}>hi</h5>

    })


    const divstyle={
      margin:'auto',
      width: '35%',
      background:'#DCDCDC',
      padding:'10px'
    }

    return (
      <div style={divstyle}>
          <Listapp addItem={this.addItem.bind(this)}/>

          {listarry.map((item,i) => this.valPrint(item, i))}
        {result}



    </div>);
  }

}

