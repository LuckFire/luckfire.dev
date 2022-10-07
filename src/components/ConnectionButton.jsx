import React from 'react';
import '../styling/connections.css';

class ConnectionButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { icon, text, url } = this.props;
        
        return (
            <button type="button" className="connectionContent" onClick={() => { if (url) window.open(url) }}>
                {icon
                ? <img className="connectionIcon" src={icon}></img>
                : <></>}
                {text}
                {url
                ? <div className="connectionPopout">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.30206 7.79167L15.1104 1.98334" stroke="#E3E2EE" stroke-opacity="0.5" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.6771 4.81666V1.41666H12.2771" stroke="#E3E2EE" stroke-opacity="0.5" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.88544 1.41666H6.46877C2.9271 1.41666 1.51044 2.83332 1.51044 6.37499V10.625C1.51044 14.1667 2.9271 15.5833 6.46877 15.5833H10.7188C14.2604 15.5833 15.6771 14.1667 15.6771 10.625V9.20832" stroke="#E3E2EE" stroke-opacity="0.5" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                : <></>
                }
            </button>
        );
    }
}

export default ConnectionButton;