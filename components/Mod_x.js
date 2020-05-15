import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import  * as $ from "https://unpkg.com/jquery@3.3.1/dist/jquery.min.js";


var Mod_x=function(){
  var $ = window.$;
  $(function(){
  $('#jq').html("<h6>jq is on</h6>");
  //2 menu
  $('.mobile2').hide();
  $('.mobile2').on('click', function(){
    $('.mobile2').fadeToggle(200)
  });
  $('.menu').on('click', function(){
    $('.mobile2').fadeToggle(200)
  });
});

  return html`
    <div>
    <div style='background:black'>
      <input class="menu" type="button" value="" style='height:10px; width:25px; margin-left:10px' />
    </div>
      <div class="mob2">
        <nav class="mobile2">
          <ul class="mobile_items2">
              <li><a href="/">main</a></li>
              <li><a href="/rii">rii</a></li>
              <li><a href="/mode">mode</a></li>
              <li><a href="https://nuitmod.github.io/ini_pwa">ini_pwa</a></li>
              <li><a href="https://nuitmod.github.io/nata_pwa_">nata_pwa_</a></li>
              <li><a href="https://nuitmod.github.io/pre_iproj">pre_iproj</a></li>
              <li><a href="https://yoox.com">yoox.com</a></li>
          </ul>
        </nav>
      </div>
    <h6>mod_x</h6>
    </div>
  `
}


export default Mod_x;
