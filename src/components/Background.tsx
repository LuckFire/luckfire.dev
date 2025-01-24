import { Component, RenderableProps } from 'preact';
import Wave from 'react-wavify';

import { StarTrails } from '#/components/assets/StarTrails';

export class Background extends Component<{}, { zoom: number; }> {
    constructor(props: {}) {
        super(props);

        this.state = {
            zoom: window.devicePixelRatio
        };

        this._resize = this._resize.bind(this);
    }

    private _resize() {
        this.setState({ zoom: window.devicePixelRatio });
    }

    public componentDidMount(): void {
        window.addEventListener('resize', this._resize);
    }

    public componentWillMount(): void {
        window.removeEventListener('resize', this._resize);
    }

    render(props: RenderableProps<any>) { 
        return <div class="background">
            <div class="star-trails">
                <StarTrails></StarTrails>
            </div> 
            <div class="background-blur">
                <div id="mouse-shadow" style={{
                    filter: `blur(${Math.max(10, 10 / this.state.zoom)}px)`
                }} />
                <Wave fill='var(--bg-lighter)'
                    paused={false}
                    style={{
                        position: 'absolute',
                        display: 'flex', 
                        bottom: 100,
                        filter: `blur(${Math.max(10, 10 / this.state.zoom)}px)`
                    }}
                    options={{
                        height: 30,
                        amplitude: 20,
                        speed: 0.30,
                        points: 4
                    }}
                />
                <Wave fill='var(--bg-lightest)'
                    paused={false}
                    style={{
                        position: 'absolute',
                        display: 'flex', 
                        bottom: -20,
                        filter: `blur(${Math.max(10, 10 / this.state.zoom)}px)`
                    }}
                    options={{
                        height: 5,
                        amplitude: 20,
                        speed: 0.15,
                        points: 4
                    }}
                />
            </div>
            {props.children}
        </div>
    }
}