import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
//import {observer} from "https://cdn.jsdelivr.net/npm/mobx-preact@3.0.0/lib/index.module.js";
//import { observer } from './node_modules/mobx-preact/lib/index.module.js';
//import { Provider, connect } from "./node_modules/mobx-preact/lib/index.module.js";
//import { observer } from "./node_modules/mobx-observer/observer.js?module";
//import { observer } from "https://cdn.jsdelivr.net/npm/mobx-preact@3.0.0/lib/index.module.js?module";
//import { @observable } from "https://unpkg.com/mobx-preact@3.0.0/lib/index.min.js"
//import { Provider, connect } from "https://unpkg.com/browse/mobx-preact@3.0.0/lib/index.module.js"
//import { observer } from './node_modules/mobx/lib/mobx.module.js';
//import { decorate, observable, computed, action } from './node_modules/mobx/lib/mobx.module.js';
//import { extendObservable } from './node_modules/mobx/lib/mobx.module.js';
//import { observer } from './node_modules/mobx/lib/mobx.module.js';
//import {observer} from 'mobx-observer'
import { decorate, observable, computed, action } from './mobx.module.js';
/*
class Imob {
  constructor() {
    extendObservable(this, {
      my_data: "hi mobx",
      wm: ['ivvie', 'yiia', "ii"]
    })
  }
}


class Imob {
  my_data="hi mobx"
  wm=['ivvie', 'yiia', "ii", "iya"]
}

var imob = new Imob();
*/
var imob={
  my_data: "hi mobx",
  wm: ['ivvie', 'yiia', "ii", "iya"],
  placehold_name: "data",
  ch_store: ()=>{
      imob.my_data="Miut"; console.log(imob.my_data);
    }
}

decorate(imob, {
    my_data: observable,
    wm: observable,
    ch_store: action
})

var imob2={
  inf: "imob2",
  ch_store2: ()=>{
      imob2.inf="Ruth"; console.log(imob2.inf);
    },
  data: [
    { name: 'Maud', id: 1},
    { name: 'Ruth', id: 2},
    { name: 'Muit', id: 3}
  ],
  del_w: id=>{
//    console.log(id);
//    console.log(imob2.data.map(i=>i.name));
    imob2.data=imob2.data.filter(wm=>{
      return wm.id != id
    });
    console.log(imob2.data.map(i=>i.name));
  }
}

decorate(imob2, {
    inf: observable,
    data: observable,
    ch_store2: action,
    del_w: action
})


/*

class Todo {
    title = "iiii"
    finished = false
}

var todo=new Todo();

decorate(Todo, {
    title: observable,
    finished: observable
})
console.log(todo.title);
*/
//var imob = new Imob();

/*
decorate(imob, {
    my_data: computed,
    wm: computed
})
/*
console.log(imob);
console.log(imob.my_data);

var change_store = function(){
  imob.my_data="Miut"; console.log(imob.my_data);
  todo.title="uuuuu"; console.log(todo.title);
}

var Mob=function(){
    return html`
    <div>
     <h6>mobx store${' '}
     ${person}
     </h6>
     ${imob.my_data}
      <p>
      ${todo.title}
       <input type="button" value="change" onclick=${change_store} />
      </p>
    </div>
  `
}
*/
//var person = observable({ name: "Miut" });
//var person="maud"
//render(Mob(), document.getElementById("mobx"))

//var i_mobx=observable({my_data: "hi mobx"})
export default imob2;
export {imob};

//export {obsever};
