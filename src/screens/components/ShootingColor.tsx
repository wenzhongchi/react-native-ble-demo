import React from 'react';
import { View, ViewStyle, StyleSheet, Text } from 'react-native';
import ColorButton from '../../components/button/ColorButton';
import TextButton from '../../components/button/TextButton';
import Colors from '../../styles/colors';
import Slider from 'react-native-slider';
import { ScreenHeight } from '../../utils/ScreenUtil';
import { verticalTextScale } from '../../utils/textSize';

interface Props {
  onPress: (color: string) => void;
  onPressText?: (text: string) => void;
  onChange: (value: number) => void;
  containerStyle?: ViewStyle;
  selectedMode: string;
  sliderValue: number;
}

const ShootingColor = ({
  onPress,
  containerStyle,
  onPressText,
  selectedMode,
  onChange,
  sliderValue,
}: Props) => {
  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        containerStyle,
      ]}>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
        }}>
        <ColorButton
          containerStyle={{ width: '100%' }}
          iconName="RainbowLoadIcon"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress('RainbowLoad');
          }}
        />
        <TextButton
          selected={selectedMode === '1'}
          containerStyle={{ width: '100%' }}
          text="SS1"
          rightBorder
          bottomBorder
          onPressText={(text: string) => {
            if (onPressText) onPressText('1');
          }}
        />
        <TextButton
          selected={selectedMode === '2'}
          containerStyle={{ width: '100%' }}
          text="SS2"
          rightBorder
          bottomBorder
          onPressText={(text: string) => {
            if (onPressText) onPressText('2');
          }}
        />
        <TextButton
          selected={selectedMode === '3'}
          containerStyle={{ width: '100%' }}
          text="SS3"
          rightBorder
          bottomBorder
          onPressText={(text: string) => {
            if (onPressText) onPressText('3');
          }}
        />
      </View>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#ed2644"
          topBorder
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#f05b26"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#faaf3b"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#f5ea14"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#3bb44a"
          topBorder
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#8bc540"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#29a9e1"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#6fcbdc"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#0d72b9"
          topBorder
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#662f8f"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#92298d"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#ec2079"
          rightBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#ffffff"
          topBorder
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#fbf7c8"
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#f9f297"
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
        <ColorButton
          containerStyle={{ width: '100%' }}
          color="#fff181"
          bottomBorder
          onPressColor={(color: string) => {
            onPress(color);
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.sliderThumbColor,
        }}>
        <Text>Time</Text>
        <View
          pointerEvents="box-none"
          style={{
            flex: 1,
          }}>
          <Slider
            pointerEvents="box-none"
            vertical
            style={{
              flex: 1,
              marginLeft: verticalTextScale(-100),
              height: 40,
              width: 0.35 * ScreenHeight,
              transform: [{ rotate: '90deg' }],
            }}
            disabled={false}
            minimumValue={0}
            maximumValue={10}
            value={sliderValue}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            onValueChange={onChange}
          />
        </View>
      </View>
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

export default ShootingColor;
