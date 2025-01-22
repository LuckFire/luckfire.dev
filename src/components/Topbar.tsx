import { Component } from "preact"; 
import { Context, Fonts, Pages } from '#/lib/constants';

export class Topbar extends Component {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return <div class="topbar">
            <Context.AppContext.Consumer>{({ currentPath }) =><>
                <div class="site-nav">
                    {console.log(currentPath)}
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
            </>}</Context.AppContext.Consumer>
        </div>
    }
}