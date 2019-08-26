import React, { useState } from 'react';
import { ViewStyle, Text, TouchableHighlight, View } from 'react-native';
import DebouncedButton from './Debounce';
import Colors from '../../styles/colors';
import ButtonIcon from '../Icon/ButtonIcon';

interface Props {
  onPress: () => void;
  iconName: string;
  containerStyle?: ViewStyle;
  textLabel: string;
  buttonHeight?: number;
  fontSize?: number;
  disabled?: boolean;
}

const TouchButton = (props: Props) => {
  const {
    onPress,
    containerStyle,
    iconName,
    buttonHeight,
    textLabel,
    fontSize,
    disabled,
  } = props;

  const [textColor, setTextColor] = useState(Colors.textColor1);
  const [lineColor, setLineColor] = useState(Colors.borderColor);

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={onPress}
      underlayColor={Colors.borderColor}
      onShowUnderlay={() => {
        setTextColor(Colors.textColor2);
        setLineColor(Colors.borderColor1);
      }}
      onHideUnderlay={() => {
        setTextColor(Colors.textColor1);
        setLineColor(Colors.borderColor);
      }}
      style={[
        {
          height: buttonHeight,
          justifyContent: 'center',
          borderWidth: 3,
          borderColor: Colors.borderColor,
          borderRadius: 8,
        },
        containerStyle,
      ]}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: 40,
            borderRightWidth: 2,
            borderRightColor: lineColor,
            marginTop: 4,
            marginBottom: 4,
            marginRight: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ButtonIcon
            size={40}
            style={{ alignSelf: 'center', marginBottom: 5 }}
            name={iconName}
          />
        </View>
        <Text
          style={{
            color: textColor,
            alignSelf: 'center',
            fontSize: fontSize,
            fontWeight: 'bold',
          }}>
          {textLabel}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

TouchButton.defaultProps = {
  buttonHeight: 48,
  fontSize: 22,
  disabled: false,
};

export default DebouncedButton(TouchButton);
