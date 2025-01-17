import { Component } from 'preact';

import { Background } from '../Background';
import { Foreground } from '../Foreground';

import '../../styling/404.scss';

export class NotFound extends Component {
    render() {
        const errors = [
            "This page does not exist.",
            "Whatever you're looking for, it's not here.",
            "You're like a fish out of water."
        ];

        return <>
            <Foreground>
                <div class="error">
                    <h1 class="status">404</h1>
                    <h2 class="info">{errors[Math.floor(Math.random() * errors.length)]}</h2>
                </div>
            </Foreground>
            <Background />
        </>
    }
}