import { Component } from "preact";

type IconProps = {
    scale?: number;
    viewbox: `${number} ${number} ${number} ${number}`;
    size: [number, number];
    paths: string[];
}

export class IconComponent extends Component<IconProps> {
    constructor(props: IconProps) {
        super(props);
    }

    render() {
        const { scale, size, paths, viewbox } = this.props;

        return <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={size[0] * (scale || 1)}
            height={size[1] * (scale || 1)}
            viewBox={viewbox}
        >
            {paths.map((path, i) => (
                <path key={i} d={path} />
            ))}
        </svg>
    }
}