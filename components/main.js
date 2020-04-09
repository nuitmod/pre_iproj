//'use strict';
///** @jsx h */
//import  './img/mode.jpg'
import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
//var {html, render, Component}=htmPreact;
//var htm = window.htm;
//console.log(html);
var I_w1=function(){
  return html`
    <div>
      <h6>w1 component data</h6>
      <div class="">
        <img src="./img/jpg/mod2.jpg" alt="" height="209" width="109" />
      </div>
      <div class="">
        <img src="./img/gif/dark.GIF" alt="" height="209" width="109" />
      </div>
    </div>
  `
}

var I_w2=function(){
  return html`
    <div>
      <h6>w2 component data</h6>
      <div class="">
        <img src="./img/jpg/code.jpg" alt="" height="99" width="229" />
      </div>
    </div>
  `
}

//render(I_w1(), document.getElementById("root"))
//var img="./img/mod2.jpg";

var I_w3=function(){
  return html`
    <div>
      <h6>w3 component data</h6>
      <div class="">
        <img src="./img/jpg/mode.jpg" alt="" height="209" width="109" />
      </div>
    </div>
  `
}


//render(I_w2(), document.getElementById("root2"))

export {I_w1, I_w2, I_w3};
//export {html, render, Component}



//var html=htm.bind(h)
/*
var Ww = function(){
    return h('h6', {className: ''},
    'w2 component data');
}
//render(Ww(), document.getElementById("root2"));

var App = function (){
  return h(Ww)}

render(h(App), document.getElementById("root2"));

//render(<Ww />, document.getElementById("root2"));
/*
function Icomp(){
  return (
    <div>
      <p>ww component data</p>
    </div>
  )
}
*/
//render(<Icomp />, document.getElementById("root3"))
