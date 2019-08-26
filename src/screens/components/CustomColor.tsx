import React from 'react';
import { View, ViewStyle, TouchableOpacity, Text } from 'react-native';
import Colors from '../../styles/colors';
import { ColorPicker } from 'react-native-color-picker';

interface Props {
  onChange: (color: string) => void;
  onClose: () => void;
  containerStyle?: ViewStyle;
}

const CustomColor = ({ onChange, onClose, containerStyle }: Props) => {
  return (
    <View
      style={[
        {
          flex: 1,
        },
        containerStyle,
      ]}>
      <View style={{ flex: 1 }}>
        <ColorPicker
          onColorSelected={(selectedColor: {
            h: number;
            s: number;
            v: number;
          }) => console.log(`Color selected: ${selectedColor}`)}
          style={{ flex: 1 }}
        />
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ alignSelf: 'center' }}>Custom</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.textColor1,
              width: 60,
            }}
            onPress={onClose}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomColor;
