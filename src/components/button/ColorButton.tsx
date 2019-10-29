import React from 'react';
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
    iconName,
    selected,
  } = props;

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={() => onPressColor(color)}
      underlayColor={Colors.borderColor}
      style={[
        {
          height: buttonHeight,
          width: buttonWidth,
          flex: 1,
          borderWidth: 1,
          borderColor: Colors.white,
        },
        containerStyle,
      ]}>
      <View
        style={{
          flex: 1,
          borderWidth: selected ? 3 : 0,
          borderColor: Colors.white,
        }}>
        {iconName ? (
          <ButtonIcon
            name={iconName}
            style={{ flex: 1, width: '100%', height: '100%' }}
          />
        ) : (
          <View style={{ flex: 1, backgroundColor: color }} />
        )}
      </View>
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
