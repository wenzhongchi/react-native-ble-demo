import React, { useState } from 'react';
import {
  ViewStyle,
  Text,
  TouchableHighlight,
  View,
  StyleProp,
} from 'react-native';
import DebouncedButton from './Debounce';
import Colors from '../../styles/colors';
import ButtonIcon from '../Icon/ButtonIcon';
import { verticalTextScale } from '../../utils/textSize';

interface Props {
  onPress: () => void;
  iconName: string;
  iconColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
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
    iconColor,
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
          borderColor: disabled ? Colors.disabled : Colors.borderColor,
          borderRadius: 8,
        },
        containerStyle,
      ]}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: 40,
            height: '100%',
            borderRightWidth: 2,
            borderRightColor: lineColor,
            marginRight: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ButtonIcon
            size={25}
            style={{ alignSelf: 'center' }}
            name={iconName}
            color={disabled ? Colors.disabled : iconColor}
          />
        </View>
        <Text
          style={{
            color: disabled ? Colors.disabled : textColor,
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
  buttonHeight: verticalTextScale(48),
  fontSize: verticalTextScale(22),
  disabled: false,
  iconColor: 'white',
};

export default DebouncedButton(TouchButton);
