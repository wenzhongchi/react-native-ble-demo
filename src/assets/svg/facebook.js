import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={30} height={30} fill="none" {...props}>
        <Path
            d="M30 15c0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15zM1.364 15C1.364 7.469 7.469 1.364 15 1.364c7.531 0 13.636 6.105 13.636 13.636 0 7.531-6.105 13.636-13.636 13.636-7.531 0-13.636-6.105-13.636-13.636z"
            fill="#4F5F8E"
        />
        <Path
            d="M15.944 24.167v-8.345H18.6l.42-2.765h-3.075V11.67c0-.721.228-1.41 1.227-1.41h1.995V7.5h-2.833c-2.382 0-3.032 1.627-3.032 3.883v1.673h-1.635v2.766h1.635v8.345h2.643z"
            fill="#4F5F8E"
        />
    </Svg>
);

export default SvgComponent;
