import React from 'react';
import { View } from 'react-native';
import MenuButton from '../../components/button/MenuButton';

interface Props {
  selectedIcon: string;
  onPressTwinkle: () => void;
  onPressFirefly: () => void;
  onPressRandom: () => void;
  onPressRainDrops: () => void;
  onPressBreeze: () => void;
  onPressJamboree: () => void;
}

const StarEffect = ({
  selectedIcon,
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
          selected={selectedIcon === 'TwinkleIcon'}
          iconName="TwinkleIcon"
          textLabel="Twinkle"
          rightBorder
          bottomBorder
          onPress={onPressTwinkle}
        />
        <MenuButton
          selected={selectedIcon === 'FireflyIcon'}
          iconName="FireflyIcon"
          textLabel="Firefly"
          rightBorder
          bottomBorder
          onPress={onPressFirefly}
        />
        <MenuButton
          selected={selectedIcon === 'BreezeIcon'}
          iconName="BreezeIcon"
          textLabel="Breeze"
          bottomBorder
          onPress={onPressBreeze}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <MenuButton
          selected={selectedIcon === 'RandomIcon'}
          iconName="RandomIcon"
          textLabel="Random"
          rightBorder
          onPress={onPressRandom}
        />
        <MenuButton
          selected={selectedIcon === 'RainDropsIcon'}
          iconName="RainDropsIcon"
          textLabel="Rain Drops"
          rightBorder
          onPress={onPressRainDrops}
        />
        <MenuButton
          selected={selectedIcon === 'JamboreeIcon'}
          iconName="JamboreeIcon"
          textLabel="Jamboree"
          onPress={onPressJamboree}
        />
      </View>
    </View>
  );
};

export default StarEffect;