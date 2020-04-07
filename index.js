//'use strict';
//from window.preact import preact;
// { h, Component } from 'preact'
//import { h, render} from preact';

/** @jsx h */

//console.log(window.preact);

var {h, render, Component}=preact;

class Ww extends Component{
  render(){
    return(
      <div>ww component data</div>
    )
  }
}

render(<Ww />, document.getElementById("root2"));
/*
var render_app= () => {
  render(
    <Icomp />,
    document.getElementById("root2")
  )
}
*/

function Icomp(){
  return (
    <div>
      <p>ww component data</p>
    </div>
  )
}

//render_app()
render(<Icomp />, document.getElementById("root"))
