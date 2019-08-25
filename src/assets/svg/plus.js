import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={22} height={22} fill="none" {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10z"
            stroke="#BDBDBD"
        />
        <Path
            d="M15.033 10.658h-3.691V6.967a.342.342 0 1 0-.684 0v3.691H6.967a.342.342 0 1 0 0 .684h3.691v3.691a.342.342 0 1 0 .684 0v-3.691h3.691a.342.342 0 1 0 0-.684z"
            fill="#BDBDBD"
        />
    </Svg>
);

export default SvgComponent;
