import React from "react";
import { TouchableOpacity, ViewStyle, Text } from "react-native";
import DebouncedButton from "./Debounce";
import Colors from "../../styles/colors";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    textLabel: string;
    buttonHeight?: number;
    fontSize?: number;
}

const LabelButton = (props: Props) => {
    const { onPress, containerStyle, buttonHeight, textLabel, fontSize } = props;

    const textColor = Colors.buttonColor2;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                {
                    height: buttonHeight,
                    justifyContent: "center"
                },
                containerStyle
            ]}
        >
            <Text
                style={{
                    color: textColor,
                    alignSelf: "center",
                    fontFamily: "Khula-SemiBold",
                    fontSize: fontSize
                }}
            >
                {textLabel}
            </Text>
        </TouchableOpacity>
    );
};

LabelButton.defaultProps = {
    buttonHeight: 48,
    fontSize: 13
};

export default DebouncedButton(LabelButton);
