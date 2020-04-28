//'use strict';
///** @jsx h */

import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';

var I_w1=function(){
  return html`
    <div>
      <h6>Welcome to niit mode</h6>
      <div class="">
        <img src="./img/gif/dark.GIF" alt="" height="209" width="109" />
      </div>
      <div class="">
        <img src="./img/jpg/mod2.jpg" alt="" height="209" width="109" />
      </div>
      <div class="">
        <img src="./img/gif/halfsfer.GIF" alt="" height="209" width="109" />
      </div>
    </div>
  `
}

var I_w2=function(){
  return html`
    <div id="code">
      <h6>w2 component data</h6>
      <div class="">
        <img src="./img/jpg/code.jpg" alt="" height="99" width="229" />
      </div>
      <div class="">
        <img src="./img/gif/triang.GIF" alt="" height="159" width="159" />
      </div>
      <div class="">
        <img src="./img/gif/err.GIF" alt="" height="89" width="159" />
      </div>
      <div class="">
        <iframe width="270" height="152" src="https://www.youtube.com/embed/8qg4LLiXCI0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
}


var I_w3=function(){
  return html`
    <div id="mode">
      <div class="">
        <img src="./img/jpg/mode.jpg" alt="" height="209" width="109" />
      </div>
      <div class="">
        <img src="./img/gif/stripe.GIF" alt="" height="129" width="199" />
      </div>
      <pre>
      Крик пустоты

      В безвременной бездне
      Пустым восприятием
      Со мною плыви

      Исчезнув в мгновение
      В ином возродившись
      На новую ветвь перейди

      Врата мироздания
      Осколком сознания
      Упавшей звездой распахни

      Взглянув в битие
      Непроявленной жизни
      На уровень крайний взойди

      И если не будет
      В божественной призме
      Немой красоты

      То может услышишь
      Как в судорогах жизни
      Рождается крик пустоты...
      </pre>
    </div>
  `
}


export {I_w1, I_w2, I_w3};

/*var html=htm.bind(h)

var Ww = function(){
    return h('h6', {className: ''},
    'w2 component data');
}
render(Ww(), document.getElementById("root2"));

var App = function (){
  return h(Ww)}

render(h(App), document.getElementById("root2"));
render(<Ww />, document.getElementById("root2"));
*/
