//import * as jquery from "https://unpkg.com/jquery@3.3.1/dist/jquery.min.js?module"
//var {html, render, Component}=htmPreact;
//import * as $ from './../node_modules/jquery/dist/jquery.min.js';
import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';

//console.log(jquery);

var Header=function(){
  /*
  var $ = window.$;
  $('#jq').html("<h6>jq is on!!!</h6>")
  $('.mobile-tab').hide();
  $('#burg').on('click', function(){
    $('.mobile-tab').slideToggle(600)
  });
  */
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
           <li><a href="/pre_iproj/">main</a></li>
           <li><a href="/pre_iproj/rii">rii</a></li>
           <li><a href="/pre_iproj/mode">mode</a></li>
           <li><a href="#rend">rend</a></li>
           <li><a href="https://yoox.com">yoox.com</a></li>
         </ul>
       </nav>
     </div>
    </section>
  `
}

export {Header};
