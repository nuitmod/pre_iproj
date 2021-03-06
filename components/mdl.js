import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import  imob2   from "../mobx_store.js";
import  {imob}   from "../mobx_store.js";
//import { createContext } from '../preact_context.js?module';
//import { useState } from 'https://cdnjs.cloudflare.com/ajax/libs/preact/10.4.4/hooks.module.min.js';
import { useState, useReducer, useContext, useCallback} from "../preact_hooks.module.js";
//import { decorate, observable, computed } from '../node_modules/mobx/lib/mobx.module.js';
import { observer } from '../mobx_preact.module.js';
import { get, set, values } from '../mobx.module.js';

var Mod_1=function(){

  var [value, setValue] = useState(1);
  var increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  this.state={ status: "iiii"}

  var styles={
    h6: {
      color: "white",
      position: "absolute"
  //    left: '20px'
  //    top: "10px"
    }
  }
  var data={
    name: "Ruth",
    job: 'progr',
    wm: ['ivvie', 'yiia']
  }
  var get_wm=function(){
    alert(`value: ${value} wm!!!`);
//    data.wm.forEach(i=>console.log(i));
  }

  return html`
  <div id="mod1">
    <h6>mod_1 ${data.name} is a ${data.job}</h6>
       ${this.state.status}
       <input type="button" value="click" onclick=${get_wm} style=${styles.h6} />
       <h6>wm counter: ${value}
       <button onclick=${increment}>increment</button>
       </h6>
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
    imob.my_data=e.target.value;
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

var Yy = observer(function(){ return html`
  <div>
    <h6><ul>${imob.wm.map(i=>html`<li>${i}</li>`)}</ul></h6>
    <form onsubmit=${on_sub_wm}>
      <input type="text" placeholder=${imob.placehold_name} onchange=${ch_st_wm} />
      <button onclick=${add_wm}>add_wm</button>
      <button onclick=${rm_wm}>rm_wm</button>
    </form>
   <h6>mobx store ${imob.my_data}</h6>
    <input type="button" value="change" onclick=${imob.ch_store} />
  </div>
  `
})


var temp_store={
  name: ''
}

var handle_change=e=>{
  temp_store.name=e.target.value
}

var handle_submit=e=>{
  e.preventDefault();
  add_w(temp_store)
}

var add_w=wm=>{                //wm=new temp_store
    wm.id=Math.random();
    imob2.data.push(wm);
    wm.name = '';
}

var Uu = function(){
  var wm_list=imob2.data.map(wm=>{ return html`
    <div key=${wm.id}>
      <div onclick=${()=>imob2.del_w(wm.id)}>name: ${ wm.name} </div>
   </div>`
  })
return html`
  <div>
    <h6>mobx store ${imob2.inf}</h6>
    <input type="button" value="change" onclick=${imob2.ch_store2} />
    <h6>${wm_list}</h6>
    <form onsubmit=${handle_submit}>
      <label htmlfor="name">name</label>
      <input type="text" id="name" onchange=${handle_change} value=${temp_store.name} />
      <button>submit</button>
    </form>
  </div>`
}

export default observer(Uu);
export {Mod_1, Yy};

//   <h6><ul>${wm.map(i=>html`<li>${i}</li>`)}</ul></h6>
//<input type="button" value="get_data" onclick=${get_data} style='background:black ; color:white' />
//<input type="button" value="add_data" onclick=${add_data} style='background:black ; color:white' />
//render(Mod_1(), document.getElementById("mod_1"))
//render(Mod_2(), document.getElementById("mod_2"))
