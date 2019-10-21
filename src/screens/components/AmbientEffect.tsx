import React from 'react';
import { View } from 'react-native';
import MenuButton from '../../components/button/MenuButton';

interface Props {
  onPressFade: () => void;
  onPressBlink: () => void;
  onPressNoEffect: () => void;
}

const AmbientEffect = ({
  onPressFade,
  onPressBlink,
  onPressNoEffect,
}: Props) => {
  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      <MenuButton
        iconName="FadeIcon"
        textLabel="Fade"
        rightBorder
        onPress={onPressFade}
        iconSize={130}
        iconMarginTop={50}
      />
      <MenuButton
        iconName="BlinkIcon"
        textLabel="Blink"
        rightBorder
        onPress={onPressBlink}
        iconSize={130}
        iconMarginTop={50}
      />
      <MenuButton
        iconName="NoEffectIcon"
        textLabel={`No\nEffect`}
        onPress={onPressNoEffect}
        iconSize={130}
        iconMarginTop={50}
      />
    </View>
  );
};

export default AmbientEffect;
