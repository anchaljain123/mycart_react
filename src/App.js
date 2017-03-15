/**
 * Created by ttnd on 27/12/16.
 */
import React  from    'react'
import Body   from    './Body'
import Footer from  './Footer'
import New from './Newprac'
import Style from './styling.css'

//require('./style.css')

export default class Header extends React.Component {
  constructor() {
    super()
    this.state={
      temp:0,
      text:" ",
      errormsg:" "
    }
  }

handleCheck(event){


  if(this.state.text.length <=10)
    this.setState({text:event.target.value});
  else
    this.setState({errormsg:"length is greater than 10"})


}

  render() {
  const list=['a','b','c'];
  const list1=['anchal','sahil','yatin'];
   let listval= list1.map((item,i)=>(

     <New item1={item} key={i}/>
     //<h5 key={i}>{item}{i}</h5>

   ))

    return (<div className="header">
      <h2 style={{background:'red'}}> HELLO WORLD</h2>
      <New style={{background:'green'}} temperature={this.state.temp}/>

      <Body/>
      { list.map((item,i)=>(
       <h5 key={i}>{item}{i}</h5>
        //<New items={item}/>

      ))}
      <h5> Enter Your Text </h5>
      <input type="text" value={this.state.text} onChange={this.handleCheck.bind(this)}/>

      <h3>{this.state.errormsg}</h3>

      {listval}
      <Footer temperature1={this.state.temp}/>
    </div>);
  }

}

