
import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import Router from 'https://unpkg.com/preact-router?module';
//var {html, render, Component}=htmPreact;

//history.replaceState(0,0,'/');  // codepen hack
//console.log(html);

function App2() {
    return html`
        <div class=app>
            <${Header}  />
            <${Router} >
                <${Home} path="/" />
                <${About} path="/mode" />
                <${NotFound} default />
            <//>
        </div>
    `;
}

const Header = () => html`
    <header>
        <nav>
            <a href="/">main</a>
            <a href="/mode">mode</a>
            <a href="/error">Error</a>
        </nav>
    </header>
`;

const Home = () => html`<section><h2>Home</h2><p>This is the home page.</p></section>`;
const About = () => html`<section><h2>About</h2><p>My name is Ruth.</p></section>`;
const NotFound = () => html`<section><h2>404: Not Found</h2><p>It's gone :(</p></section>`;

//render(html`<${App2} />`, document.getElementById('root2'));
render(App2(), document.getElementById('root2'));
