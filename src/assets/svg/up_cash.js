import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={8} height={7} fill="none" {...props}>
        <Path
            d="M3.134.5a1 1 0 0 1 1.732 0L7.464 5a1 1 0 0 1-.866 1.5H1.402A1 1 0 0 1 .536 5L3.134.5z"
            fill="#1CD46A"
        />
    </Svg>
);

export default SvgComponent;
