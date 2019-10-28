import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const SvgComponent = props => (
  <Svg width="367px" height="368px" viewBox="0 0 367 368" {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="rain"
        fill={props.color} // eslint-disable-line
        fillRule="nonzero">
        <G
          id="Group"
          transform="translate(88.000000, 41.000000)"
          stroke={props.color} // eslint-disable-line
          strokeWidth={1.3148}>
          <Path
            d="M124.1,163.1 C117.9,151.8 106.3,132.8 93.5,112.3 C80.7,132.8 69.1,151.8 62.9,163.1 C62.7,163.6 62.5,164.5 62,166.2 C61.1,169.1 60.7,172.2 60.7,175.2 C60.7,193.3 75.4,208 93.5,208 C111.6,208 126.3,193.3 126.3,175.2 C126.3,172.2 125.9,169.1 125,166.2 C124.5,164.5 124.3,163.6 124.1,163.1 Z"
            id="Path"
          />
          <Path
            d="M182.7,149.8 C181.3,144.8 179.7,139.9 177.3,135.4 C158.3,100.6 93.5,0.6 93.5,0.6 C93.5,0.6 28.7,100.6 9.7,135.4 C7.3,139.8 5.7,144.8 4.3,149.8 C2,157.9 0.8,166.4 0.8,175.2 C0.8,226.4 42.3,267.9 93.5,267.9 C144.7,267.9 186.2,226.4 186.2,175.2 C186.2,166.3 185,157.9 182.7,149.8 Z M93.5,222.9 C67.2,222.9 45.7,201.5 45.7,175.1 C45.7,170.7 46.3,166.3 47.5,162 C48.4,158.6 48.9,157.3 49.2,156.8 C57.7,141.2 76.2,111.4 93.5,84.1 C110.8,111.5 129.2,141.2 137.8,156.8 C138,157.3 138.5,158.7 139.5,162 C140.7,166.3 141.3,170.7 141.3,175.1 C141.3,201.5 119.8,222.9 93.5,222.9 Z"
            id="Shape"
          />
        </G>
        <Path
          d="M183.5,367.7 C82.1,367.7 0,285.5 0,184.1 C0,82.7 82.1,0.4 183.5,0.4 C284.9,0.4 367,82.7 367,184.1 C367,285.5 284.3,367.7 183.5,367.7 Z M183.5,10.1 C87.5,10.1 9.6,88 9.6,184.1 C9.6,280.2 87.5,358.1 183.5,358.1 C279.5,358.1 357.4,280.2 357.4,184.1 C357.4,88 279,10.1 183.5,10.1 Z"
          id="Shape"
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;