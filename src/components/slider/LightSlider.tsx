import React from 'react';
import { ViewStyle, Text, View } from 'react-native';
import Colors from '../../styles/colors';
import Slider from 'react-native-slider';

interface Props {
  containerStyle?: ViewStyle;
  textLabel: string;
  sliderValue: number;
  leftText?: string;
  rightText?: string;
  minNumber?: number;
  maxNumber?: number;
  buttonHeight?: number;
  fontSize?: number;
  onChange: (value: number) => void;
  disabled: boolean;
}

const LightSlider = (props: Props) => {
  const {
    textLabel,
    fontSize,
    onChange,
    leftText,
    rightText,
    minNumber,
    maxNumber,
    sliderValue,
    disabled,
  } = props;

  return (
    <View style={{ flexDirection: 'row', marginTop: 0 }}>
      <Text
        style={{
          width: 60,
          color: Colors.white,
          alignSelf: 'center',
          fontSize: fontSize,
          fontWeight: 'bold',
          marginRight: 10,
        }}>
        {textLabel}
      </Text>
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: fontSize,
          fontWeight: 'bold',
        }}>
        {leftText || minNumber}
      </Text>
      <View
        style={{
          width: '58%',
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Slider
          disabled={disabled}
          value={sliderValue}
          minimumValue={minNumber}
          maximumValue={maxNumber}
          onSlidingComplete={onChange}
          step={1}
          minimumTrackTintColor={disabled ? Colors.disabled : Colors.white}
          trackStyle={{
            height: 4,
            borderRadius: 2,
            backgroundColor: disabled ? Colors.disabled : Colors.white,
          }}
          thumbStyle={{
            width: 20,
            height: 20,
            borderRadius: 20 / 2,
            backgroundColor: disabled
              ? Colors.disabled
              : Colors.sliderThumbColor,
            borderColor: Colors.white,
            borderWidth: 2,
          }}
        />
      </View>
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: fontSize,
          fontWeight: 'bold',
        }}>
        {rightText || maxNumber}
      </Text>
    </View>
  );
};

LightSlider.defaultProps = {
  minNumber: 0,
  maxNumber: 100,
  fontSize: 15,
};

export default LightSlider;
