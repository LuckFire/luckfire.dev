import { Component } from "preact"; 
import { Fonts, Pages } from '#/lib/constants';

export class Topbar extends Component {
    render() {
        return <>
            <div class="topbar">
                <div class="site-nav">
                    {Pages.map(({ path, location }, index) => (<>
                        <div class={`${Fonts.Weights.Montserrat600} ${Fonts.Sizes.Montserrat16px}`}>
                            <a href={path}>{location}</a>
                        </div>
                        {index !== Pages.length - 1 && <div class="nav-divider"></div>}
                    </>))}
                </div>
            </div>
        </>
    }
}