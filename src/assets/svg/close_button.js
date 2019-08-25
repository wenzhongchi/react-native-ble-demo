import React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
    <Svg width={14} height={14} {...props}>
        <G fill="none" fillRule="evenodd">
            <Path fillOpacity={0} fill="#FFF" d="M-5-5h24v24H-5z" />
            <Path fillOpacity={0} fill="#FFF" d="M-5-5h24v24H-5z" />
            <Path
                d="M5.586 7L.636 2.05 2.05.636 7 5.586l4.95-4.95 1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7z"
                fill="#000"
                fillRule="nonzero"
            />
        </G>
    </Svg>
);

export default SvgComponent;
