import { Component, render } from 'preact';
import Router, { CustomHistory, Route, RouterOnChangeArgs } from 'preact-router';
import { createHashHistory } from "history";

import { Background } from '#/components/Background';
import { Topbar } from '#/components/Topbar';
import { Pages } from '#/lib/constants';
import { NotFound } from '#/pages/NotFound';

import '#/styling/main.scss';
import { TargetedEvent } from 'preact/compat';

class App extends Component {
    constructor(props: {}) {
        super(props);
    }

    private async _mouseShadow(event: TargetedEvent<EventTarget, MouseEvent>) {
        const { clientX, clientY } = event;
        const offset = (50 / 2);

        document.getElementById('mouse-shadow').style.left = `${clientX - offset}px`;
        document.getElementById('mouse-shadow').style.top = `${clientY - offset}px`;
    }

    private async _mouseLeave(_event: TargetedEvent<EventTarget, MouseEvent>) {
        document.getElementById('mouse-shadow').style.opacity = '0';
    }

    private async _mouseEnter(_event: TargetedEvent<EventTarget, MouseEvent>) {
        document.getElementById('mouse-shadow').style.opacity = '.5';
    }

    private async _mouseDown(_event: TargetedEvent<EventTarget, MouseEvent>) {
        document.getElementById('mouse-shadow').style.opacity = '.9';
    }

    render() {
        document.documentElement.setAttribute('class', 'theme-midnight-sea');

        return <div
            onMouseMove={this._mouseShadow}
            onMouseEnter={this._mouseEnter}
            onMouseLeave={this._mouseLeave}
            onMouseDown={this._mouseDown}
            onMouseUp={this._mouseEnter}
        >
            <Router history={(createHashHistory() as unknown) as CustomHistory}>
                {Pages.map(({ path, component }) => (
                    <Route path={path} component={component || NotFound} />
                ))}
                <NotFound default />
            </Router>
            <Background/>
            <Topbar />
        </div>
    }
}

render(<App />, document.getElementById('app'));