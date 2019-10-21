import React from 'react';
import Svg, { Path, Text, Circle } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 109.8 118.1" {...props}>
    <Path
      fill={props.color} // eslint-disable-line
      d="M54 78.6c-19 0-34.4-15.4-34.4-34.4S35 9.8 54 9.8s34.4 15.4 34.4 34.4S72.9 78.6 54 78.6zm0-67c-18 0-32.6 14.6-32.6 32.6S36 76.8 54 76.8s32.6-14.6 32.6-32.6S71.9 11.6 54 11.6z"
    />
    <Circle
      fill={props.color} // eslint-disable-line
      stroke="#FFF"
      strokeWidth={1.498}
      strokeMiterlimit={10}
      cx={37.3}
      cy={29.7}
      r={5.1}
    />
    <Circle
      fill="none"
      fill={props.color} // eslint-disable-line
      strokeWidth={1.498}
      strokeMiterlimit={10}
      cx={54.4}
      cy={29.7}
      r={5.1}
    />
    <Circle
      fill={props.color} // eslint-disable-line
      stroke="#FFF"
      strokeWidth={1.498}
      strokeMiterlimit={10}
      cx={70.6}
      cy={29.7}
      r={5.1}
    />
    <Circle
      fill={props.color} // eslint-disable-line
      stroke="#FFF"
      strokeWidth={1.498}
      strokeMiterlimit={10}
      cx={37.3}
      cy={44.1}
      r={5.1}
    />
    <Circle
      fill={props.color} // eslint-disable-line
      stroke="#FFF"
      strokeWidth={1.498}
      strokeMiterlimit={10}
      cx={54.4}
      cy={44.1}
      r={5.1}
    />
    <Circle
      fill="none"
      stroke="#FFF"
      strokeWidth={1.498}
      strokeMiterlimit={10}
      cx={70.6}
      cy={44.1}
      r={5.1}
    />
    <Circle
      fill="none"
      stroke="#FFF"
      strokeWidth={1.498}
      strokeMiterlimit={10}
      cx={37.3}
      cy={57.7}
      r={5.1}
    />
    <Circle
      fill={props.color} // eslint-disable-line
      stroke="#FFF"
      strokeWidth={1.498}
      strokeMiterlimit={10}
      cx={54.4}
      cy={57.7}
      r={5.1}
    />
    <Circle
      fill="none"
      stroke="#FFF"
      strokeWidth={1.498}
      strokeMiterlimit={10}
      cx={70.6}
      cy={57.7}
      r={5.1}
    />
  </Svg>
);

export default SvgComponent;
