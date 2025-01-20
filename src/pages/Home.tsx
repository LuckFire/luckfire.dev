import { Component } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import { Fonts } from '#/lib/constants';
import { Signature } from '#/components/Signature';
import { Foreground } from '#/components/Foreground';

import '#/styling/pages/home.scss';

export class Home extends Component {
    render() { 
        return <Foreground>
            <div class="signature">
                <Signature />
            </div>
            <div class="about-me">
                <a class={`title ${Fonts.Weights.Montserrat900} ${Fonts.Sizes.Montserrat30px}`}>Hey, I'm LuckFire!</a>
                <a class={`bio ${Fonts.Weights.Montserrat500} ${Fonts.Sizes.Montserrat20px}`}>I'm a UI/UX designer and programmer.</a>
            </div>
            <div class="connections">
                <a href="discord://-/users/399416615742996480" draggable={false}>
                    <FontAwesomeIcon icon={faDiscord} size="3x" />
                </a>
                <a target="_blank" href="https://github.com/luckfire" draggable={false}>
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a target="_blank" href="https://twitter.com/luckfiredev" draggable={false}>
                    <FontAwesomeIcon icon={faXTwitter} size="3x" />
                </a>
            </div>
        </Foreground>
    }
}