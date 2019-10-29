import React from 'react';
import { ViewStyle, TouchableHighlight, View, Text } from 'react-native';
import DebouncedButton from './Debounce';
import Colors from '../../styles/colors';
import { verticalTextScale } from '../../utils/textSize';

interface Props {
  onPressText: (text?: string) => void;
  text?: string;
  containerStyle?: ViewStyle;
  buttonHeight?: number;
  buttonWidth?: number;
  disabled?: boolean;
  selected: boolean;
}

const TextButton = (props: Props) => {
  const {
    onPressText,
    containerStyle,
    text,
    buttonHeight,
    buttonWidth,
    disabled,
    selected,
  } = props;

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={() => onPressText(text)}
      underlayColor={Colors.borderColor}
      style={[
        {
          height: buttonHeight,
          width: buttonWidth,
          flex: 1,
          borderWidth: 1,
          borderColor: Colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: selected ? Colors.borderColor : Colors.borderColor1,
        },
        containerStyle,
      ]}>
      <View
        style={{
          height: '100%',
          width: '100%',
          borderWidth: selected ? 3 : 0,
          borderColor: Colors.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: Colors.white,
            alignSelf: 'center',
            fontSize: verticalTextScale(26),
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

TextButton.defaultProps = {
  buttonHeight: '100%',
  buttonWidth: '25%',
  disabled: false,
};

export default DebouncedButton(TextButton);
