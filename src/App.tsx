import { Component, render } from 'preact';
import { TargetedEvent } from 'preact/compat';
import Router, { CustomHistory, Route, RouterOnChangeArgs } from 'preact-router';
import { createHashHistory } from "history";

import { Background } from '#/components/Background';
import { Topbar } from '#/components/Topbar';
import { Pages, Context } from '#/lib/constants';
import { NotFound } from '#/pages/NotFound';

import '#/styling/main.scss';

class App extends Component<{}, { currentPath: string; }> {
    constructor(props: {}) {
        super(props);

        const location = window.location.hash.replace('#', '');

        this.state = {
            currentPath: location.length > 0 ? location : '/'
        };

        this._routeChanged = this._routeChanged.bind(this);
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

    private async _routeChanged(event: RouterOnChangeArgs) {
        this.setState({ currentPath: event.path || '' });
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
            <Context.AppContext.Provider
                value={{ currentPath: this.state.currentPath }}
            >
                <Router
                    history={(createHashHistory() as unknown) as CustomHistory}
                    onChange={this._routeChanged}
                >
                    {Pages.map(({ path, component }, i) => (
                        <Route key={i+1} path={path} component={component || NotFound} />
                    ))}
                    
                    <Route default component={NotFound} />
                </Router>

                <Background />
                <Topbar />
            </Context.AppContext.Provider>
        </div>
    }
}

render(<App />, document.getElementById('app'));