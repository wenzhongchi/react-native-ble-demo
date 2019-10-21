import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 109.8 118.1" {...props}>
    <Path
      fill={props.color} // eslint-disable-line
      d="M53.9 80.1c-19 0-34.4-15.4-34.4-34.4s15.4-34.4 34.4-34.4 34.4 15.4 34.4 34.4-15.4 34.4-34.4 34.4zm0-67c-18 0-32.6 14.6-32.6 32.6s14.6 32.6 32.6 32.6 32.6-14.6 32.6-32.6-14.7-32.6-32.6-32.6z"
    />
    <Path
      fill={props.color} // eslint-disable-line
      d="M31 45.3c4.6-5.8 10.4-9.7 17.7-11.2 8.7-1.8 16.4.7 23.2 6.3 1.8 1.4 3.2 3.2 4.8 4.9v1c-1.4 1.5-2.9 3-4.4 4.5-.5.4-.6.8-.3 1.4.6 1.1 1.2 2.2 1.7 3.3.5 1 .2 2-.6 2.4s-1.8 0-2.3-.9c-.6-1.2-1.2-2.3-1.8-3.5-1.7.9-3.3 1.8-5.1 2.7.4.9.9 1.8 1.3 2.6.2.4.4.7.5 1.1.4.9.1 1.8-.7 2.2s-1.7.1-2.1-.8c-.6-1.2-1.2-2.4-1.8-3.5-.1-.2-.5-.5-.8-.5-1.6.3-3.2.6-5.1.9 0 1.1.1 2.4 0 3.7-.1.5-.5 1.1-1 1.3-.4.2-1.2 0-1.6-.2-.3-.2-.5-.9-.5-1.3-.1-1.2 0-2.4 0-3.5-1.8-.4-3.5-.7-5.2-1-.2 0-.6.3-.7.5-.6 1.1-1.1 2.2-1.7 3.3-.5 1-1.4 1.4-2.2.9-.8-.4-1.1-1.3-.6-2.4.6-1.2 1.1-2.3 1.7-3.5l-5.1-2.7c-.6 1.2-1.1 2.3-1.7 3.4-.5 1-1.5 1.4-2.3 1s-1.1-1.4-.5-2.4c.5-1.1 1.1-2.2 1.7-3.3.3-.5.1-.8-.3-1.2-1.5-1.5-3-3-4.4-4.6.2-.2.2-.5.2-.9zm3.8.5c11.9 12.9 28.5 11.1 38.2-.1-11.1-12-27.4-11.8-38.2.1z"
    />
  </Svg>
);

export default SvgComponent;
