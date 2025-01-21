import { Component } from 'preact';

import { Fonts } from '#/lib/constants';
import { Foreground } from '#/components/Foreground';

import '#/styling/pages/contact.scss';
import { Discord, XTwitter } from '#/components/assets/Icons';

export class Contact extends Component {
    render() {
        return <Foreground>
            <div class="contact-details">
                <div class="information">
                    <a class={`${Fonts.Sizes.Montserrat32px} ${Fonts.Weights.Montserrat900}`}>Contact</a>
                    <a class={`${Fonts.Sizes.Montserrat16px} ${Fonts.Weights.Montserrat400}`}>
                        If you need to get into touch with me, you can contact me either on Discord or Twitter. My preferred form of contact is Discord.
                    </a>
                </div>
                <div class="divider"></div>
                <div class="contact">
                    <Discord scale={0.3845}/>
                    <div class="contact-info">
                        <a href="discord://-/users/399416615742996480" class={`link ${Fonts.Sizes.Montserrat16px} ${Fonts.Weights.Montserrat600}`}>@luckfire</a>
                        <div class="nav-divider"></div>
                        <a target="_blank" href="https://luckfire.dev/discord" class={`link ${Fonts.Sizes.Montserrat16px} ${Fonts.Weights.Montserrat600}`}>https://luckfire.dev/discord</a>
                    </div>
                </div>
                <div class="contact">
                    <XTwitter scale={0.5}/>
                    <div class="contact-info">
                        <a target="_blank" href="https://twitter.com/luckfiredev" class={`link ${Fonts.Sizes.Montserrat16px} ${Fonts.Weights.Montserrat600}`}>@LuckFireDEV</a>
                    </div>
                </div>
            </div>
        </Foreground> 
    }
}