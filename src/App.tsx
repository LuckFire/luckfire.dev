import { Component, render } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Wave from 'react-wavify';

import Signature from './components/Signature';
import './style.scss';

class App extends Component {
    private async _newTab(url: string) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    render() {
        return <div class="theme-midnight-sea">
            <div id="foreground">
                <div class="signature">
                    <Signature />
                </div>
                <div class="about-me">
                    <h1 class="title">Hey, I'm LuckFire!</h1>
                    <h2 class="bio">I'm a UI/UX designer and programmer.</h2>
                </div>
                <div class="connections">
                    <a href="discord://-/users/399416615742996480">
                        <FontAwesomeIcon icon={faDiscord} size="3x" />
                    </a>
                    <a onClick={() => this._newTab('https://github.com/luckfire')}>
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <a onClick={() => this._newTab('https://twitter.com/luckfiredev')}>
                        <FontAwesomeIcon icon={faXTwitter} size="3x" />
                    </a>
                </div>
            </div>
            <div id="background">
                <Wave fill='#131620'
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