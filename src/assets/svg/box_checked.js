import React from "react";
import Svg, { Defs, Path, G, Rect, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
    <Svg width={20} height={20} {...props}>
        <Defs>
            <Path
                id="prefix__a"
                d="M10.105 2L4.567 7.537l-2.42-1.931L1 7.04l3.06 2.448.641.512.584-.583 6.12-6.121L10.105 2z"
            />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Rect fill="#00AEFE" width={20} height={20} rx={4} />
            <G transform="translate(4 4)">
                <Path d="M0 0h12v12H0z" />
                <Path fillOpacity={0} fill="#FFF" d="M0 0h12v12H0z" />
                <Use fill="#FFF" xlinkHref="#prefix__a" />
            </G>
        </G>
    </Svg>
);

export default SvgComponent;
