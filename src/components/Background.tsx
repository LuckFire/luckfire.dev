import { Component, RenderableProps } from 'preact';
import Wave from 'react-wavify';

import { StarTrails } from '#/components/assets/StarTrails';
import { Context } from '#/lib/constants';

export class Background extends Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    render(props: RenderableProps<any>) { 
        return <div class="background">
            <Context.App.Consumer>{({ currentZoom }) => (
                <div
                    class="star-trails"
                    style={{
                        width: `${1920 / currentZoom}px`,
                        height: `${1080 / currentZoom}px`,
                    }}
                >
                    <StarTrails></StarTrails>
                </div> 
            )}</Context.App.Consumer>
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
            {props.children}
        </div>
    }
}