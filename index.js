'use strict';
//from window.preact import preact;
//import { html, render, Component } from "./node_modules/htm/preact";
//import { h, render} from preact';

///** @jsx h */

//console.log(window.preact);

var {html, render, Component}=htmPreact;
//var htm = window.htm;
//console.log(html);

var I_ww=function(){
  return html`
    <div>
      <h6>ww component data</h6>
    </div>
  `
}


render(I_ww(), document.getElementById("root"))


//var html=htm.bind(h)
/*
var Ww = function(){
    return h('h6', {className: ''},
    'ww component data');
}
//render(Ww(), document.getElementById("root2"));

var App = function (){
  return h(Ww)}

render(h(App), document.getElementById("root2"));

//render(<Ww />, document.getElementById("root2"));
/*
var render_app= () => {
  render(
    <Icomp />,
    document.getElementById("root2")
  )
}

function Icomp(){
  return (
    <div>
      <p>ww component data</p>
    </div>
  )
}
*/
//render_app()
//render(<Icomp />, document.getElementById("root3"))
