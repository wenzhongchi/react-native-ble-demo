import React, { useState } from 'react';
import { ViewStyle, Text, TouchableHighlight, View } from 'react-native';
import DebouncedButton from './Debounce';
import Colors from '../../styles/colors';
import ButtonIcon from '../Icon/ButtonIcon';
import { verticalTextScale } from '../../utils/textSize';

interface Props {
  onPress: () => void;
  iconName: string;
  iconSize?: number;
  containerStyle?: ViewStyle;
  buttonHeight?: number;
  buttonWidth?: number;
  textLabel: string;
  iconColor?: string;
  fontSize?: number;
  disabled?: boolean;
  selected: boolean;
}

const MenuButton = (props: Props) => {
  const {
    onPress,
    containerStyle,
    iconName,
    iconSize,
    buttonHeight,
    buttonWidth,
    textLabel,
    fontSize,
    disabled,
    iconColor,
    selected,
  } = props;

  const [textColor, setTextColor] = useState(Colors.textColor1);

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={onPress}
      underlayColor={Colors.borderColor}
      onShowUnderlay={() => {
        setTextColor(Colors.textColor2);
      }}
      onHideUnderlay={() => {
        setTextColor(Colors.textColor1);
      }}
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
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: selected ? 3 : 0,
          borderColor: Colors.white,
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
          }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ButtonIcon
              size={iconSize}
              style={{ width: '100%' }}
              name={iconName}
              color={iconColor}
            />
          </View>
          <Text
            style={{
              marginTop: 10,
              color: textColor,
              alignSelf: 'center',
              fontSize: fontSize
                ? verticalTextScale(fontSize)
                : verticalTextScale(22),
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {textLabel}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

MenuButton.defaultProps = {
  buttonHeight: '100%',
  buttonWidth: '50%',
  fontSize: 22,
  disabled: false,
  iconSize: 70,
  iconMarginTop: 10,
  iconColor: 'white',
  selected: false,
};

export default DebouncedButton(MenuButton);
