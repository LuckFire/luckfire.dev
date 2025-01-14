import { Component, render } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Wave from 'react-wavify';

import Signature from './components/Signature';
import './style.scss';

class App extends Component {
    private async _mouseShaodw(event) {
        const { clientX, clientY } = event;
        const offset = (50 / 2);

        document.getElementById('mouse-shadow').style.left = `${clientX - offset}px`;
        document.getElementById('mouse-shadow').style.top = `${clientY - offset}px`;
        document.getElementById('mouse-shadow').style.opacity = '.5';
    }

    render() {
        return <div class="theme-midnight-sea" onMouseMove={this._mouseShaodw}>
            <div id="foreground">
                <div class="signature">
                    <Signature />
                </div>
                <div class="about-me">
                    <h1 class="title">Hey, I'm LuckFire!</h1>
                    <h2 class="bio">I'm a UI/UX designer and programmer.</h2>
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
            </div>
            <div id="background">
                <div id="mouse-shadow"></div>
                <Wave fill='#101423'
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
                <Wave fill='#23273B'
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
            </div>
        </div>
    }
}

render(<App />, document.getElementById('app'));