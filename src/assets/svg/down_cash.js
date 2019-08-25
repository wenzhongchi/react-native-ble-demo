import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={8} height={7} fill="none" {...props}>
        <Path
            d="M3.134 6.5a1 1 0 0 0 1.732 0L7.464 2A1 1 0 0 0 6.598.5H1.402A1 1 0 0 0 .536 2l2.598 4.5z"
            fill="#FA7268"
        />
    </Svg>
);

export default SvgComponent;
