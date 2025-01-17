import { Component, render } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import Signature from './components/Signature';
import { Background } from './components/Background';
import { Foreground } from './components/Foreground';
import './styling/home.scss';

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
            <Foreground>
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
            </Foreground>
            <Background />
        </div>
    }
}

render(<App />, document.getElementById('app'));