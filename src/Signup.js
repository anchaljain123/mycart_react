/**
 * Created by anchal on 16/3/17.
 */
import React  from 'react'

export default class Signup extends React.Component{
  constructor(){
  super()
    this.state={
      uname:" ",
      pwd:'',
      cfmpwd:'',
      msg:''
    }
  }

  getNode(event) {

  /*  this.setState({textval:event.target.value})

    let Node = event.target;
    console.log(Node)*/

    let state={}
    var t=  event.target.value;
    state[event.target.name]=event.target.value;
    console.log(state.uname + " "+t);

    this.setState(state);
  /*  var t=  event.target.name
    this.setState({
    t:event.target.value
    })
*/


  }


  validate(event){

    if(this.state.uname==' '||this.state.pwd==''||this.state.cfmpwd)
      this.setState({msg:'cannot be blank'})
  }

  render(){
    return(
      <form onSubmit={this.validate.bind(this)}>

        Enter Name :<input type="text" name="uname" value={this.state.uname} onChange={this.getNode.bind(this)}/>
       Enter Pwd :<input type="password" name="pwd" value={this.state.pwd}  onChange={this.getNode.bind(this)}/>
        Enter Newpwd :<input type="password" name="cfmpwd" value={this.state.cfmpwd} onChange={this.getNode.bind(this)}/>
        <input type="submit" value="Submit"/>

        {this.state.msg}
      </form>)

  }







}
