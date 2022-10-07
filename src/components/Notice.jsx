import React from 'react';
import ReactMarkdown from 'react-markdown'
import '../styling/notices.css';

class Notice extends React.Component {
    constructor(props) {
        super(props);
    }

    color(type) {
        switch(type) {
            case 0: return '#F03838';
            case 1: return '#20D05C';
            case 2: return '#F06F38';
            case 3: return '#6938F0';
        }
    }

    render() {
        const { type, dismissable, text } = this.props;

        return (
            <div className="noticeContent">
                <div className="noticePill" style={{ backgroundColor: this.color(type) }}></div>
                <ReactMarkdown className="noticeText">{text}</ReactMarkdown>
                {dismissable
                ? <button className="dismissNotice">
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.76324 1.86623C8.07559 1.55388 8.07559 1.04662 7.76324 0.734265C7.45088 0.421912 6.94362 0.421912 6.63127 0.734265L4 3.36803L1.36623 0.736764C1.05388 0.42441 0.546619 0.42441 0.234265 0.736764C-0.0780884 1.04912 -0.0780884 1.55638 0.234265 1.86873L2.86803 4.5L0.236764 7.13376C-0.0755896 7.44612 -0.0755896 7.95338 0.236764 8.26573C0.549118 8.57809 1.05638 8.57809 1.36873 8.26573L4 5.63197L6.63376 8.26324C6.94612 8.57559 7.45338 8.57559 7.76573 8.26324C8.07809 7.95088 8.07809 7.44362 7.76573 7.13127L5.13197 4.5L7.76324 1.86623Z" fill="#E3E2EE" fill-opacity="0.5"/>
                    </svg>
                  </button>
                : <></>
                }
            </div>
        )
    }
}

export default Notice;