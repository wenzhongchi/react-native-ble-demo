import React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
    <Svg width={36} height={24} {...props}>
        <G fill="none" fillRule="evenodd">
            <Rect fill="#F3F5F8" width={36} height={24} rx={3} />
            <Path
                d="M17.429 11.429V8h1.142v3.429H22v1.142h-3.429V16H17.43v-3.429H14V11.43h3.429z"
                fill="#848E97"
                fillRule="nonzero"
            />
        </G>
    </Svg>
);

export default SvgComponent;
