import React from 'react';
import { View, ViewStyle } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';

interface Props {
  onChange: (color: string) => void;
  containerStyle?: ViewStyle;
}

const CustomColor = ({ onChange, containerStyle }: Props) => {
  return (
    <View
      style={[
        {
          flex: 1,
          marginVertical: 30,
          marginHorizontal: 50,
        },
        containerStyle,
      ]}>
      <ColorPicker
        defaultColor="red"
        onColorChange={(selectedColor: {
          h: number;
          s: number;
          v: number;
        }) => {}}
        onColorSelected={(selectedColor: {
          h: number;
          s: number;
          v: number;
        }) => {
          console.log(`Color selected: ${selectedColor}`);
          // @ts-ignore
          onChange(selectedColor);
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default CustomColor;
