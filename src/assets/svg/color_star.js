import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 41.4 48.8" {...props}>
    <Path
      fill={props.color} // eslint-disable-line
      d="M29.1 22.2l2-11.6-10.4 5.5-10.4-5.5 2 11.6-8.4 8.2 11.6 1.7 5.2 10.6 5.2-10.6 11.6-1.7-8.4-8.2zm-4.4 8.4l-4.1 8.2-4.1-8.2-9.1-1.3 6.6-6.4h13.1l6.6 6.4-9 1.3z"
    />
  </Svg>
);

export default SvgComponent;
