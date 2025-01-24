import { Component, RenderableProps } from 'preact';
import Wave from 'react-wavify';

import { StarTrails } from '#/components/assets/StarTrails';

export class Background extends Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    private _resize() {
        this.setState({ zoom: window.devicePixelRatio });
    }
    render(props: RenderableProps<any>) { 
        return <div class="background">
            <div class="star-trails">
                <StarTrails></StarTrails>
            </div> 
            <div class="background-blur">
                <div id="mouse-shadow" />
                <Wave fill='var(--bg-lighter)'
                    paused={false}
                    style={{
                        position: 'absolute',
                        display: 'flex', 
                        bottom: 100,
                        filter: `drop-shadow(0px -15px 10px var(--bg-lighter))`,
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
                        filter: `drop-shadow(0px -15px 10px var(--bg-lightest))`,
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