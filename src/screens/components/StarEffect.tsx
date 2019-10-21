import React from 'react';
import { View } from 'react-native';
import MenuButton from '../../components/button/MenuButton';

interface Props {
  onPressTwinkle: () => void;
  onPressFirefly: () => void;
  onPressRandom: () => void;
  onPressRainDrops: () => void;
  onPressBreeze: () => void;
  onPressJamboree: () => void;
}

const StarEffect = ({
  onPressTwinkle,
  onPressFirefly,
  onPressRandom,
  onPressRainDrops,
  onPressBreeze,
  onPressJamboree,
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
          rightBorder
          bottomBorder
          onPress={onPressFirefly}
        />
        <MenuButton
          iconName="BreezeIcon"
          textLabel="Breeze"
          bottomBorder
          onPress={onPressBreeze}
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
          iconName="RainDropsIcon"
          textLabel="Rain Drops"
          rightBorder
          onPress={onPressRainDrops}
        />
        <MenuButton
          iconName="JamboreeIcon"
          textLabel="Jamboree"
          onPress={onPressJamboree}
        />
      </View>
    </View>
  );
};

export default StarEffect;
