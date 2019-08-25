import React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
    <Svg width={10} height={10} {...props}>
        <G fill="#FFF" fillRule="evenodd" opacity={0.48}>
            <Path fillOpacity={0} d="M-1-1h12v12H-1z" />
            <Path d="M5 3.586L7.828.757l1.415 1.415L6.414 5l2.829 2.828-1.415 1.415L5 6.414 2.172 9.243.757 7.828 3.586 5 .757 2.172 2.172.757z" />
        </G>
    </Svg>
);

export default SvgComponent;
