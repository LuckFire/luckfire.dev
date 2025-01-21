import { Component, RenderableProps } from 'preact';
import Wave from 'react-wavify';

export class Background extends Component {
    render(props: RenderableProps<any>) { 
        return <div class="background">
            <div id="mouse-shadow"/>
            <div class="starry-sphere"/>
            <Wave fill='var(--bg-lighter)'
                paused={false}
                style={{
                    position: 'absolute',
                    display: 'flex', 
                    bottom: 100,
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
                }}
                options={{
                    height: 5,
                    amplitude: 20,
                    speed: 0.15,
                    points: 4
                }}
            />
            <div class="background-blur"></div>
            {props.children}
        </div>
    }
}