import _ from 'lodash';
import * as React from 'react';
import { ViewStyle, Image } from 'react-native';

// svg
import StarIcon from '../../assets/svg/star.js';

// png

const DEFAULT_SIZE = 30;

export const COMPONENT_SVG_REGISTRY = {
  StarIcon,
};

export const COMPONENT_PNG_REGISTRY = {};

interface Props {
  color?: string;
  name: string;
  size?: number;
  height?: number;
  width?: number;
  style?: ViewStyle;
}

const ButtonIcon = ({ name, size, style, color, height, width }: Props) => {
  const ComponentIcon = _.get(COMPONENT_SVG_REGISTRY, name);
  const ImageSource = _.get(COMPONENT_PNG_REGISTRY, name);

  if (!ComponentIcon && !ImageSource) return null;

  const actualHeight = height || size || DEFAULT_SIZE;
  const actualWidth = width || size || DEFAULT_SIZE;

  const iconStyle = {
    alignSelf: 'center',
    width: actualWidth,
    height: actualHeight,
  };

  return ComponentIcon ? (
    <ComponentIcon fill={color} style={[iconStyle, style]} />
  ) : (
    // @ts-ignore
    <Image source={ImageSource} style={[iconStyle, style]} />
  );
};

export default ButtonIcon;
