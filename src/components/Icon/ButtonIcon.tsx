import _ from 'lodash';
import * as React from 'react';
import { ViewStyle, Image } from 'react-native';

// svg
import BluetoothIcon from '../../assets/svg/ble.js';
import StarIcon from '../../assets/svg/star.js';
import ShootingStarIcon from '../../assets/svg/shooting_star.js';
import StarColorIcon from '../../assets/svg/star_color.js';
import StarEffectsIcon from '../../assets/svg/star_effects.js';
import AmbientColorIcon from '../../assets/svg/ambient_color.js';
import AmbientEffectsIcon from '../../assets/svg/ambient_effects.js';

import TwinkleIcon from '../../assets/svg/twinkle.js';
import FireflyIcon from '../../assets/svg/firefly.js';
import RandomIcon from '../../assets/svg/random.js';
import RainDropsIcon from '../../assets/svg/raindrops.js';
import BreezeIcon from '../../assets/svg/breeze.js';
import JamboreeIcon from '../../assets/svg/jamboree.js';

import FadeIcon from '../../assets/svg/fade.js';
import BlinkIcon from '../../assets/svg/blink.js';
import NoEffectIcon from '../../assets/svg/no_effect.js';

import MenuIcon from '../../assets/svg/menu.js';

// png
import CloseIcon from '../../assets/png/close.png';
import RightArrowIcon from '../../assets/png/right_arrow.png';
import RainbowEyeIcon from '../../assets/png/rainbow_eye.png';
import RainbowIcon from '../../assets/png/rainbow.png';
import RainbowLoadIcon from '../../assets/png/rainbow_load.png';
import RainbowLightIcon from '../../assets/png/rainbow_light.png';

import { verticalTextScale } from '../../utils/textSize';

const DEFAULT_SIZE = 30;

export const COMPONENT_SVG_REGISTRY = {
  MenuIcon,
  BluetoothIcon,
  StarIcon,
  ShootingStarIcon,
  StarColorIcon,
  StarEffectsIcon,
  AmbientColorIcon,
  AmbientEffectsIcon,
  TwinkleIcon,
  FireflyIcon,
  RandomIcon,
  RainDropsIcon,
  BreezeIcon,
  JamboreeIcon,
  FadeIcon,
  BlinkIcon,
  NoEffectIcon,
};

export const COMPONENT_PNG_REGISTRY = {
  CloseIcon,
  RightArrowIcon,
  RainbowEyeIcon,
  RainbowIcon,
  RainbowLoadIcon,
  RainbowLightIcon,
};

interface Props {
  color?: string;
  name: string;
  size?: number;
  height?: number;
  width?: number;
  style?: ViewStyle;
  disableScale?: boolean;
}

const ButtonIcon = ({
  name,
  size,
  style,
  color,
  height,
  width,
  disableScale,
}: Props) => {
  const ComponentIcon = _.get(COMPONENT_SVG_REGISTRY, name);
  const ImageSource = _.get(COMPONENT_PNG_REGISTRY, name);

  if (!ComponentIcon && !ImageSource) return null;

  const actualHeight = height || size || DEFAULT_SIZE;
  const actualWidth = width || size || DEFAULT_SIZE;

  const iconStyle = {
    width: disableScale ? actualWidth : verticalTextScale(actualWidth),
    height: disableScale ? actualHeight : verticalTextScale(actualHeight),
  };

  return ComponentIcon ? (
    <ComponentIcon
      color={color}
      style={[iconStyle, style]}
      height={actualHeight}
      width={actualWidth}
    />
  ) : (
    // @ts-ignore
    <Image resizeMode="cover" source={ImageSource} style={[iconStyle, style]} />
  );
};

export default ButtonIcon;
