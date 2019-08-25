import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={18} height={14} {...props}>
        <Path
            fill="#000"
            d="M4.917 5.898h12.416v2.21H4.924l3.599 3.58-1.571 1.562L.667 7 6.952.75l1.571 1.563z"
        />
    </Svg>
);

export default SvgComponent;
