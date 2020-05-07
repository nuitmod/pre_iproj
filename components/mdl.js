import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';


var Mod_1=function(){
  return html`
  <div>
    <h6>mod_1</h6>
  </div>
`
}

var name="Ruth";

var Mod_2=function(name){
//  var name; console.log(nm)
  var name="Maud";
  return html`
    <div>
     <h6>mod_2 ${name}</h6>
    </div>
  `
}



export default Mod_1;
export {Mod_2};

render(Mod_1(), document.getElementById("mod_1"))
render(Mod_2(), document.getElementById("mod_2"))
