import React from 'react';
import { View, ViewStyle, Text } from 'react-native';
import ColorButton from '../../components/button/ColorButton';
import TextButton from '../../components/button/TextButton';
import Colors from '../../styles/colors';
import ShootingSlider from '../../components/slider/ShootingSlider';

interface Props {
  onPress: (color: string) => void;
  onPressText?: (text: string) => void;
  onChange: (value: number) => void;
  containerStyle?: ViewStyle;
  selectedMode: string;
  sliderValue: number;
  selectedColor: string;
}

const ShootingColor = ({
  onPress,
  containerStyle,
  onPressText,
  selectedMode,
  onChange,
  sliderValue,
  selectedColor,
}: Props) => {
  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
        containerStyle,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
        }}>
        <TextButton
          selected={selectedMode === '1'}
          containerStyle={{ width: '100%' }}
          text="SS1"
          onPressText={(text: string) => {
            if (onPressText) onPressText('1');
          }}
        />
        <ColorButton
          selected={selectedColor === '#ed2644'}
          containerStyle={{ width: '100%' }}
          color="#ed2644"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#3bb44a'}
          containerStyle={{ width: '100%' }}
          color="#3bb44a"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#0d72b9'}
          containerStyle={{ width: '100%' }}
          color="#0d72b9"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#ffffff'}
          containerStyle={{ width: '100%' }}
          color="#ffffff"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <TextButton
          selected={selectedMode === '2'}
          containerStyle={{ width: '100%' }}
          text="SS2"
          onPressText={(text: string) => {
            if (onPressText) onPressText('2');
          }}
        />
        <ColorButton
          selected={selectedColor === '#f05b26'}
          containerStyle={{ width: '100%' }}
          color="#f05b26"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#8bc540'}
          containerStyle={{ width: '100%' }}
          color="#8bc540"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#662f8f'}
          containerStyle={{ width: '100%' }}
          color="#662f8f"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#fbf7c8'}
          containerStyle={{ width: '100%' }}
          color="#fbf7c8"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <TextButton
          selected={selectedMode === '3'}
          containerStyle={{ width: '100%' }}
          text="SS3"
          onPressText={(text: string) => {
            if (onPressText) onPressText('3');
          }}
        />
        <ColorButton
          selected={selectedColor === '#faaf3b'}
          containerStyle={{ width: '100%' }}
          color="#faaf3b"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#29a9e1'}
          containerStyle={{ width: '100%' }}
          color="#29a9e1"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#92298d'}
          containerStyle={{ width: '100%' }}
          color="#92298d"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#f9f297'}
          containerStyle={{ width: '100%' }}
          color="#f9f297"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <ColorButton
          selected={selectedColor === 'red'}
          containerStyle={{ width: '100%' }}
          iconName="RainbowLoadIcon"
          onPressColor={(color: string) => {
            if (onPressText) onPress('red');
          }}
        />
        <ColorButton
          selected={selectedColor === '#f5ea14'}
          containerStyle={{ width: '100%' }}
          color="#f5ea14"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#6fcbdc'}
          containerStyle={{ width: '100%' }}
          color="#6fcbdc"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#ec2079'}
          containerStyle={{ width: '100%' }}
          color="#ec2079"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          selected={selectedColor === '#fff181'}
          containerStyle={{ width: '100%' }}
          color="#fff181"
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.sliderThumbColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ShootingSlider
          disabled={false}
          sliderValue={sliderValue}
          onChange={onChange}
        />
      </View>
    </View>
  );
};

export default ShootingColor;
