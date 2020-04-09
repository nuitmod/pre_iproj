//'use strict';
import {I_w1, I_w2, I_w3} from './components/main.js';
import {Header} from './components/header.js';
import Router from 'https://unpkg.com/preact-router?module';
import { route } from 'https://unpkg.com/preact-router?module';
import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
//import {html, render, Component} from './components/index.js';

//var {html, render, Component}=htmPreact;
route('/pre_iproj', true)

function App(){
  return html`
    <div class=app>
      <${Header} />
      <${Router} >
        <${I_w1} path="/pre_iproj/" />
        <${I_w2} path="/pre_iproj/rii" />
        <${I_w3} path="/pre_iproj/mode" />
      <//>
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
