import React, { useState } from 'react';
import { ViewStyle, Text, View, StyleSheet } from 'react-native';
import Colors from '../../styles/colors';
import Slider from 'react-native-slider';
import { verticalTextScale } from '../../utils/textSize';

interface Props {
  containerStyle?: ViewStyle;
  textLabel: string;
  sliderValue: number;
  minNumber?: number;
  maxNumber?: number;
  buttonHeight?: number;
  fontSize?: number;
  onChange: (value: number) => {};
}

const LightSlider = (props: Props) => {
  const {
    textLabel,
    fontSize,
    onChange,
    minNumber,
    maxNumber,
    sliderValue,
  } = props;

  return (
    <View style={{ flexDirection: 'row', marginTop: 1 }}>
      <Text
        style={{
          width: 50,
          color: Colors.textColor3,
          alignSelf: 'center',
          fontSize: fontSize,
          fontWeight: 'bold',
          marginRight: 10,
        }}>
        {textLabel}
      </Text>
      <Text
        style={{
          color: Colors.textColor3,
          alignSelf: 'center',
          fontSize: fontSize,
          fontWeight: 'bold',
        }}>
        {minNumber}
      </Text>
      <View
        style={{
          width: '58%',
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Slider
          value={sliderValue}
          minimumValue={10}
          maximumValue={100}
          onValueChange={onChange}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
        />
      </View>
      <Text
        style={{
          color: Colors.textColor3,
          alignSelf: 'center',
          fontSize: fontSize,
          fontWeight: 'bold',
        }}>
        {maxNumber}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.white,
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    backgroundColor: Colors.sliderThumbColor,
    borderColor: Colors.white,
    borderWidth: 2,
  },
});

LightSlider.defaultProps = {
  minNumber: 0,
  maxNumber: 100,
  fontSize: verticalTextScale(15),
};

export default LightSlider;
