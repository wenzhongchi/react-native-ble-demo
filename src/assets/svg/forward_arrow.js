import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
    <Svg width={9} height={14} {...props}>
        <Path
            d="M.412 1.615L1.912 0l6.5 7-6.5 7-1.5-1.615 5-5.385z"
            fill="#BBC3CB"
            fillRule="evenodd"
        />
    </Svg>
);

export default SvgComponent;
