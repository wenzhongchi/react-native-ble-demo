import React from 'react';
import { View } from 'react-native';
import MenuButton from '../../components/button/MenuButton';

interface Props {
  onPressTwinkle: () => void;
  onPressFirefly: () => void;
  onPressRandom: () => void;
  onPressLightning: () => void;
}

const NightEffect = ({
  onPressTwinkle,
  onPressFirefly,
  onPressRandom,
  onPressLightning,
}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <MenuButton
          iconName="TwinkleIcon"
          textLabel="Twinkle"
          rightBorder
          bottomBorder
          onPress={onPressTwinkle}
        />
        <MenuButton
          iconName="FireflyIcon"
          textLabel="Firefly"
          bottomBorder
          onPress={onPressFirefly}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <MenuButton
          iconName="RandomIcon"
          textLabel="Random"
          rightBorder
          onPress={onPressRandom}
        />
        <MenuButton
          iconName="LightningIcon"
          textLabel="Lightning"
          onPress={onPressLightning}
        />
      </View>
    </View>
  );
};

export default NightEffect;
