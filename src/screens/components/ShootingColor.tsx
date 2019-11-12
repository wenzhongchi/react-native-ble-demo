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
  let defaultValue = sliderValue;
  if (sliderValue === 0) {
    defaultValue = 1;
  }
  if (sliderValue === 1) {
    defaultValue = 2;
  }
  if (sliderValue === 2) {
    defaultValue = 3;
  }
  if (sliderValue === 5) {
    defaultValue = 4;
  }
  if (sliderValue === 10) {
    defaultValue = 5;
  }

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
          selected={selectedColor === Colors.redColor}
          containerStyle={{ width: '100%' }}
          color="#ff0000"
          onPressColor={(color: string) => {
            onPress(Colors.redColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.greenColor}
          containerStyle={{ width: '100%' }}
          color="#00ff00"
          onPressColor={(color: string) => {
            onPress(Colors.greenColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.blueColor}
          containerStyle={{ width: '100%' }}
          color="#0000ff"
          onPressColor={(color: string) => {
            onPress(Colors.blueColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.whiteColor}
          containerStyle={{ width: '100%' }}
          color="#ffffff"
          onPressColor={(color: string) => {
            onPress(Colors.whiteColor);
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
          selected={selectedColor === Colors.orangeColor}
          containerStyle={{ width: '100%' }}
          color="#f05b26"
          onPressColor={(color: string) => {
            onPress(Colors.orangeColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.lightGreenColor}
          containerStyle={{ width: '100%' }}
          color="#8bc540"
          onPressColor={(color: string) => {
            onPress(Colors.lightGreenColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.lilacColor}
          containerStyle={{ width: '100%' }}
          color="#662f8f"
          onPressColor={(color: string) => {
            onPress(Colors.lilacColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.coolWhiteColor}
          containerStyle={{ width: '100%' }}
          color="#fbf7c8"
          onPressColor={(color: string) => {
            onPress(Colors.coolWhiteColor);
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
          selected={selectedColor === Colors.amberColor}
          containerStyle={{ width: '100%' }}
          color="#faaf3b"
          onPressColor={(color: string) => {
            onPress(Colors.amberColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.limeColor}
          containerStyle={{ width: '100%' }}
          color="#29a9e1"
          onPressColor={(color: string) => {
            onPress(Colors.limeColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.purpleColor}
          containerStyle={{ width: '100%' }}
          color="#92298d"
          onPressColor={(color: string) => {
            onPress(Colors.purpleColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.naturalWhiteColor}
          containerStyle={{ width: '100%' }}
          color="#f9f297"
          onPressColor={(color: string) => {
            onPress(Colors.naturalWhiteColor);
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
          selected={selectedColor === Colors.yellowColor}
          containerStyle={{ width: '100%' }}
          color="#f5ea14"
          onPressColor={(color: string) => {
            onPress(Colors.yellowColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.aquaColor}
          containerStyle={{ width: '100%' }}
          color="#6fcbdc"
          onPressColor={(color: string) => {
            onPress(Colors.aquaColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.pinkColor}
          containerStyle={{ width: '100%' }}
          color="#ec2079"
          onPressColor={(color: string) => {
            onPress(Colors.pinkColor);
          }}
        />
        <ColorButton
          selected={selectedColor === Colors.warmWhiteColor}
          containerStyle={{ width: '100%' }}
          color="#fff181"
          onPressColor={(color: string) => {
            onPress(Colors.warmWhiteColor);
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
          minNumber={1}
          maxNumber={5}
          sliderValue={defaultValue}
          onChange={(value: number) => {
            //translate slider value
            if (value === 1) {
              onChange(0);
              return;
            }
            if (value === 2) {
              onChange(1);
              return;
            }
            if (value === 3) {
              onChange(2);
              return;
            }
            if (value === 4) {
              onChange(5);
              return;
            }
            if (value === 5) {
              onChange(10);
              return;
            }
            onChange(value);
          }}
        />
      </View>
    </View>
  );
};

export default ShootingColor;
