import React from "react";
import Svg, { Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
    <Svg width={20} height={20} {...props}>
        <Rect
            x={1}
            y={1}
            width={18}
            height={18}
            rx={4}
            fill="#FFF"
            stroke="#CDD4DB"
            strokeWidth={2}
            fillRule="evenodd"
        />
    </Svg>
);

export default SvgComponent;
