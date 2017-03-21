/**
 * Created by ttnd on 27/12/16.
 */

import React  from    'react'
import Tableitems from './Tableitems'
import Input from './Input'
import Stylecss from './stylecss'

export default class Apptodo extends React.Component {
  constructor() {
    super()
    this.state={
      list:[],

    }
  }
  addItem(state,e){

    let {list} = this.state ;
    let{name,date,status}=state;
    console.log(name , status);
    let obj = {
      name:name,
      date: date,
      status:status,
      show:"",
      isChecked:false,

    }
      console.log(obj)
    list.push(obj);

    this.setState({
      list:list
    })
  }


  deleteItem=(rowkey)=>{
    let {list} = this.state ;

    this.state.list.splice(rowkey,1);



    this.setState({
      list:list

    })
  }

  updateshow=(i)=>{

    let {list}=this.state;
    list[i].show=!(list[i].show);
    this.setState(list)


  }

  updatestatus=(chkval,i)=>{


    let {list}=this.state;
    list[i].isChecked=chkval;
    list[i].status='Done';
    this.setState(list)
  }

  editItem=(newstate,indx)=>{
    this.updateshow(indx)

    let {list} = this.state ;
    let {text1:name,text2:date}=newstate;
    let {show,status}=list[indx];
    let newobj={name,date,show,status};
    let objx=Object.assign([],this.state.list,{[indx]:newobj});
    console.log("ob",objx)

    this.setState({
      list:objx,
    })


    console.log("LIst : ",list)


  }



  render(){

    const divstyle={
      margin:'auto',
      padding:'10px'
    }

    return (<div style={divstyle}>

      <input type ="button" value="ADD" className="btn btn-primary" onClick={() =>{
        this.setState({hide:!this.state.hide})}}/>

      { this.state.hide?<Input addItem={this.addItem.bind(this)}/>: <span />}
      <Tableitems items={this.state.list} Deleteitem={this.deleteItem} checkstatus={this.updatestatus}
                  edititem={this.editItem} updateshow={this.updateshow} isChecked={this.state.isChecked} />

    </div>);
  }

}

