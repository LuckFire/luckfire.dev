import { Component, RenderableProps } from 'preact';

export class Background extends Component {
    render(props: RenderableProps<any>) { 
        return <div id="foreground">
            {props.children}
        </div>
    }
}