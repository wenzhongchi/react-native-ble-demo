import React from 'react';
import { View, ViewStyle, TouchableOpacity, Text } from 'react-native';
import ColorButton from '../../components/button/ColorButton';
import ButtonIcon from '../../components/Icon/ButtonIcon';

interface Props {
  onPress: (color: string) => void;
  onCustom: () => void;
  containerStyle?: ViewStyle;
}

const AmbientColor = ({ onPress, onCustom, containerStyle }: Props) => {
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
        <ColorButton
          color="#ffffff"
          topBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
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
        <ColorButton color="#f9f297" bottomBorder />
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
