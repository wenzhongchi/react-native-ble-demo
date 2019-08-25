import React from 'react';
import { TouchableOpacity, ViewStyle, Text } from 'react-native';
import DebouncedButton from './Debounce';
import Colors from '../../styles/colors';

interface Props {
  onPress: () => void;
  containerStyle?: ViewStyle;
  textLabel: string;
  buttonHeight?: number;
  fontSize?: number;
}

const MenuButton = (props: Props) => {
  const { onPress, containerStyle, buttonHeight, textLabel, fontSize } = props;

  const textColor = Colors.textColor1;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: buttonHeight,
          justifyContent: 'center',
        },
        containerStyle,
      ]}>
      <Text
        style={{
          color: textColor,
          alignSelf: 'center',
          fontSize: fontSize,
        }}>
        {textLabel}
      </Text>
    </TouchableOpacity>
  );
};

MenuButton.defaultProps = {
  buttonHeight: 48,
  fontSize: 13,
};

export default DebouncedButton(MenuButton);
