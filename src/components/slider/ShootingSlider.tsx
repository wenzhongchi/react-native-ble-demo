import React from 'react';
import { ViewStyle, Text, View } from 'react-native';
import Colors from '../../styles/colors';
import Slider from 'react-native-slider';
import { verticalTextScale } from '../../utils/textSize';

interface Props {
  containerStyle?: ViewStyle;
  sliderValue: number;
  minNumber?: number;
  maxNumber?: number;
  buttonHeight?: number;
  fontSize?: number;
  onChange: (value: number) => void;
  disabled: boolean;
}

const ShootingSlider = (props: Props) => {
  const {
    fontSize,
    onChange,
    minNumber,
    maxNumber,
    sliderValue,
    disabled,
  } = props;

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: verticalTextScale(13),
          fontWeight: 'bold',
        }}>
        OFF
      </Text>
      <View
        style={{
          width: '58%',
          marginLeft: 20,
          marginRight: 20,
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            position: 'absolute',
            top: verticalTextScale(-3),
            left: 0,
            height: 10,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Text
            style={{
              marginLeft: 20,
              color: Colors.white,
              alignSelf: 'center',
              fontSize: verticalTextScale(10),
              fontWeight: 'bold',
            }}>
            1 min
          </Text>
          <Text
            style={{
              color: Colors.white,
              alignSelf: 'center',
              fontSize: verticalTextScale(10),
              fontWeight: 'bold',
            }}>
            2 min
          </Text>
          <Text
            style={{
              marginRight: 20,
              color: Colors.white,
              alignSelf: 'center',
              fontSize: verticalTextScale(10),
              fontWeight: 'bold',
            }}>
            5 min
          </Text>
        </View>
        <Slider
          disabled={disabled}
          value={sliderValue}
          minimumValue={minNumber}
          maximumValue={maxNumber}
          onValueChange={onChange}
          step={1}
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
          fontSize: verticalTextScale(13),
          fontWeight: 'bold',
        }}>
        10 MINUTES
      </Text>
    </View>
  );
};

ShootingSlider.defaultProps = {
  minNumber: 0,
  maxNumber: 4,
  fontSize: 13,
};

export default ShootingSlider;
