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

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={onPress}
      underlayColor={Colors.borderColor}
      onShowUnderlay={() => setTextColor(Colors.textColor2)}
      onHideUnderlay={() => setTextColor(Colors.textColor1)}
      style={[
        {
          height: buttonHeight,
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: Colors.borderColor,
          borderRadius: 8,
        },
        containerStyle,
      ]}>
      <View>
        <ButtonIcon name={iconName} />
        <Text
          style={{
            color: textColor,
            alignSelf: 'center',
            fontSize: fontSize,
          }}>
          {textLabel}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

TouchButton.defaultProps = {
  buttonHeight: 48,
  fontSize: 15,
  disabled: false,
};

export default DebouncedButton(TouchButton);
