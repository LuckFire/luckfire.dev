import { Component } from 'preact';

import { Fonts } from '#/lib/constants';
import { Signature } from '#/components/assets/Signature';
import { Foreground } from '#/components/Foreground';
import { Discord, GitHub, XTwitter } from '#/components/assets/Icons';

import '#/styling/pages/home.scss';

export class Home extends Component {
    render() { 
        const Connections = [
            {
                url: 'discord://-/users/399416615742996480',
                newWindow: false,
                icon: {
                    asset: Discord,
                    scale: 0.75
                }
            },
            {
                url: 'https://github.com/luckfire',
                newWindow: true,
                icon: {
                    asset: GitHub,
                    scale: 0.75
                }
            },
            {
                url: 'https://twitter.com/luckfiredev',
                newWindow: true,
                icon: {
                    asset: XTwitter,
                    scale: 0.75
                }
            },
        ];

        return <Foreground>
            <div class="home">
                <div class="signature">
                    <Signature />
                </div>
                <div class="about-me">
                    <a class={`${Fonts.Weights.Montserrat900} ${Fonts.Sizes.Montserrat24px}`}>Hey, I'm LuckFire!</a>
                    <a class={`${Fonts.Weights.Montserrat500} ${Fonts.Sizes.Montserrat16px}`}>I'm a UI/UX designer and programmer.</a>
                </div>
                <div class="connections">
                    {Connections.map(({ url, newWindow, icon }, i) => (
                        <a
                            href={url}
                            target={newWindow ? '_blank' : '_self'}
                            draggable={false}
                        >
                            <icon.asset scale={icon.scale} />
                        </a>
                    ))}
                </div>
            </div>
        </Foreground>
    }
}