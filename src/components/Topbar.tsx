import { Component } from "preact"; 

export class Topbar extends Component {
    render() {
        const pages = [
            {
                path: '/',
                location: 'Home'
            },
        ];

        return <>
            <div class="topbar">
                <div class="site-info"></div>
                <div class="site-nav">
                    {
                        pages.map(({ path, location }, index) => {
                            return <>
                                <div class="nav-item">
                                    <a href={path}>{location}</a>
                                </div>
                                {index !== pages.length - 1 && <div class="nav-divider"></div>}
                            </>
                        })
                    }
                </div>
            </div>
        </>
    }
}