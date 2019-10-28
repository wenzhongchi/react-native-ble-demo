import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const SvgComponent = props => (
  <Svg width="367px" height="368px" viewBox="0 0 367 368" {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="fade"
        fill={props.color} // eslint-disable-line
        fillRule="nonzero">
        <Path
          d="M183.5,367.5 C82.1,367.5 0,285.4 0,184.1 C0,82.8 82.1,0.6 183.5,0.6 C284.9,0.6 367,82.7 367,184 C367,285.4 284.3,367.5 183.5,367.5 Z M183.5,10.2 C87.5,10.2 9.6,88.1 9.6,184 C9.6,279.9 87.5,357.8 183.5,357.8 C279.5,357.8 357.4,280 357.4,184.1 C357.4,88.2 279,10.2 183.5,10.2 Z"
          id="Shape"
        />
        <Path
          d="M109.3,276.3 C117.3,248.6 125.3,220.8 133.3,193.1 C133.9,191.5 133.9,189.9 133.3,188.8 C130.6,178.7 127.5,168 124.2,157.9 C118.8,140.3 114.1,122.2 108.7,104.6 C108.7,104 108.1,103 108.1,101.9 C171.6,131.8 234.5,161.1 297.5,191 C234,220.9 171.1,250.2 107.6,280.1 C108.8,278.4 109.3,277.4 109.3,276.3 Z M277.4,191 C275.8,191 275.3,190.4 274.7,190.4 C232,190.4 188.8,190.4 146.2,190.4 C144.1,190.4 143.5,191 143,193.1 C136.6,216.1 129.7,238.5 123.3,260.8 C123.3,261.4 122.7,262.4 122.7,263.5 C173.9,239.5 225.6,215.6 277.4,191 Z"
          id="Shape"
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
