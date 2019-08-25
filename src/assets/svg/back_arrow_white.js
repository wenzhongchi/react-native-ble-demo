import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={21} height={15} fill="none" {...props}>
        <Path
            d="M.286 8.217l6.25 6.486a.952.952 0 0 0 1.38 0 1.041 1.041 0 0 0 0-1.433L3.334 8.513h16.69c.539 0 .976-.453.976-1.013 0-.56-.437-1.014-.976-1.014H3.334L7.916 1.73a1.04 1.04 0 0 0 0-1.433.956.956 0 0 0-.69-.297c-.25 0-.5.099-.69.297L.285 6.783a1.04 1.04 0 0 0 0 1.434z"
            fill="#fff"
        />
    </Svg>
);

export default SvgComponent;
