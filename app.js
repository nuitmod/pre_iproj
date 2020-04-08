//'use strict';
import {I_w1, I_w2, I_w3} from './components/main.js';
import {Header} from './components/header.js';
//import {html, render, Component} from './components/index.js';

var {html, render, Component}=htmPreact;

var All=function(){
  return html`
    <div>
      <${I_w1} />
      <${I_w2} />
      <${I_w3} />
    </div>
  `
}



render(All(), document.getElementById("root"))
