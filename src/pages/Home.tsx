import { Component } from 'preact';

import { Fonts } from '#/lib/constants';
import { Signature } from '#/components/assets/Signature';
import { Foreground } from '#/components/Foreground';
import { Discord, GitHub, XTwitter } from '#/components/assets/Icons';

import '#/styling/pages/home.scss';

export class Home extends Component {
    render() { 
        return <Foreground>
            <div class="signature">
                <Signature />
            </div>
            <div class="about-me">
                <a class={`${Fonts.Weights.Montserrat900} ${Fonts.Sizes.Montserrat30px}`}>Hey, I'm LuckFire!</a>
                <a class={`${Fonts.Weights.Montserrat500} ${Fonts.Sizes.Montserrat20px}`}>I'm a UI/UX designer and programmer.</a>
            </div>
            <div class="connections">
                <a href="discord://-/users/399416615742996480" draggable={false}>
                    <Discord />
                </a>
                <a target="_blank" href="https://github.com/luckfire" draggable={false}>
                    <GitHub />
                </a>
                <a target="_blank" href="https://twitter.com/luckfiredev" draggable={false}>
                    <XTwitter />
                </a>
            </div>
        </Foreground>
    }
}