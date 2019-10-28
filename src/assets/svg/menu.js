import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const SvgComponent = props => (
  <Svg width="28px" height="20px" viewBox="0 0 28 20" {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G id="iconfinder_menu-alt_134216" fill="#ffffff" fillRule="nonzero">
        <Path
          d="M2,4 L26,4 C27.104,4 28,3.104 28,2 C28,0.896 27.104,0 26,0 L2,0 C0.896,0 0,0.896 0,2 C0,3.104 0.896,4 2,4 Z M26,8 L2,8 C0.896,8 0,8.896 0,10 C0,11.104 0.896,12 2,12 L26,12 C27.104,12 28,11.104 28,10 C28,8.896 27.104,8 26,8 Z M26,16 L2,16 C0.896,16 0,16.896 0,18 C0,19.104 0.896,20 2,20 L26,20 C27.104,20 28,19.104 28,18 C28,16.896 27.104,16 26,16 Z"
          id="Shape"
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
