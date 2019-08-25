import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
            fill="#E0E0E0"
        />
        <Path
            d="M28.066 19.316h-7.382v-7.382a.684.684 0 1 0-1.368 0v7.382h-7.382a.684.684 0 1 0 0 1.368h7.382v7.382a.684.684 0 1 0 1.368 0v-7.382h7.382a.684.684 0 1 0 0-1.368z"
            fill="#fff"
        />
    </Svg>
);

export default SvgComponent;
