import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={20} height={20} fill="none" {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 5.396L10 0 0 5.396v3.188h20V5.396zm-18.805.726L10 1.37l8.805 4.752v1.252H1.195V6.122zm.685 10.132v1.209h-.685v1.328h17.61v-1.328h-.686v-1.209H20V20H0v-3.746h1.88zm1.195 0H1.88V9.277h1.195v6.977zm3.82 0v1.209h-3.82v-1.209h3.82zm1.195 0H6.895V9.277H8.09v6.977zm3.82 0v1.209H8.09v-1.209h3.82zm1.195 0H11.91V9.277h1.195v6.977zm0 0h3.82v1.209h-3.82v-1.209zm3.82 0V9.277h1.194v6.977h-1.195zM10 6.681a1.862 1.862 0 0 1-1.851-1.873c0-1.035.828-1.873 1.85-1.873 1.023 0 1.852.838 1.852 1.873A1.862 1.862 0 0 1 10 6.68zm.656-1.873a.66.66 0 0 1-.656.664.66.66 0 0 1-.656-.664.66.66 0 0 1 .656-.664.66.66 0 0 1 .656.664z"
            fill="#BFBFBF"
        />
    </Svg>
);

export default SvgComponent;
