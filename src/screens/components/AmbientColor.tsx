import React from 'react';
import { View, ViewStyle, TouchableOpacity, Text } from 'react-native';
import ColorButton from '../../components/button/ColorButton';
import ButtonIcon from '../../components/Icon/ButtonIcon';

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
          selected={selectedColor === '#ed2644'}
          color="#ed2644"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#3bb44a'}
          color="#3bb44a"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#0d72b9'}
          color="#0d72b9"
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
