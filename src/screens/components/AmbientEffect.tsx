import React from 'react';
import { View } from 'react-native';
import MenuButton from '../../components/button/MenuButton';

interface Props {
  selectedIcon: string;
  onPressFade: () => void;
  onPressBlink: () => void;
  onPressNoEffect: () => void;
}

const AmbientEffect = ({
  selectedIcon,
  onPressFade,
  onPressBlink,
  onPressNoEffect,
}: Props) => {
  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      <MenuButton
        selected={selectedIcon === 'FadeIcon'}
        iconName="FadeIcon"
        textLabel="Fade"
        rightBorder
        onPress={onPressFade}
      />
      <MenuButton
        selected={selectedIcon === 'BlinkIcon'}
        iconName="BlinkIcon"
        textLabel="Blink"
        rightBorder
        onPress={onPressBlink}
      />
      <MenuButton
        selected={selectedIcon === 'NoEffectIcon'}
        iconName="NoEffectIcon"
        textLabel={`No\nEffect`}
        onPress={onPressNoEffect}
      />
    </View>
  );
};

export default AmbientEffect;
