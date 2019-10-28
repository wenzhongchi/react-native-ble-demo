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
  selected: boolean;
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
    selected,
  } = props;

  const [textColor, setTextColor] = useState(Colors.textColor1);
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
      onPress={onPress}
      underlayColor={Colors.borderColor}
      onShowUnderlay={() => {
        setTextColor(Colors.textColor2);
        setHighlight(true);
      }}
      onHideUnderlay={() => {
        setTextColor(Colors.textColor1);
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
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
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
