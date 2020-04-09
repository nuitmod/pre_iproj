//'use strict';
import {I_w1, I_w2, I_w3} from './components/main.js';
import {Header} from './components/header.js';
import Router from 'https://unpkg.com/preact-router?module';
import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
//import {html, render, Component} from './components/index.js';

//var {html, render, Component}=htmPreact;

//history.replaceState(0,0,'/');  // codepen hack
const Home = () => html`<section><h1>Home</h1><p>This is the home page.</p></section>`;
const About = () => html`<section><h1>About</h1><p>My name is Ruth.</p></section>`;
const NotFound = () => html`<section><h1>404: Not Found</h1><p>It's gone :(</p></section>`;

function App(){
  return html`
    <div class=app>
      <${Header} />
      <${Router} >
        <${I_w1} path="/" />
        <${I_w2} path="/rii" />
        <${I_w3} path="/mode" />
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
