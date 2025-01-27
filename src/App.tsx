import { Component, render } from 'preact';
import { TargetedEvent } from 'preact/compat';
import { LocationProvider, Router, Route, ErrorBoundary } from 'preact-iso';

import { Background } from '#/components/Background';
import { Topbar } from '#/components/Topbar';
import { Pages, Context } from '#/lib/constants';
import { NotFound } from '#/pages/NotFound';

import '#/styling/main.scss';

class App extends Component<{}, { currentPath: string; currentHeight: number; aspectRatio: number; }> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentPath: window.location.pathname,
            currentHeight: window.innerHeight,
            aspectRatio: Math.max(window.innerWidth / window.innerHeight, 1.778)
        };

        this._routeChanged = this._routeChanged.bind(this);
        this._resize = this._resize.bind(this);
    }

    public componentDidMount(): void {
        window.addEventListener('resize', this._resize);
    }

    public componentWillMount(): void {
        window.removeEventListener('resize', this._resize);
    }

    private _resize() {
        this.setState({
            currentHeight: window.innerHeight,
            aspectRatio: Math.max(window.innerWidth / window.innerHeight, 1.778)
        });
    }

    private async _mouseShadow(event: TargetedEvent<EventTarget, MouseEvent>) {
        const { clientX, clientY } = event;
        const offset = (30 / 2);

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

    private async _routeChanged(path: string) {
        this.setState({ currentPath: path || '' });
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
            <Context.App.Provider value={{
                currentPath: this.state.currentPath,
                currentHeight: this.state.currentHeight,
                aspectRatio: this.state.aspectRatio
            }}>
                <LocationProvider><ErrorBoundary>
                    <Router onRouteChange={this._routeChanged}>
                        {Pages.map(({ path, component }, i) => (
                            <Route path={path} component={component} />
                        ))}
                        
                        <Route default component={NotFound} />
                    </Router>
                </ErrorBoundary></LocationProvider>

                <Background />
                <Topbar />
            </Context.App.Provider>
        </div>
    }
}

render(<App />, document.getElementById('app'));