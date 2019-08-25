import React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={120} height={120} {...props}>
        <G fill="none" fillRule="evenodd">
            <Path d="M0 0h120v120H0z" />
            <Path
                d="M102.426 17.574c4.687 4.686 4.687 12.284 0 16.97-4.686 4.686-12.284 4.686-16.97 0-14.059-14.059-36.853-14.059-50.912 0-14.059 14.059-14.059 36.853 0 50.912 14.059 14.059 36.853 14.059 50.912 0 4.686-4.686 12.284-4.686 16.97 0 4.687 4.686 4.687 12.284 0 16.97-23.431 23.432-61.42 23.432-84.852 0-23.432-23.431-23.432-61.42 0-84.852 23.431-23.432 61.42-23.432 84.852 0z"
                fill="#00AEFE"
                fillRule="nonzero"
            />
        </G>
    </Svg>
);

export default SvgComponent;
