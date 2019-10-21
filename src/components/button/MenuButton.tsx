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
  iconMarginTop?: number;
  containerStyle?: ViewStyle;
  buttonHeight?: number;
  buttonWidth?: number;
  textLabel: string;
  iconColor?: string;
  fontSize?: number;
  disabled?: boolean;
  leftBorder?: boolean;
  bottomBorder?: boolean;
  topBorder?: boolean;
  rightBorder?: boolean;
}

const MenuButton = (props: Props) => {
  const {
    onPress,
    containerStyle,
    iconName,
    iconSize,
    iconMarginTop,
    buttonHeight,
    buttonWidth,
    textLabel,
    fontSize,
    disabled,
    topBorder,
    leftBorder,
    rightBorder,
    bottomBorder,
    iconColor,
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
          borderTopWidth: topBorder ? 1 : 0,
          borderLeftWidth: leftBorder ? 1 : 0,
          borderRightWidth: rightBorder ? 1 : 0,
          borderBottomWidth: bottomBorder ? 1 : 0,
          borderColor: Colors.white,
        },
        containerStyle,
      ]}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
          }}>
          <ButtonIcon
            size={iconSize}
            style={{ alignSelf: 'center', marginTop: iconMarginTop }}
            name={iconName}
            color={iconColor}
          />
          <Text
            style={{
              marginTop: -15,
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
  iconSize: 100,
  iconMarginTop: 10,
  iconColor: 'white',
};

export default DebouncedButton(MenuButton);
