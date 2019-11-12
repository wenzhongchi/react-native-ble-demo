import React from 'react';
import { View, ViewStyle, TouchableOpacity, Text } from 'react-native';
import ColorButton from '../../components/button/ColorButton';
import ButtonIcon from '../../components/Icon/ButtonIcon';
import Colors from '../../styles/colors';

interface Props {
  onPress: (color: string) => void;
  onCustom: () => void;
  containerStyle?: ViewStyle;
  selectedColor: string;
}

const AmbientColor = ({
  onPress,
  onCustom,
  containerStyle,
  selectedColor,
}: Props) => {
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
          color="#29a9e1"
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
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={onCustom}
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ButtonIcon name="EffectsColorIcon" color="white" />
          <Text style={{ alignSelf: 'center', color: 'white', fontSize: 20 }}>
            Custom
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AmbientColor;
