import { Component, render } from 'preact';
import Router, { CustomHistory, Route, RouterOnChangeArgs } from 'preact-router';
import { createHashHistory } from "history";

import { Background } from '#/components/Background';
import { Topbar } from '#/components/Topbar';
import { Pages } from '#/lib/constants';
import { NotFound } from '#/pages/NotFound';

import '#/styling/main.scss';

class App extends Component<{}, { path: string }> {
    constructor(props: {}) {
        super(props);

        this.state = {
            path: window.location.hash.replace('#', '')
        };

        this._routeChanged = this._routeChanged.bind(this);
    }

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

    private async _routeChanged(args: RouterOnChangeArgs) {
        this.setState({ path: args.path });
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
            <Router
                history={(createHashHistory() as unknown) as CustomHistory}
                onChange={this._routeChanged}
            >
                {Pages.map(({ path, component }) => (<Route path={path} component={component || NotFound} />))}
                <NotFound default />
            </Router>
            <Background/>
            <Topbar />
        </div>
    }
}

render(<App />, document.getElementById('app'));