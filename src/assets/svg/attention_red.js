import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={50} height={50} fill="none" {...props}>
        <Path
            d="M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25zM2.892 25c0 12.21 9.898 22.108 22.108 22.108S47.108 37.21 47.108 25 37.21 2.892 25 2.892 2.892 12.79 2.892 25z"
            fill="#FF6C6C"
        />
        <Path
            d="M30.04.513a25 25 0 0 1 5.519 47.148l-1.222-2.622a22.108 22.108 0 0 0-4.88-41.693l.582-2.833z"
            fill="#ECEBEB"
        />
    </Svg>
);

export default SvgComponent;
