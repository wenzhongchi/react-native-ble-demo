import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={32} height={32} {...props}>
        <Path
            fill="#212529"
            fillRule="evenodd"
            d="M10.736 5h16.789a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.408a6 6 0 0 1-4.685-2.252L.438 18.142a2 2 0 0 1-.102-2.359l5.407-8.111A6 6 0 0 1 10.736 5zm8.348 11l3.118-3.118a1.102 1.102 0 1 0-1.56-1.56l-3.117 3.119-3.118-3.118a1.102 1.102 0 1 0-1.56 1.559L15.967 16l-3.118 3.118a1.102 1.102 0 1 0 1.559 1.56l3.118-3.119 3.118 3.118a1.102 1.102 0 1 0 1.559-1.559L19.084 16z"
        />
    </Svg>
);

export default SvgComponent;
