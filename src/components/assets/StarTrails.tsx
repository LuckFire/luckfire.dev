import { Component } from "preact"; 

export class StarTrails extends Component {
    public get trails() {
        const trails = [];

        for (let i = 1; i < 15; i++) {
            trails.push(<circle
                r={i*5}
                cx="50"
                cy="50"
                fill="none"
                stroke="white"
                stroke-width="0.05"
                stroke-dasharray={`100, 5`}
            />);
        }

        return trails
    }

    render() {
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" >
            <defs>
                <mask id="star-trails__clip">{this.trails}</mask>
            </defs>
            <g mask="url(#star-trails__clip)">
                <circle r="70" cx="50" cy="50" />
            </g>
        </svg>
    }
}