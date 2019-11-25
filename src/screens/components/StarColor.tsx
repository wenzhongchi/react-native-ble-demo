import React from 'react';
import { View, ViewStyle } from 'react-native';
import ColorButton from '../../components/button/ColorButton';
import Colors from '../../styles/colors';

interface Props {
  onPress: (color: string) => void;
  containerStyle?: ViewStyle;
  selectedColor: string;
}

const StarColor = ({ onPress, containerStyle, selectedColor }: Props) => {
  return (
    <View
      style={[
        {
          flex: 1,
        },
        containerStyle,
      ]}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          selected={selectedColor === Colors.redColor}
          color="#ff0000"
          onPressColor={(color: string) => {
            onPress(Colors.redColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.greenColor}
          color="#00ff00"
          onPressColor={(color: string) => {
            onPress(Colors.greenColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.blueColor}
          color="#0000ff"
          onPressColor={(color: string) => {
            onPress(Colors.blueColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.whiteColor}
          color="#ffffff"
          onPressColor={(color: string) => {
            onPress(Colors.whiteColor);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          selected={selectedColor === Colors.orangeColor}
          color="#f05b26"
          onPressColor={(color: string) => {
            onPress(Colors.orangeColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.lightGreenColor}
          color="#8bc540"
          onPressColor={(color: string) => {
            onPress(Colors.lightGreenColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.lilacColor}
          color="#662f8f"
          onPressColor={(color: string) => {
            onPress(Colors.lilacColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.coolWhiteColor}
          color="#fbf7c8"
          onPressColor={(color: string) => {
            onPress(Colors.coolWhiteColor);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          selected={selectedColor === Colors.amberColor}
          color="#faaf3b"
          onPressColor={(color: string) => {
            onPress(Colors.amberColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.limeColor}
          color="#00ff32"
          onPressColor={(color: string) => {
            onPress(Colors.limeColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.purpleColor}
          color="#92298d"
          onPressColor={(color: string) => {
            onPress(Colors.purpleColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.naturalWhiteColor}
          color="#f9f297"
          onPressColor={(color: string) => {
            onPress(Colors.naturalWhiteColor);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          selected={selectedColor === Colors.yellowColor}
          color="#f5ea14"
          onPressColor={(color: string) => {
            onPress(Colors.yellowColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.aquaColor}
          color="#6fcbdc"
          onPressColor={(color: string) => {
            onPress(Colors.aquaColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.pinkColor}
          color="#ec2079"
          onPressColor={(color: string) => {
            onPress(Colors.pinkColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.warmWhiteColor}
          color="#fff181"
          onPressColor={(color: string) => {
            onPress(Colors.warmWhiteColor);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          selected={selectedColor === 'red'}
          iconName="RainbowIcon"
          onPressColor={(color: string) => {
            onPress('Rainbow');
          }}
        />
        <ColorButton
          selected={selectedColor === 'blue'}
          iconName="RainbowLightIcon"
          onPressColor={(color: string) => {
            onPress('RainbowLight');
          }}
        />
        <ColorButton
          selected={selectedColor === 'green'}
          iconName="RainbowLoadIcon"
          onPressColor={(color: string) => {
            onPress('RainbowLoad');
          }}
        />
        <ColorButton
          selected={selectedColor === 'purple'}
          iconName="RainbowEyeIcon"
          onPressColor={(color: string) => {
            onPress('RainbowEye');
          }}
        />
      </View>
    </View>
  );
};

export default StarColor;
