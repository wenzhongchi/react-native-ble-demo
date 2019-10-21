import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 109.8 118.1" {...props}>
    <Path
      fill={props.color} // eslint-disable-line
      d="M53.1 77.2c-19 0-34.4-15.4-34.4-34.4S34.1 8.4 53.1 8.4s34.4 15.4 34.4 34.4c0 18.9-15.4 34.4-34.4 34.4zm0-67.1c-18 0-32.6 14.6-32.6 32.6s14.6 32.6 32.6 32.6 32.6-14.6 32.6-32.6c0-17.9-14.6-32.6-32.6-32.6z"
    />
    <G
      fill={props.color} // eslint-disable-line
    >
      <Path d="M48.4 35.1c-.1-2 .7-3.6 2.4-4.8-.7-1-1.5-1.9-2.4-2.7-1-.9-2.2-1.6-3.4-2.2-.3-.2-.5-.5-.4-.8.1-.5.6-.7 1-.5 1.2.6 2.3 1.3 3.4 2.1 1.2 1 2.2 2 3 3.3.1.1.1.1.3.1 1.1-.2 2.2-.2 3.2.1.1 0 .2 0 .3-.1 1.6-2.4 3.8-4.2 6.4-5.4.3-.2.7-.1.9.3.2.4.1.7-.3.9-.8.5-1.6.9-2.3 1.4-1.4 1-2.6 2.2-3.6 3.7 1.6 1.3 2.3 2.9 2.2 5 .2 0 .4 0 .6-.1 1.2-.2 2.4-.2 3.6-.1 1.8.2 3.6.7 5.1 1.8 1.3.9 2.3 2.2 3 3.6.7 1.3 1.1 2.7 1.4 4.1.1.4-.2.7-.5.8-.4.1-.7-.1-.8-.5-.2-1-.5-2.1-1-3-.7-1.5-1.5-2.9-2.9-3.8-1.1-.8-2.4-1.3-3.8-1.5-1.1-.2-2.1-.2-3.2-.1-1.7.1-3.3.5-4.9 1-.3.1-.7.2-1 .3.4 1.4.9 2.8 1.5 4.1 1.3 2.9 3.1 5.5 5.3 7.7 1.7 1.7 3.6 3.1 5.6 4.4 1.5 1 3.1 1.8 4.7 2.5 0 0 .1 0 .2.1 0-.4.1-.9.1-1.3 0-1.4.1-2.8.1-4.3 0-.6 0-1.1-.1-1.7 0-.4.2-.8.6-.8s.7.2.7.7c0 1.1.1 2.2.1 3.3 0 1.4-.1 2.8-.2 4.2-.1 1-1 1.5-1.9 1.1-2.9-1.3-5.7-2.9-8.2-4.9-.9-.7-1.7-1.4-2.5-2.2l-.1-.1c-.1.4-.1.7-.2 1.1-.2.8-.3 1.7-.5 2.5-.3.8-.7 1.6-1 2.4-.6 1.1-1.2 2.2-2.1 3.1-.5.6-1.2 1-1.9 1.3-1.3.4-2.4.1-3.4-.6-1-.8-1.8-1.8-2.4-2.9-.5-.9-.8-1.8-1.3-2.7-.6-1.1-.6-2.3-.9-3.4-.1-.4-.2-.9-.2-1.3l-.3.3c-2.2 1.9-4.6 3.5-7.2 4.7-1.3.6-2.6 1.2-3.9 1.7-.9.4-1.8-.2-1.8-1.2 0-1.6 0-3.3.1-4.9.2-3 .6-6 1.7-8.8.6-1.6 1.4-3.1 2.6-4.4 1.3-1.4 2.8-2.2 4.6-2.6 1.5-.4 3-.4 4.5-.2.3 0 .8.1 1.4.2zM34.6 55.7s.1 0 .1.1c1.3-.6 2.6-1.1 3.8-1.8 3.2-1.6 6.1-3.6 8.6-6.2 2.6-2.8 4.5-6 5.8-9.6.1-.2 0-.3-.2-.4-2.2-.9-4.4-1.5-6.8-1.7-1.2-.1-2.4 0-3.5.3-2.3.6-3.9 1.9-5 3.9-1.4 2.5-2 5.3-2.4 8.1-.1 1-.2 2.1-.3 3.2-.1 1.4-.1 2.8-.1 4.1zm14-1.8c3.4-.7 6.7-.7 10 .1v-.1c.2-1.3.5-2.5.7-3.8 0-.2-.1-.3-.3-.4-1.4-.4-2.9-.7-4.4-.8-1 0-2.1 0-3.1.1-.7 0-1.3.1-2 .3-.6.1-1.1.3-1.7.4.2 1.4.5 2.8.8 4.2zm8.9-18.3c.3-1.3 0-2.6-1-3.6-.3-.3-.7-.7-1.2-.9-.8-.3-1.7-.4-2.6-.2-.3 0-.6.1-.8.2-.5.3-.9.6-1.3 1-.7.9-1 1.9-.9 3 0 .2.1.3.3.3 1 .3 2 .6 3 1 .5.2 1 .2 1.5 0 1-.2 2-.5 3-.8zm.5 19.7c-3-.6-5.9-.7-8.9-.1.3.7.6 1.3 1 1.9.5.8 1 1.6 1.8 2.3 1.1 1 2.3 1 3.4 0 .6-.5 1-1 1.4-1.6.5-.8.9-1.7 1.3-2.5zm0-7.3c-.9-1.3-1.7-2.5-2.4-3.9-.7-1.3-1.3-2.7-1.8-4.2-.6 1.5-1.3 2.9-2.1 4.2-.8 1.3-1.7 2.6-2.8 3.8 1.6-.3 3.1-.5 4.6-.5 1.4.1 2.9.3 4.5.6z" />
      <Path d="M61.8 38.6c1 0 2 .1 3 .4 1.6.5 2.7 1.5 3.4 3 .7 1.3 1.1 2.7 1.4 4.1.3 1.7.5 3.4.5 5.1 0 .5-.2 1-.7 1.3s-1 .2-1.5-.1c-2-1.3-3.9-2.8-5.6-4.5-1.9-2.1-3.4-4.4-4.6-7-.4-.8-.1-1.9 1.2-2 1-.2 1.9-.3 2.9-.3 0-.1 0 0 0 0zm6.8 12.6v-.5c-.1-1.3-.2-2.6-.4-3.9-.2-1.4-.6-2.7-1.2-4-.7-1.4-1.8-2.4-3.4-2.7-1.3-.3-2.7-.2-4 0-.2 0-.4.1-.7.1 2.1 4.8 5.4 8.3 9.7 11zM45.1 38.1c1.3 0 2.5.3 3.8.6.8.2 1.2 1.1.8 1.8-1.6 3.1-3.7 5.9-6.4 8.1-1.4 1.2-3 2.2-4.6 3.1-.8.4-1.6.1-1.9-.8-.1-.2-.1-.5 0-.7.2-2.2.5-4.4 1.3-6.4.4-1.2 1-2.4 1.8-3.4.9-1.1 2.1-1.7 3.4-2 .6-.2 1.2-.2 1.8-.3zm-6.9 12.3c4.5-2.4 8-5.8 10.3-10.4h-.1c-1.5-.4-3.1-.6-4.7-.3-1.2.2-2.2.7-2.9 1.7-.8 1.1-1.3 2.3-1.7 3.6-.5 1.7-.8 3.5-.9 5.4z" />
    </G>
  </Svg>
);

export default SvgComponent;
