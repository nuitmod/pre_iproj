import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';


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
  console.log(this);
  return html`
  <div>
    <h6>mod_1 ${data.name} is a ${data.job}</h6>
       ${data.wm.forEach(i=>console.log(i))}
       ${this.state.status}
       <input type="button" value="click" onclick=${get_wm} style='background:black ; color:white' />
  </div>
  <br />
  <${Mod_2} />
`
}

//var name="Ruth";

var Mod_2=function(name){
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
  return html`
    <div>
     <h6>mod_2 ${name}</h6>
     <h6><ul>${wm.map(i=>html`<li>${i}</li>`)}</ul></h6>
     <input type="text" placeholder="data" />
     <input type="button" value="get_data" onclick=${get_data} style='background:black ; color:white' />
  <!--     <h6><ul>${wm.map(i=>html`<li>${i}</li>`)}</ul></h6>
       <ul>${add_data}</ul>-->
     <input type="button" value="add_data" onclick=${add_data} style='background:black ; color:white' />
    </div>
  `
}



export default Mod_1;
//export {Mod_2};

//render(Mod_1(), document.getElementById("mod_1"))
//render(Mod_2(), document.getElementById("mod_2"))
