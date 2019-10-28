import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const SvgComponent = props => (
  <Svg width="368px" height="368px" viewBox="0 0 368 368" {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="starry-night-colors---icon"
        fill={props.color} // eslint-disable-line
        fillRule="nonzero">
        <Path
          d="M275.901604,133.071429 L297.811052,0.328571429 L184,63.2828571 L70.1889483,0.328571429 L92.0983957,133.071429 L0.196791444,226.911429 L127.127273,246.362857 L184,367.671429 L240.872727,246.362857 L367.803209,226.911429 L275.901604,133.071429 Z M227.753298,229.211429 L182.884848,323.051429 L138.016399,229.211429 L38.4399287,214.36 L110.596791,141.154286 L253.92656,141.154286 L326.083422,214.36 L227.753298,229.211429 Z"
          id="Shape"
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
