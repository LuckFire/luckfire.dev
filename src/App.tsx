import { Component, render } from 'preact';
import Router, { CustomHistory, Route } from 'preact-router';
import { createHashHistory } from "history";

import { Home } from '#/pages/Home';
import { NotFound } from '#/pages/NotFound';
import { Background } from '#/components/Background';
import { Topbar } from './components/Topbar';

class App extends Component {
    private async _mouseShaodw(event: MouseEvent) {
        const { clientX, clientY } = event;
        const offset = (50 / 2);

        document.getElementById('mouse-shadow').style.left = `${clientX - offset}px`;
        document.getElementById('mouse-shadow').style.top = `${clientY - offset}px`;
    }

    private async _mouseLeave(_event: MouseEvent) {
        document.getElementById('mouse-shadow').style.opacity = '0';
    }

    private async _mouseEnter(_event: MouseEvent) {
        document.getElementById('mouse-shadow').style.opacity = '.5';
    }

    private async _mouseDown(_event: MouseEvent) {
        document.getElementById('mouse-shadow').style.opacity = '.9';
    }

    render() {
        document.documentElement.setAttribute('class', 'theme-midnight-sea');

        return <div
            onMouseMove={this._mouseShaodw}
            onMouseEnter={this._mouseEnter}
            onMouseLeave={this._mouseLeave}
            onMouseDown={this._mouseDown}
            onMouseUp={this._mouseEnter}
        >
            <Router history={(createHashHistory() as unknown) as CustomHistory}>
                <Route path="/" component={Home} />
                <Route default component={NotFound} />
            </Router>
            <Background/>
            {/* <Topbar /> */}
        </div>
    }
}

render(<App />, document.getElementById('app'));