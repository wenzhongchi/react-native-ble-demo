import React, { useState } from 'react';
import { ViewStyle, Text, View, GestureResponderEvent } from 'react-native';
import Colors from '../../styles/colors';
import SwitchToggle from 'react-native-switch-toggle';

interface Props {
  containerStyle?: ViewStyle;
  textLabel?: string;
  fontSize?: number;
  onChange: (event: GestureResponderEvent) => {};
}

const LightSwitch = (props: Props) => {
  const { textLabel, fontSize, onChange } = props;

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text
        style={{
          color: Colors.textColor1,
          alignSelf: 'center',
          fontSize: fontSize,
          fontWeight: 'bold',
        }}>
        {textLabel}
      </Text>
      <View
        style={{
          width: 40,
          marginLeft: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SwitchToggle
          containerStyle={{
            width: 60,
            height: 38,
            borderRadius: 20,
            padding: 5,
          }}
          circleStyle={{
            width: 28,
            height: 28,
            borderRadius: 19,
            backgroundColor: 'white',
          }}
          backgroundColorOn={Colors.switchColor}
          backgroundColorOff={Colors.switchColor}
          switchOn={false}
          onPress={onChange}
        />
      </View>
    </View>
  );
};

LightSwitch.defaultProps = {
  textLabel: 'on/off',
  fontSize: 22,
};

export default LightSwitch;
