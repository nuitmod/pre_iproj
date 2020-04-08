//import {$} from "./jq.js"
var {html, render, Component}=htmPreact;

var Header=function(){
  return html`
    <section>
     <div class="bar">
       <nav id="desktop">
         <ul>
           <li><a href="#main">main</a></li>
           <li><a href="#mode">mode</a></li>
           <li><a href="#rii">rii</a></li>
           <li><a href="rend">rend</a></li>
           <li><a href="https://yoox.com">yoox.com</a></li>
         </ul>
       </nav>
     </div>
     <div id="burg">
       <a>
         <span class="bar" id="top"></span>
         <span class="bar" id="middle"></span>
         <span class="bar" id="bottom"></span>
       </a>
     </div>
     <div class="mobile-tab">
       <nav id="mobile">
         <ul>
           <li><a href="#main">main</a></li>
           <li><a href="#mode">mode</a></li>
           <li><a href="#rii">rii</a></li>
           <li><a href="#rend">rend</a></li>
           <li><a href="https://yoox.com">yoox.com</a></li>
         </ul>
       </nav>
     </div>
    </section>
  `
}

export {Header};
