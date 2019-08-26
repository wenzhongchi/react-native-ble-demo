import React, { useState } from 'react';
import { ViewStyle, Text, TouchableHighlight, View } from 'react-native';
import DebouncedButton from './Debounce';
import Colors from '../../styles/colors';
import ButtonIcon from '../Icon/ButtonIcon';

interface Props {
  onPress: () => void;
  color: string;
  containerStyle?: ViewStyle;
  buttonHeight?: number;
  buttonWidth?: number;
  disabled?: boolean;
  leftBorder?: boolean;
  bottomBorder?: boolean;
  topBorder?: boolean;
  rightBorder?: boolean;
}

const ColorButton = (props: Props) => {
  const {
    onPress,
    containerStyle,
    color,
    buttonHeight,
    buttonWidth,
    disabled,
    topBorder,
    leftBorder,
    rightBorder,
    bottomBorder,
  } = props;

  const [highlight, setHighlight] = useState(false);

  const topBorderWidth = highlight ? 4 : topBorder ? 1 : 0;
  const leftBorderWidth = highlight ? 4 : leftBorder ? 1 : 0;
  const rightBorderWidth = highlight ? 4 : rightBorder ? 1 : 0;
  const bottomBorderWidth = highlight ? 4 : bottomBorder ? 1 : 0;

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={onPress}
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
        },
        containerStyle,
      ]}>
      <View style={{ flex: 1, backgroundColor: color }} />
    </TouchableHighlight>
  );
};

ColorButton.defaultProps = {
  buttonHeight: '100%',
  buttonWidth: '25%',
  fontSize: 22,
  disabled: false,
};

export default DebouncedButton(ColorButton);