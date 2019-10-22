import React from 'react';
import { ViewStyle, Text, View, StyleSheet } from 'react-native';
import Colors from '../../styles/colors';
import Slider from 'react-native-slider';

interface Props {
  containerStyle?: ViewStyle;
  textLabel: string;
  sliderValue: number;
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
        {minNumber}
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
          minimumValue={0}
          maximumValue={100}
          onValueChange={onChange}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
        />
      </View>
      <Text
        style={{
          color: Colors.white,
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
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: Colors.sliderThumbColor,
    borderColor: Colors.white,
    borderWidth: 2,
  },
});

LightSlider.defaultProps = {
  minNumber: 0,
  maxNumber: 100,
  fontSize: 15,
};

export default LightSlider;
