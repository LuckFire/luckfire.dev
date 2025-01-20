import { Component } from "preact"; 
import { Pages } from '#/lib/constants';

export class Topbar extends Component {
    render() {
        return <>
            <div class="topbar">
                <div class="site-info"></div>
                <div class="site-nav">
                    {
                        Pages.map(({ path, location }, index) => {
                            return <>
                                <div class="nav-item">
                                    <a href={path}>{location}</a>
                                </div>
                                {index !== Pages.length - 1 && <div class="nav-divider"></div>}
                            </>
                        })
                    }
                </div>
            </div>
        </>
    }
}