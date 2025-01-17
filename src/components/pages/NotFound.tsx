import { Component } from 'preact';

import { Background } from '../Background';
import { Foreground } from '../Foreground';

import '../../styling/404.scss';

export class NotFound extends Component {
    render() { 
        return <>
            <Foreground>
                <div class="error">
                    <h1 class="status">404</h1>
                    <h2 class="info">Wherever you're looking, this ain't it.</h2> 
                </div>
            </Foreground>
            <Background />
        </>
    }
}