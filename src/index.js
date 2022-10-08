import React from 'react';
import ReactDOM from 'react-dom/client';
import ConnectionButton from './components/ConnectionButton';
import Notice from './components/Notice';
import './styling/main.css';

const Main = () => {
  return (<>
    <div id="mainContent">
      <div className="info">
        <div className="infoDetails">
          <h1 className="infoName">LuckFire</h1>
          <p className="infoDescription">I make things or break them, your call.</p>
        </div>
        <img className="infoAvatar" src="https://avatars.githubusercontent.com/u/39076891?v=4" alt="LuckFire"></img>
      </div>
      <div className="connections">
        <ConnectionButton icon="./icons/github.svg" text="Github Profile" url="https://github.com/LuckFire"></ConnectionButton>
        <ConnectionButton icon="./icons/discord.svg" text="Support Server" url="https://discord.gg/vYdXbEzqDs"></ConnectionButton>
      </div>
    </div>
    <div id="notices">
      <Notice type={3} text="If you know what you're doing and are willing to help me understand React better, feel free to give me feedback or contribute [here](https://github.com/LuckFire/luckfire.github.io)."></Notice>
    </div>
  </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);