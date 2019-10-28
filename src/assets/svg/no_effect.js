import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const SvgComponent = props => (
  <Svg width="368px" height="366px" viewBox="0 0 368 366" {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="no-effect"
        fill={props.color} // eslint-disable-line
        fillRule="nonzero">
        <Path
          d="M184,365.5 C82.4,365.5 0,283.9 0,183.1 C0,82.3 82.3,0.6 184,0.6 C285.7,0.6 368,82.2 368,183 C368,283.8 285.7,365.5 184,365.5 Z M184,10.2 C87.7,10.2 9.6,87.7 9.6,183.1 C9.6,278.5 87.8,356 184,356 C280.2,356 358.4,278.5 358.4,183.1 C358.4,87.7 280.3,10.2 184,10.2 Z"
          id="Shape"
        />
        <G id="Group" transform="translate(90.000000, 86.000000)">
          <Path
            d="M94,114 C99.9,114 104.7,107.6 104.7,99.7 L104.7,14.3 C104.7,6.3 99.9,-5.68434189e-14 94,-5.68434189e-14 C88.1,-5.68434189e-14 83.3,6.4 83.3,14.3 L83.3,99.7 C83.3,107.6 88.2,114 94,114 Z"
            id="Path"
          />
          <Path
            d="M120.2,4.2 L120.2,27 C147,37.6 165.7,63.1 165.7,93.3 C165.7,132.5 133.6,164.4 94,164.4 C54.4,164.4 22.3,132.6 22.3,93.3 C22.3,63 41,37.6 67.8,27 L67.8,4.2 C29.2,15.3 0.9,50.9 0.9,92.8 C0.9,143.7 42.6,185.1 94,185.1 C145.4,185.1 187.1,143.7 187.1,92.8 C187.1,50.9 158.7,15.3 120.2,4.2 Z"
            id="Path"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
