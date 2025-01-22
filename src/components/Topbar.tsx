import { Component } from "preact"; 
import { Context, Fonts, Pages } from '#/lib/constants';

export class Topbar extends Component {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return <Context.AppContext.Consumer>{({ currentPath }) =>
            <div class="topbar">
                <div class="site-nav">
                    {Pages.map(({ path, location }, index) => (<>
                        <div
                            class={`nav-item 
                                ${currentPath.endsWith(path)
                                    ? `nav-active ${Fonts.Weights.Montserrat900}`
                                    : `${Fonts.Weights.Montserrat600}`
                                } ${Fonts.Sizes.Montserrat16px}`
                            }
                        >
                            <a href={path}>{location}</a>
                        </div>
                        {index !== Pages.length - 1 && <div class="nav-divider"></div>}
                    </>))}
                </div>
            </div>
        }</Context.AppContext.Consumer>
    }
}