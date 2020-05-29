import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import  imob   from "../mobx_store.js";
//import { observer } from '../node_modules/mobx-preact/lib/index.module.js';
//import { observer } from './node_modules/mobx-preact/lib/index.module.js';
//import { decorate, observable, computed } from '../node_modules/mobx/lib/mobx.module.js';
import { observer } from '../mobx_preact.module.js';

var Mod_1=function(){

  this.state={ status: "iiii"}
  this.style={color: "purple"}

  var styles={
    h6: {
      backgroundColor: 'black'
    }
  }

  var get_wm=function(){
    alert("wm!!!");
  }

  var data={
    name: "Ruth",
    job: 'progr',
    wm: ['ivvie', 'yiia']
  }
//  console.log(this);
  return html`
  <div>
    <h6>mod_1 ${data.name} is a ${data.job}</h6>
       ${data.wm.forEach(i=>console.log(i))}
       ${this.state.status}
       <input type="button" value="click" onclick=${get_wm} style='background:black ; color:white' />
  </div>
  <br />

`
}

//var name="Ruth";
/*
class Mod_2 extends Component{

  var name="Maud";
  var wm=['ivvie', 'yiia', "ii"]

  var get_data=function(dat=wm){
    alert(dat)
  }

var add_data=function(){
//   wm.map(val=>val*2);
   wm.map(i=>html`<li>${i}</li>`)
}
// var wm_li=wm.map(w=><li>w</li>);


state={
  name: "Miut",
  wmn: ['ivvie', 'yiia', "yy"],
  value: ''
}

componentDidMount(){
  console.log(this.state);
}

on_change=e=>{
  console.log(e.target.value);
  this.setState({
    name: e.target.value,
    value: e.target.value
//    wm : wm.map(e.target.value)
  });
}

on_submit=e=>{
  e.preventDefault();
  console.log("form submitted", this.state.name);
}

add_item=()=>{
  this.setState(i => {
    var wmn = i.wmn.push(i.value);
    console.log("add list", this.state.wmn);
  })
}

rm_item=()=>{
  this.setState(i => {
    var wmn = i.wmn.pop(i.value);
    console.log("rm list", this.state.wmn);
  })
}

render(){
  return html`
    <div>
     <h6>mod_2 name is ${this.state.name}</h6>
     <h6><ul>${this.state.wmn.map(i=>html`<li>${i}</li>`)}</ul></h6>
     <form onsubmit=${this.on_submit}>
       <input type="text" onchange=${this.on_change} />
       <button>submit</button>
       <button onclick=${this.add_item}>add_item</button>
       <button onclick=${this.rm_item}>rm_item</button>
     </form>
    </div>
  `
  }
}
*/
var ch_st_wm=e=>{
    e.preventDefault();
//    imob.my_data=e.target.value;
    imob.placehold_name="";
    console.log(imob.my_data);
    imob.wm.push(e.target.value);
}

var on_sub_wm=e=>{
  e.preventDefault();
//  console.log("form submitted", imob.wm);
}

var add_wm=e=>{
  //i=>{
  //i.imob.wm.push(i.value);
  //  e.preventDefault();
  //  imob.wm.push(e.target.value);
    console.log("add wm", imob.wm);
//  }
}

var rm_wm=e=>{
      //var wm = i.imob.wm.pop(i.value);
      imob.wm.pop(e.target.value);
      console.log("rm list", imob.wm);
  }

var Yy = function(){
  return html`
  <div>
    <h6><ul>${imob.wm.map(i=>html`<li>${i}</li>`)}</ul></h6>
    <form onsubmit=${on_sub_wm}>
      <input type="text" placeholder=${imob.placehold_name} onchange=${ch_st_wm} />
      <button onclick=${add_wm}>add_wm</button>
      <button onclick=${rm_wm}>rm_wm</button>
    </form>
   <h6>mobx store${' '}
   </h6>
   ${imob.my_data}
     <input type="button" value="change" onclick=${imob.ch_store} />
  </div>
  `
}
/*
decorate(Yy, {
  my_data: computed,
  wm: computed
})
*/
export default observer(Yy);
export {Mod_1};
//   <h6><ul>${wm.map(i=>html`<li>${i}</li>`)}</ul></h6>
//<input type="button" value="get_data" onclick=${get_data} style='background:black ; color:white' />
//<input type="button" value="add_data" onclick=${add_data} style='background:black ; color:white' />
//render(Mod_1(), document.getElementById("mod_1"))
//render(Mod_2(), document.getElementById("mod_2"))
