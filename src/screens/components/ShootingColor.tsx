import React from 'react';
import { View, ViewStyle } from 'react-native';
import ColorButton from '../../components/button/ColorButton';

interface Props {
  onPress: (color: string) => void;
  containerStyle?: ViewStyle;
}

const ShootingColor = ({ onPress, containerStyle }: Props) => {
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
          color="#ed2644"
          topBorder
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#3bb44a"
          topBorder
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#0d72b9"
          topBorder
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton color="#ffffff" topBorder bottomBorder />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          color="#f05b26"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#8bc540"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#662f8f"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#fbf7c8"
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          color="#faaf3b"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#29a9e1"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#92298d"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#f9f297"
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          color="#f5ea14"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#6fcbdc"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#ec2079"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#fff181"
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          color="#ed2644"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#ed2644"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          color="#ed2644"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          iconName="RainbowEyeIcon"
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
    </View>
  );
};

export default ShootingColor;
