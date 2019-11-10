import React from 'react';
import { View, ViewStyle } from 'react-native';
import ColorButton from '../../components/button/ColorButton';

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
          selected={selectedColor === '#ff0000'}
          color="#ff0000"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#00ff00'}
          color="#00ff00"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#0000ff'}
          color="#0000ff"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#ffffff'}
          color="#ffffff"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          selected={selectedColor === '#f05b26'}
          color="#f05b26"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#8bc540'}
          color="#8bc540"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#662f8f'}
          color="#662f8f"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#fbf7c8'}
          color="#fbf7c8"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          selected={selectedColor === '#faaf3b'}
          color="#faaf3b"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#29a9e1'}
          color="#29a9e1"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#92298d'}
          color="#92298d"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#f9f297'}
          color="#f9f297"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          selected={selectedColor === '#f5ea14'}
          color="#f5ea14"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#6fcbdc'}
          color="#6fcbdc"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#ec2079'}
          color="#ec2079"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#fff181'}
          color="#fff181"
          onPressColor={(color: string) => {
            onPress(color);
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
