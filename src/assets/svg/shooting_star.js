import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 41.4 48.8" {...props}>
    <Path
      fill={props.color} // eslint-disable-line
      d="M35.5 20.4c-.6-.6-1.7-.6-2.3 0l-4.1 4.1c-.8.8-2 .8-2.8 0s-.8-2 0-2.8l6.4-6.4c.6-.6.6-1.5 0-2.1s-1.5-.6-2.1 0l-5.3 5.3c-.8.8-2 .8-2.8 0s-.8-2 0-2.8l3-3c.6-.6.6-1.5 0-2.1s-1.5-.6-2.1 0L11.5 22.5c-.6.3-1.1.8-1.6 1.3-3.4 3.4-3.4 8.9 0 12.3s8.9 3.4 12.3 0l13.4-13.4c.5-.6.5-1.7-.1-2.3zM16 34.8c-3 0-5.4-2.4-5.4-5.4S13 24 16 24s5.4 2.4 5.4 5.4-2.5 5.4-5.4 5.4z"
    />
  </Svg>
);

export default SvgComponent;
