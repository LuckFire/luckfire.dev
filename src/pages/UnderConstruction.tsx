import { Component } from 'preact';

import { Fonts } from '#/lib/constants';
import { Foreground } from '#/components/Foreground';

import '#/styling/pages/under-construction.scss';

export class UnderConstruction extends Component {
    render() {
        return <Foreground>
            <div class="under-construction">
                <a class={`header ${Fonts.Weights.Montserrat900} ${Fonts.Sizes.Montserrat32px}`}>Under Construction</a>
                <a class={`info ${Fonts.Weights.Montserrat500} ${Fonts.Sizes.Montserrat16px}`}>This page is currently being worked on, come back another time!</a>
            </div>
        </Foreground>
    }
}