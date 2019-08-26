import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 41.4 48.8" {...props}>
    <Path
      fill="#FFF"
      stroke="#FFF"
      strokeWidth={0.875}
      strokeMiterlimit={10}
      d="M20.9 42.4c-8.6 0-15.6-7-15.6-15.6s7-15.6 15.6-15.6 15.6 7 15.6 15.6c-.1 8.6-7.1 15.6-15.6 15.6zm0-30.3c-8.1 0-14.7 6.6-14.7 14.8 0 8.1 6.6 14.7 14.7 14.7S35.7 35 35.7 26.9c-.1-8.2-6.7-14.8-14.8-14.8z"
    />
    <Path
      fill="#FFF"
      stroke="#FFF"
      strokeWidth={0.875}
      strokeMiterlimit={10}
      d="M28.6 27.6c-1.1-.2-2.2-.5-3.2-.9-1.5-.6-2.6-1.6-3.3-3.1-.5-1.1-.8-2.3-1-3.5-.1-.4-.2-.8-.2-1.2-.1.4-.2.9-.3 1.3-.2 1.1-.5 2.2-.9 3.2-.6 1.5-1.6 2.6-3.1 3.2-1.2.5-2.5.8-3.8 1.1-.3.1-.7.1-1 .2l1.5.3c1.1.2 2.1.5 3.1.9 1.4.6 2.5 1.5 3.1 2.9.5 1.1.8 2.2 1 3.3.1.5.2 1.1.3 1.7.1-.4.2-.9.2-1.3.2-1.1.5-2.2.9-3.2.6-1.6 1.6-2.7 3.2-3.3 1-.4 2-.7 3.1-.9.5-.1 1.1-.2 1.7-.3-.4-.3-.9-.3-1.3-.4zM25 28.7c-1.6.7-2.8 1.9-3.4 3.6-.3.8-.5 1.6-.7 2.4-.2-.9-.5-1.9-.9-2.9-.7-1.5-1.8-2.5-3.3-3.2-.9-.4-1.8-.6-2.6-.8.9-.2 1.8-.5 2.7-.9 1.6-.7 2.7-1.8 3.3-3.5.3-.8.6-1.7.7-2.5.2.9.5 1.8.8 2.7.7 1.6 1.9 2.7 3.5 3.4.8.3 1.7.6 2.5.7-.7.3-1.7.6-2.6 1z"
    />
  </Svg>
);

export default SvgComponent;