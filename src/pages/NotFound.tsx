import { Component } from 'preact';

import { Fonts } from '#/lib/constants';
import { Foreground } from '#/components/Foreground';

import '#/styling/pages/404.scss';

export class NotFound extends Component {
    render() {
        const errors = [
            "This page does not exist.",
            "Whatever you're looking for, it's not here.",
            "You're like a fish out of water."
        ];

        return <Foreground>
            <div class="error">
                <a class={`status ${Fonts.Weights.Montserrat900} ${Fonts.Sizes.Montserrat32px}`}>404</a>
                <a class={`info ${Fonts.Weights.Montserrat500} ${Fonts.Sizes.Montserrat16px}`}>{errors[Math.floor(Math.random() * errors.length)]}</a>
            </div>
        </Foreground>
    }
}