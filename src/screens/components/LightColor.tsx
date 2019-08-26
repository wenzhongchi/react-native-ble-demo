import React from 'react';
import { View, ViewStyle, TouchableOpacity, Text } from 'react-native';
import ColorButton from '../../components/button/ColorButton';
import Colors from '../../styles/colors';

interface Props {
  onPress: (color: string) => void;
  onClose: () => void;
  onCustom: () => void;
  containerStyle?: ViewStyle;
}

const LightColor = ({ onPress, onClose, onCustom, containerStyle }: Props) => {
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
          rightBorder
          bottomBorder
          onPress={() => onPress('red')}
        />
        <ColorButton color="#3bb44a" rightBorder bottomBorder />
        <ColorButton color="#0d72b9" rightBorder bottomBorder />
        <ColorButton color="#ffffff" bottomBorder />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton color="#f05b26" rightBorder bottomBorder />
        <ColorButton color="#8bc540" rightBorder bottomBorder />
        <ColorButton color="#662f8f" rightBorder bottomBorder />
        <ColorButton color="#fbf7c8" bottomBorder />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton color="#faaf3b" rightBorder bottomBorder />
        <ColorButton color="#29a9e1" rightBorder bottomBorder />
        <ColorButton color="#92298d" rightBorder bottomBorder />
        <ColorButton color="#f9f297" bottomBorder />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton color="#f5ea14" rightBorder bottomBorder />
        <ColorButton color="#6fcbdc" rightBorder bottomBorder />
        <ColorButton color="#ec2079" rightBorder bottomBorder />
        <ColorButton color="#fff181" bottomBorder />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={onCustom}
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
  );
};

export default LightColor;