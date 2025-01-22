import { Component } from "preact"; 
import { Fonts, Pages } from '#/lib/constants';
import { TargetedEvent } from "preact/compat";

export class Topbar extends Component<{}, { activeTab: string }> {
    constructor(props: {}) {
        super(props);

        const location = window.location.hash.replace('#', '');

        this.state = {
            activeTab: location.length > 0 ? location : '/'
        };

        this._hashPathUpdate = this._hashPathUpdate.bind(this);
        this._changeActiveTab = this._changeActiveTab.bind(this);
    }

    public componentDidMount() {
        window.addEventListener('hashchange', this._hashPathUpdate);
    }

    public componentWillUnmount() {
        window.removeEventListener('hashchange', this._hashPathUpdate);
    }

    private async _hashPathUpdate(_event: Event) {
        this.setState({ activeTab: window.location.hash.replace('#', '') });
    }

    private async _changeActiveTab(event: TargetedEvent<HTMLElement>, path: string) {
        const target = event.target as HTMLElement;

        if (target.tagName === 'A') {
            this.setState({ activeTab: path });
        }
    }

    render() {
        return <div class="topbar">
            <div class="site-nav">
                {Pages.map(({ path, location }, index) => (<>
                    <div
                        class={`nav-item 
                            ${this.state.activeTab.endsWith(path)
                                ? `nav-active ${Fonts.Weights.Montserrat900}`
                                : `${Fonts.Weights.Montserrat600}`
                            } ${Fonts.Sizes.Montserrat16px}`
                        }
                        onClickCapture={(e) => this._changeActiveTab(e, path)}
                    >
                        <a href={path}>{location}</a>
                    </div>
                    {index !== Pages.length - 1 && <div class="nav-divider"></div>}
                </>))}
            </div>
        </div>
    }
}