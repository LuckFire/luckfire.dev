import { Component } from "preact"; 
import { Fonts, Pages } from '#/lib/constants';
import { TargetedEvent } from "preact/compat";

export class Topbar extends Component<{}, { activeTab: string }> {
    constructor(props: {}) {
        super(props);

        this.state = {
            activeTab: window.location.hash.replace('#', '')
        };
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