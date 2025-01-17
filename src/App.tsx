import { Component, render } from 'preact';
import Router from 'preact-router';

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
            <Router>
                <Home path="/" />
                <NotFound default />
            </Router>
        </div>
    }
}

render(<App />, document.getElementById('app'));