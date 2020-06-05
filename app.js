//'use strict';
//import  * as $ from "https://unpkg.com/jquery@3.3.1/dist/jquery.min.js"
//import * as $ from './node_modules/jquery/dist/jquery.min.js';
import {I_w1, I_w2, I_w3} from './components/main.js';
import {Header} from './components/header.js';
//import {Mod_1, Mod_2} from './components/mdl.js';
import {Yy} from './components/mdl.js';
import Uu from './components/mdl.js';
import {Mod_1} from './components/mdl.js';
import Mod_x from './components/Mod_x.js';
import Router from 'https://unpkg.com/preact-router?module';
import { route } from 'https://unpkg.com/preact-router?module';
import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
//import {html, render, Component} from './components/index.js';
//import I_mobx from './mobx_store.js';


//var {html, render, Component}=htmPreact;
route('/pre_iproj')
//route('/pre_iproj', true)
//console.log(window.$);

function App(){
//  var $ = window.$;
//  window.jQuery=jQuery;
//  $('#jq').html("<h6>jq is on</h6>")
  return html`
    <div class=app>
      <${Router} >
        <${I_w1} path="/pre_iproj/" />
        <${I_w2} path="/pre_iproj/rii" />
        <${I_w3} path="/pre_iproj/mode" />
        <${Mod_1} path="/pre_iproj/mdl___" />
        <${Mod_x} style='background:black ; color:white' path="/pre_iproj/mdl" />
      <//>
      <${Mod_1} />
      <${Yy} />
      <${Uu} />
    </div>
  `;
}


render(App(), document.getElementById("root"))


//history.replaceState(0,0,'/');  // codepen hack
/*
function App() {
    return html`
        <div class=app>
            <${Header} url=${this.state.url} />
            <${Router} onChange=${e => this.setState(e)}>
                <${Home} path="/" />
                <${About} path="/about" />
                <${NotFound} default />
            <//>
        </div>
    `;
}
*/
/*
const Header = ({ url }) => html`
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/error">Error</a>
        </nav>
        <section>URL:<input readonly value=${url} /></section>
    </header>
`;
*/


//render(html`<${App} />`, document.body);
