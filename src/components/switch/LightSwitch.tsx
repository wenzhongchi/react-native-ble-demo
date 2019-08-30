import React, { useState } from 'react';
import { ViewStyle, Text, View } from 'react-native';
import Colors from '../../styles/colors';
import SwitchToggle from 'react-native-switch-toggle';
import { verticalTextScale } from '../../utils/textSize';

interface Props {
  containerStyle?: ViewStyle;
  fontSize?: number;
  onChange: (switchState: boolean) => {};
}

const LightSwitch = (props: Props) => {
  const { fontSize, onChange } = props;
  const [switchState, setSwitchState] = useState(true);

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text
        style={{
          color: Colors.textColor1,
          alignSelf: 'center',
          fontSize: fontSize,
          fontWeight: 'bold',
          flexDirection: 'row',
        }}>
        <Text style={{ color: switchState ? Colors.textColor1 : Colors.white }}>
          on
        </Text>
        <Text>/</Text>
        <Text style={{ color: switchState ? Colors.white : Colors.textColor1 }}>
          off
        </Text>
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
          circleColorOff="white"
          circleColorOn="white"
          backgroundColorOn={Colors.switchColor}
          backgroundColorOff={Colors.switchColor}
          switchOn={switchState}
          onPress={() => {
            setSwitchState(!switchState);
            onChange(switchState);
          }}
        />
      </View>
    </View>
  );
};

LightSwitch.defaultProps = {
  textLabel: 'on/off',
  fontSize: verticalTextScale(22),
};

export default LightSwitch;
