import { Component, render } from 'preact';
import Router, { CustomHistory, Route } from 'preact-router';
import { createHashHistory } from "history";

import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';

class App extends Component {
    private async _mouseShaodw(event: MouseEvent) {
        const { clientX, clientY } = event;
        const offset = (50 / 2);

        document.getElementById('mouse-shadow').style.left = `${clientX - offset}px`;
        document.getElementById('mouse-shadow').style.top = `${clientY - offset}px`;
        document.getElementById('mouse-shadow').style.opacity = '.5';
    }

    render() {
        return <div class="theme-midnight-sea" onMouseMove={this._mouseShaodw}>
            <Router history={(createHashHistory() as unknown) as CustomHistory}>
                <Route path="/" component={Home} />
                <Route path="404" component={NotFound} />
            </Router>
        </div>
    }
}

render(<App />, document.getElementById('app'));