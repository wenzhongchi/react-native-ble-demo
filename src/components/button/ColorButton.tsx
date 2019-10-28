import React, { useState } from 'react';
import { ViewStyle, TouchableHighlight, View } from 'react-native';
import DebouncedButton from './Debounce';
import Colors from '../../styles/colors';
import ButtonIcon from '../Icon/ButtonIcon';

interface Props {
  onPressColor: (color?: string) => void;
  color?: string;
  iconName?: string;
  containerStyle?: ViewStyle;
  buttonHeight?: number;
  buttonWidth?: number;
  disabled?: boolean;
  leftBorder?: boolean;
  bottomBorder?: boolean;
  topBorder?: boolean;
  rightBorder?: boolean;
  selected: boolean;
}

const ColorButton = (props: Props) => {
  const {
    onPressColor,
    containerStyle,
    color,
    buttonHeight,
    buttonWidth,
    disabled,
    topBorder,
    leftBorder,
    rightBorder,
    bottomBorder,
    iconName,
    selected,
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
      onPress={() => onPressColor(color)}
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
      {iconName ? (
        <ButtonIcon
          name={iconName}
          style={{ flex: 1, width: '100%', height: '100%' }}
        />
      ) : (
        <View style={{ flex: 1, backgroundColor: color }} />
      )}
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
