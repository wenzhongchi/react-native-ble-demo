import React from "react";
import { TouchableOpacity, ViewStyle, Text } from "react-native";
import DebouncedButton from "./Debounce";
import Colors from "../../styles/colors";

interface Props {
    onPress: () => void;
    mode: "primary" | "secondary" | "third" | "disable";
    containerStyle?: ViewStyle;
    textLabel: string;
    buttonHeight?: number;
    fontSize?: number;
    disabled?: boolean;
}

const BasicButton = (props: Props) => {
    const {
        onPress,
        containerStyle,
        mode,
        buttonHeight,
        textLabel,
        fontSize,
        disabled
    } = props;

    let buttonColor: Colors;
    let textColor: Colors;
    let borderColor: Colors;

    if (mode === "primary") {
        buttonColor = Colors.buttonColor2;
        textColor = Colors.buttonTextColor;
        borderColor = Colors.buttonColor2;
    } else if (mode == "secondary") {
        buttonColor = Colors.white;
        textColor = Colors.buttonColor;
        borderColor = Colors.borderColor;
    } else if (mode === "third") {
        buttonColor = Colors.alertColorError;
        textColor = Colors.white;
        borderColor = Colors.alertColorError;
    } else {
        buttonColor = Colors.codeBackgroundColor;
        textColor = Colors.textColor4;
        borderColor = Colors.codeBackgroundColor;
    }

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                {
                    backgroundColor: buttonColor,
                    height: buttonHeight,
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: borderColor,
                    borderRadius: 8
                },
                containerStyle
            ]}
        >
            <Text
                style={{
                    color: textColor,
                    alignSelf: "center",
                    fontFamily: "Khula-Bold",
                    fontSize: fontSize
                }}
            >
                {textLabel}
            </Text>
        </TouchableOpacity>
    );
};

BasicButton.defaultProps = {
    buttonHeight: 48,
    fontSize: 15,
    disabled: false
};

export default DebouncedButton(BasicButton);
