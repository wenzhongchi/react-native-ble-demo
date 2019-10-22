import React, { useState } from 'react';
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
  leftBorder?: boolean;
  bottomBorder?: boolean;
  topBorder?: boolean;
  rightBorder?: boolean;
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
    topBorder,
    leftBorder,
    rightBorder,
    bottomBorder,
  } = props;

  const [highlight, setHighlight] = useState(false);

  let topBorderWidth = highlight ? 2 : topBorder ? 1 : 0;
  let leftBorderWidth = highlight ? 2 : leftBorder ? 1 : 0;
  let rightBorderWidth = highlight ? 2 : rightBorder ? 1 : 0;
  let bottomBorderWidth = highlight ? 2 : bottomBorder ? 1 : 0;

  if (selected) {
    topBorderWidth = 2;
    leftBorderWidth = 2;
    rightBorderWidth = 2;
    bottomBorderWidth = 2;
  }

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={() => onPressText(text)}
      underlayColor={Colors.borderColor}
      onShowUnderlay={() => {
        setHighlight(true);
      }}
      onHideUnderlay={() => {
        setHighlight(false);
      }}
      style={[
        {
          height: buttonHeight,
          width: buttonWidth,
          flex: 1,
          borderTopWidth: topBorderWidth,
          borderLeftWidth: leftBorderWidth,
          borderRightWidth: rightBorderWidth,
          borderBottomWidth: bottomBorderWidth,
          borderColor: Colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: selected ? Colors.borderColor : Colors.borderColor1,
        },
        containerStyle,
      ]}>
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
    </TouchableHighlight>
  );
};

TextButton.defaultProps = {
  buttonHeight: '100%',
  buttonWidth: '25%',
  disabled: false,
};

export default DebouncedButton(TextButton);
